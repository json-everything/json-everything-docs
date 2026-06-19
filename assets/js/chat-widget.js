/**
 * AI Chat Widget — powered by OpenRouter
 * Provides a floating chat modal accessible from the search bar.
 * Uses keyword-based retrieval against search.json for RAG context.
 */

(function () {
  'use strict';

  var OPENROUTER_API = 'https://openrouter.ai/api/v1/chat/completions';
  var SEARCH_JSON_URL = '/assets/js/data/search.json';
  var SOURCE_INDEX_URL = '/assets/js/data/source-index.json';
  var OPENROUTER_KEY_STORAGE = 'jsonEverythingDocs.openrouterKey';
  var CHAT_SESSION_STORAGE = 'jsonEverythingDocs.chatSession.v1';
  var DEFAULT_DRAWER_WIDTH = 480;
  var MIN_DRAWER_WIDTH = 320;
  var MAX_DRAWER_WIDTH = 960;
  var MAX_CONTEXT_CHARS = 1500;
  var MAX_DOC_CONTEXT_ITEMS = 3;
  var MAX_SOURCE_CONTEXT_ITEMS = 3;
  var MAX_RETRIEVAL_USER_TURNS = 2;

  var searchIndex = null;
  var sourceIndex = null;
  var conversationHistory = [];
  var isStreaming = false;

  // ── DOM refs ────────────────────────────────────────────────────────────────

  function el(id) { return document.getElementById(id); }

  var modal, dialog, messages, input, sendBtn, closeBtn, clearBtn, trigger, resizeHandle;
  var drawerWidth = DEFAULT_DRAWER_WIDTH;

  function initRefs() {
    modal    = el('ai-chat-modal');
    dialog   = modal ? modal.querySelector('.ai-chat-dialog') : null;
    messages = el('ai-chat-messages');
    input    = el('ai-chat-input');
    sendBtn  = el('ai-chat-send');
    closeBtn = el('ai-chat-close');
    clearBtn = el('ai-chat-clear');
    trigger  = el('ai-chat-trigger');
    resizeHandle = el('ai-chat-resize-handle');
  }

  // ── Drawer open/close ───────────────────────────────────────────────────────

  function openModal(instant) {
    if (!modal || !dialog) return;

    if (modal.hidden) {
      modal.hidden = false;
    }

    if (instant) {
      // Force transition: none before adding is-open.
      // A forced reflow (offsetHeight read) between the two operations is
      // required so the browser registers the style change before the class
      // change — otherwise both happen in the same render frame and the
      // browser still runs the transition.
      dialog.style.transition = 'none';
      document.body.classList.add('ai-chat-instant');
      // eslint-disable-next-line no-unused-expressions
      dialog.offsetHeight; // force reflow
      modal.classList.add('is-open');
      document.body.classList.add('ai-chat-open');
      persistChatSession(true);
      // Restore transitions after two frames so the reflow has fully settled.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          dialog.style.transition = '';
          document.body.classList.remove('ai-chat-instant');
        });
      });
    } else {
      requestAnimationFrame(function () {
        modal.classList.add('is-open');
        document.body.classList.add('ai-chat-open');
        persistChatSession(true);
      });
    }

    if (messages.children.length === 0) {
      showEmptyState();
    }
    input.focus();
  }

  function closeModal() {
    if (!modal || !dialog || modal.hidden) return;

    modal.classList.remove('is-open');
    document.body.classList.remove('ai-chat-open');
    persistChatSession(false);

    var onTransitionEnd = function (event) {
      if (event.target !== dialog) return;
      dialog.removeEventListener('transitionend', onTransitionEnd);
      if (!modal.classList.contains('is-open')) {
        modal.hidden = true;
      }
    };

    dialog.addEventListener('transitionend', onTransitionEnd);
  }

  function showEmptyState() {
    var div = document.createElement('div');
    div.className = 'ai-chat-empty';
    div.id = 'ai-chat-empty';
    div.textContent = 'Ask anything about the json-everything libraries. Context is pulled from the documentation automatically.';
    messages.appendChild(div);
  }

  function removeEmptyState() {
    var empty = el('ai-chat-empty');
    if (empty) empty.remove();
  }

  function isDrawerOpen() {
    return !!(modal && !modal.hidden && modal.classList.contains('is-open'));
  }

  function readChatSession() {
    try {
      var raw = window.sessionStorage.getItem(CHAT_SESSION_STORAGE);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (_) {
      return null;
    }
  }

  function writeChatSession(data) {
    try {
      window.sessionStorage.setItem(CHAT_SESSION_STORAGE, JSON.stringify(data));
    } catch (_) {
      // Ignore session storage errors.
    }
  }

  function persistChatSession(overrideOpen) {
    var openState = typeof overrideOpen === 'boolean' ? overrideOpen : isDrawerOpen();
    writeChatSession({
      isOpen: openState,
      drawerWidth: drawerWidth,
      conversation: conversationHistory
    });
  }

  function isMobileDrawerMode() {
    return window.matchMedia('(max-width: 576px)').matches;
  }

  function getMaxDrawerWidth() {
    var viewportCap = Math.floor(window.innerWidth * 0.9);
    return Math.max(MIN_DRAWER_WIDTH, Math.min(MAX_DRAWER_WIDTH, viewportCap));
  }

  function clampDrawerWidth(value) {
    var width = Math.round(Number(value) || DEFAULT_DRAWER_WIDTH);
    var maxWidth = getMaxDrawerWidth();
    if (width < MIN_DRAWER_WIDTH) return MIN_DRAWER_WIDTH;
    if (width > maxWidth) return maxWidth;
    return width;
  }

  function applyDrawerWidth(value, persist) {
    if (!document.body) return;

    if (isMobileDrawerMode()) {
      document.body.style.removeProperty('--ai-chat-drawer-width');
      document.body.style.removeProperty('--ai-chat-drawer-push');
      if (persist) persistChatSession();
      return;
    }

    drawerWidth = clampDrawerWidth(value);
    var widthPx = drawerWidth + 'px';
    document.body.style.setProperty('--ai-chat-drawer-width', widthPx);
    document.body.style.setProperty('--ai-chat-drawer-push', widthPx);
    if (persist) persistChatSession();
  }

  function initResizeHandle() {
    if (!resizeHandle || !dialog) return;

    resizeHandle.addEventListener('pointerdown', function (e) {
      if (isMobileDrawerMode()) return;
      if (e.button !== 0) return;

      e.preventDefault();

      var startX = e.clientX;
      var startWidth = drawerWidth;
      document.body.classList.add('ai-chat-resizing');
      resizeHandle.setPointerCapture(e.pointerId);

      var onMove = function (moveEvent) {
        var delta = startX - moveEvent.clientX;
        applyDrawerWidth(startWidth + delta, false);
      };

      var onUp = function (upEvent) {
        document.body.classList.remove('ai-chat-resizing');
        resizeHandle.releasePointerCapture(upEvent.pointerId);
        resizeHandle.removeEventListener('pointermove', onMove);
        resizeHandle.removeEventListener('pointerup', onUp);
        resizeHandle.removeEventListener('pointercancel', onUp);
        persistChatSession();
      };

      resizeHandle.addEventListener('pointermove', onMove);
      resizeHandle.addEventListener('pointerup', onUp);
      resizeHandle.addEventListener('pointercancel', onUp);
    });

    window.addEventListener('resize', function () {
      applyDrawerWidth(drawerWidth, false);
    });
  }

  function normalizeConversationItems(items) {
    if (!Array.isArray(items)) return [];
    return items
      .filter(function (item) {
        return item && (item.role === 'user' || item.role === 'assistant') && typeof item.content === 'string';
      })
      .map(function (item) {
        return {
          role: item.role,
          content: item.content,
          references: normalizeDocReferences(item.references)
        };
      });
  }

  function normalizeDocReferences(items) {
    if (!Array.isArray(items)) return [];

    return items
      .filter(function (item) {
        return item && typeof item.title === 'string' && typeof item.url === 'string';
      })
      .map(function (item) {
        return {
          title: item.title,
          url: item.url
        };
      });
  }

  // ── Search index / RAG ──────────────────────────────────────────────────────

  function loadSearchIndex() {
    if (searchIndex !== null) return Promise.resolve(searchIndex);
    return fetch(SEARCH_JSON_URL)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        searchIndex = data;
        return data;
      })
      .catch(function () {
        searchIndex = [];
        return [];
      });
  }

  function loadSourceIndex() {
    if (sourceIndex !== null) return Promise.resolve(sourceIndex);
    return fetch(SOURCE_INDEX_URL)
      .then(function (r) {
        if (!r.ok) return { items: [] };
        return r.json();
      })
      .then(function (data) {
        sourceIndex = Array.isArray(data) ? data : (Array.isArray(data.items) ? data.items : []);
        return sourceIndex;
      })
      .catch(function () {
        sourceIndex = [];
        return [];
      });
  }

  function tokenize(text) {
    return (text || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  }

  function scoreDoc(doc, queryTokens) {
    var titleTokens = tokenize(doc.title);
    var contentText = (doc.content || '').toLowerCase();
    var score = 0;
    queryTokens.forEach(function (tok) {
      // Title match is worth 3×
      if (titleTokens.indexOf(tok) !== -1) score += 3;
      // Content term frequency (capped at 5 to avoid noise)
      var count = 0;
      var pos = 0;
      while ((pos = contentText.indexOf(tok, pos)) !== -1 && count < 5) {
        count++;
        pos++;
      }
      score += count;
    });
    return score;
  }

  function retrieveContextFromIndex(indexItems, query, maxItems) {
    if (!indexItems || indexItems.length === 0) return [];
    var queryTokens = tokenize(query);
    if (queryTokens.length === 0) return [];

    var scored = indexItems.map(function (doc) {
      return { doc: doc, score: scoreDoc(doc, queryTokens) };
    });

    scored.sort(function (a, b) { return b.score - a.score; });

    return scored.slice(0, maxItems).filter(function (s) { return s.score > 0; }).map(function (s) {
      return s.doc;
    });
  }

  function buildRetrievalQuery(userText) {
    var recentUserTurns = conversationHistory
      .filter(function (m) { return m.role === 'user'; })
      .slice(-MAX_RETRIEVAL_USER_TURNS)
      .map(function (m) { return m.content; });

    recentUserTurns.push(userText);
    return recentUserTurns.join('\n');
  }

  function retrieveContext(query) {
    var docs = retrieveContextFromIndex(searchIndex, query, MAX_DOC_CONTEXT_ITEMS);
    var sources = retrieveContextFromIndex(sourceIndex, query, MAX_SOURCE_CONTEXT_ITEMS);

    if (docs.length === 0 && sources.length === 0) return [];

    var top = docs.slice();

    // Always include the current page from docs if it's in the index and not already included
    var currentPath = window.location.pathname;
    var alreadyIncluded = top.some(function (d) { return d.url === currentPath; });
    if (!alreadyIncluded) {
      var currentDoc = searchIndex.find(function (d) { return d.url === currentPath; });
      if (currentDoc) {
        if (top.length >= MAX_DOC_CONTEXT_ITEMS) top.pop();
        top.unshift(currentDoc);
      }
    }

    return top.concat(sources);
  }

  function buildSystemPrompt(relevantDocs) {
    var base = 'You are a helpful assistant for the json-everything .NET library ecosystem. ' +
      'Answer questions based on the retrieved context provided below. ' +
      'Prioritize source code context entries where Source is github over docs entries, and treat docs as secondary support. ' +
      'If source and docs conflict, trust source first and call out the discrepancy briefly. ' +
      'Be concise, technical, and accurate. Use markdown formatting where helpful (code blocks, lists). ' +
      'When you output fenced code blocks, always include a language tag after the opening backticks (for example ```csharp). ' +
      'If the answer is not covered by the provided context, say so clearly rather than guessing.';

    if (relevantDocs.length === 0) {
      return base + '\n\nNo source or documentation context was found for this query.';
    }

    var context = relevantDocs.map(function (doc) {
      var content = (doc.content || '').substring(0, MAX_CONTEXT_CHARS);
      var sourceType = doc.source || 'docs';
      var path = doc.path ? ('\nPath: ' + doc.path) : '';
      return '### ' + doc.title + '\nSource: ' + sourceType + '\nURL: ' + doc.url + path + '\n\n' + content;
    }).join('\n\n---\n\n');

    return base + '\n\n--- RETRIEVAL CONTEXT ---\n\n' + context + '\n\n--- END CONTEXT ---';
  }

  // ── Message rendering ────────────────────────────────────────────────────────

  function appendMessage(role, text) {
    var div = document.createElement('div');
    div.className = 'ai-msg ai-msg--' + role;
    if (role === 'assistant') {
      setAssistantMarkdown(div, text);
    } else {
      div.textContent = text;
    }
    messages.appendChild(div);
    scrollToBottom();
    return div;
  }

  function appendError(text) {
    var div = document.createElement('div');
    div.className = 'ai-msg ai-msg--error';
    div.textContent = text;
    messages.appendChild(div);
    scrollToBottom();
  }

  function appendTypingIndicator() {
    var div = document.createElement('div');
    div.className = 'ai-typing-indicator';
    div.id = 'ai-typing';
    div.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(div);
    scrollToBottom();
    return div;
  }

  function removeTypingIndicator() {
    var indicator = el('ai-typing');
    if (indicator) indicator.remove();
  }

  function extractDocReferences(relevantDocs) {
    if (!relevantDocs || relevantDocs.length === 0) return [];

    // Keep only docs references (exclude source-index entries from GitHub).
    var docsOnly = relevantDocs.filter(function (doc) {
      var sourceType = (doc.source || 'docs').toLowerCase();
      return sourceType !== 'github';
    });

    if (docsOnly.length === 0) return [];

    var seen = Object.create(null);
    var unique = docsOnly.filter(function (doc) {
      var key = doc.url || doc.title;
      if (!key || seen[key]) return false;
      seen[key] = true;
      return true;
    }).slice(0, 4).map(function (doc) {
      return {
        title: doc.title || 'Untitled',
        url: doc.url || ''
      };
    });

    return normalizeDocReferences(unique);
  }

  function appendDocReferences(targetEl, references) {
    if (!targetEl) return;

    var normalizedRefs = normalizeDocReferences(references);
    if (normalizedRefs.length === 0) return;

    var parent = targetEl.parentNode;
    if (!parent) return;

    var existing = parent.querySelector('.ai-chat-references');
    if (existing) existing.remove();

    var refs = document.createElement('div');
    refs.className = 'ai-chat-references';
    refs.innerHTML = '<span>References:</span> ' + normalizedRefs.map(function (doc) {
      var href = sanitizeHref(doc.url || '');
      if (!href) return escapeHtml(doc.title || 'Untitled');
      return '<a href="' + href + '">' + escapeHtml(doc.title || href) + '</a>';
    }).join(', ');
    targetEl.insertAdjacentElement('afterend', refs);
  }

  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  function escapeHtml(text) {
    return (text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function sanitizeHref(url) {
    var trimmed = (url || '').trim();
    if (/^(https?:\/\/|\/)/i.test(trimmed)) {
      return trimmed;
    }
    return '';
  }

  function renderInlineMarkdown(text) {
    var html = escapeHtml(text || '');

    // Links: [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, label, href) {
      var safeHref = sanitizeHref(href);
      if (!safeHref) return label;
      return '<a href="' + safeHref + '" target="_blank" rel="noopener">' + label + '</a>';
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Bold / italics
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    return html;
  }

  function dedentCode(code) {
    var normalized = (code || '').replace(/\r\n/g, '\n');
    var lines = normalized.split('\n');

    while (lines.length > 0 && lines[0].trim() === '') lines.shift();
    while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();

    var minIndent = null;
    lines.forEach(function (line) {
      if (!line.trim()) return;
      var match = line.match(/^[ \t]*/);
      var indent = match ? match[0].length : 0;
      if (minIndent === null || indent < minIndent) {
        minIndent = indent;
      }
    });

    if (!minIndent) return lines.join('\n');

    return lines.map(function (line) {
      if (!line.trim()) return '';
      return line.slice(minIndent);
    }).join('\n');
  }

  var LANG_DISPLAY_NAMES = {
    csharp: 'C#',
    javascript: 'JavaScript',
    json: 'JSON',
    yaml: 'YAML',
    bash: 'Bash',
    shell: 'Shell',
    sql: 'SQL',
    xml: 'XML',
    html: 'HTML',
    css: 'CSS',
    plaintext: 'Text'
  };

  function normalizeLanguage(lang) {
    var normalized = (lang || '').trim().toLowerCase();
    if (!normalized) return '';

    if (normalized === 'c#' || normalized === 'cs' || normalized === 'dotnet') return 'csharp';
    if (normalized === 'js') return 'javascript';
    if (normalized === 'yml') return 'yaml';
    if (normalized === 'shell' || normalized === 'sh') return 'bash';
    return normalized;
  }

  function langDisplayName(normalizedLang) {
    return LANG_DISPLAY_NAMES[normalizedLang] || normalizedLang.toUpperCase();
  }

  function inferLanguage(code) {
    var sample = (code || '').trim();
    if (!sample) return '';

    if (/\b(using|namespace|public|private|internal|class|record|interface)\b/.test(sample)) return 'csharp';
    if (/^\s*[\[{]/.test(sample) && /"\s*:/.test(sample)) return 'json';
    if (/^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP)\b/i.test(sample)) return 'sql';
    if (/^\s*(npm|yarn|pnpm|dotnet|git|curl)\b/m.test(sample)) return 'bash';
    return '';
  }

  function highlightCode(code, language) {
    var lang = normalizeLanguage(language);
    var html = escapeHtml(code || '');

    if (!lang) return html;

    if (lang === 'csharp') {
      // Apply keyword/number passes before inserting any span attributes for strings/comments.
      // This prevents accidental matches against HTML attributes (for example `class="..."`).
      html = html.replace(/\b(public|private|protected|internal|class|record|interface|struct|enum|namespace|using|return|new|if|else|switch|case|foreach|for|while|try|catch|throw|static|void|var|async|await|get|set|where|this)\b/g, '<span class="k">$1</span>');
      html = html.replace(/\b(true|false|null)\b/g, '<span class="kc">$1</span>');
      html = html.replace(/\b\d+(\.\d+)?\b/g, '<span class="m">$1</span>');
      html = html.replace(/(&quot;[\s\S]*?&quot;|&#39;[\s\S]*?&#39;)/g, '<span class="s">$1</span>');
      html = html.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, '<span class="c">$1</span>');
      return html;
    }

    if (lang === 'json') {
      html = html.replace(/(&quot;[^&]*?&quot;)(\s*:)/g, '<span class="na">$1</span>$2');
      html = html.replace(/(:\s*)(&quot;[\s\S]*?&quot;)/g, '$1<span class="s">$2</span>');
      html = html.replace(/\b(true|false|null)\b/g, '<span class="kc">$1</span>');
      html = html.replace(/\b-?\d+(\.\d+)?\b/g, '<span class="m">$1</span>');
      return html;
    }

    if (lang === 'bash' || lang === 'shell') {
      html = html.replace(/(^|\n)(\$\s*[^\n]+)/g, '$1<span class="k">$2</span>');
      html = html.replace(/(\s)(--?[a-zA-Z0-9-]+)/g, '$1<span class="m">$2</span>');
      return html;
    }

    return html;
  }

  function renderMarkdown(text) {
    var src = (text || '').replace(/\r\n/g, '\n');
    var tokens = src.split(/(```[\s\S]*?```)/g);
    var htmlParts = [];

    tokens.forEach(function (token) {
      if (!token) return;

      if (token.startsWith('```') && token.endsWith('```')) {
        var inner = token.slice(3, -3);
        var nl = inner.indexOf('\n');
        var lang = '';
        var code = inner;

        if (nl !== -1) {
          lang = inner.slice(0, nl).trim();
          code = inner.slice(nl + 1);
        }

        code = dedentCode(code);

        var inferred = inferLanguage(code);
        var normalizedLang = normalizeLanguage(lang || inferred);
        var wrapperClass = normalizedLang
          ? 'language-' + escapeHtml(normalizedLang) + ' highlighter-rouge'
          : 'highlighter-rouge';
        var codeClass = normalizedLang ? ' class="language-' + escapeHtml(normalizedLang) + '"' : '';
        var labelText = normalizedLang ? langDisplayName(normalizedLang) : '';
        var headerSpan = labelText
          ? '<span data-label-text="' + escapeHtml(labelText) + '"><i class="fas fa-code small"></i></span>'
          : '<span></span>';
        var copyButton = '<button type="button" class="ai-chat-copy-btn" aria-label="Copy code"><i class="far fa-clipboard"></i></button>';
        var highlightedCode = highlightCode(code, normalizedLang);

        htmlParts.push(
          '<div class="' + wrapperClass + '">'
          + '<div class="code-header">' + headerSpan + copyButton + '</div>'
          + '<div class="highlight"><pre class="highlight"><code' + codeClass + '>'
          + highlightedCode
          + '</code></pre></div>'
          + '</div>'
        );
        return;
      }

      var blocks = token.split(/\n\n+/);
      blocks.forEach(function (block) {
        var trimmed = block.trim();
        if (!trimmed) return;

        var lines = trimmed.split('\n');
        var isOrderedList = lines.every(function (line) { return /^\d+\.\s+/.test(line); });
        var isUnorderedList = lines.every(function (line) { return /^[-*]\s+/.test(line); });

        if (isOrderedList) {
          var ol = lines.map(function (line) {
            return '<li>' + renderInlineMarkdown(line.replace(/^\d+\.\s+/, '')) + '</li>';
          }).join('');
          htmlParts.push('<ol>' + ol + '</ol>');
          return;
        }

        if (isUnorderedList) {
          var ul = lines.map(function (line) {
            return '<li>' + renderInlineMarkdown(line.replace(/^[-*]\s+/, '')) + '</li>';
          }).join('');
          htmlParts.push('<ul>' + ul + '</ul>');
          return;
        }

        var paragraph = lines.map(function (line) {
          return renderInlineMarkdown(line);
        }).join('<br>');
        htmlParts.push('<p>' + paragraph + '</p>');
      });
    });

    return htmlParts.join('');
  }

  function setAssistantMarkdown(target, text) {
    target.innerHTML = renderMarkdown(text);
  }

  function getStoredApiKey() {
    try {
      return (window.localStorage.getItem(OPENROUTER_KEY_STORAGE) || '').trim();
    } catch (_) {
      return '';
    }
  }

  // Prefer server-injected key, then local cache.
  function resolveApiKey() {
    var injectedKey = (window.OPENROUTER_KEY || '').trim();
    if (injectedKey) return injectedKey;

    var storedKey = getStoredApiKey();
    return storedKey;
  }

  // ── API call (streaming) ─────────────────────────────────────────────────────

  function sendMessage(userText) {
    if (isStreaming || !userText.trim()) return;

    var apiKey = resolveApiKey();
    var model  = (window.OPENROUTER_MODEL || 'openrouter/auto').trim();

    if (!apiKey) {
      appendError('No OpenRouter API key configured. Add it in _config.yml.');
      return;
    }

    removeEmptyState();
    appendMessage('user', userText);

    Promise.all([loadSearchIndex(), loadSourceIndex()]).then(function () {
      var retrievalQuery = buildRetrievalQuery(userText);
      var relevantDocs = retrieveContext(retrievalQuery);
      var systemPrompt = buildSystemPrompt(relevantDocs);

      conversationHistory.push({ role: 'user', content: userText });
      persistChatSession();

      var messagesPayload = [{ role: 'system', content: systemPrompt }].concat(conversationHistory);

      isStreaming = true;
      sendBtn.disabled = true;
      input.disabled = true;

      appendTypingIndicator();

      fetch(OPENROUTER_API, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + apiKey,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-OpenRouter-Title': 'json-everything docs'
        },
        body: JSON.stringify({
          model: model,
          messages: messagesPayload,
          stream: true,
          max_tokens: 1024
        })
      })
      .then(function (response) {
        if (!response.ok) {
          return response.json().then(function (err) {
            throw new Error(err.error && err.error.message ? err.error.message : 'API error ' + response.status);
          });
        }

        removeTypingIndicator();
        var assistantEl = appendMessage('assistant', '');
        var fullText = '';

        var reader = response.body.getReader();
        var decoder = new TextDecoder();
        var buffer = '';

        function pump() {
          return reader.read().then(function (result) {
            if (result.done) {
              finishStream(fullText, relevantDocs, assistantEl);
              return;
            }

            buffer += decoder.decode(result.value, { stream: true });
            var lines = buffer.split('\n');
            buffer = lines.pop(); // keep incomplete line

            lines.forEach(function (line) {
              line = line.trim();
              if (!line || line === 'data: [DONE]') return;
              if (line.startsWith('data: ')) {
                try {
                  var chunk = JSON.parse(line.slice(6));
                  var delta = chunk.choices && chunk.choices[0] && chunk.choices[0].delta;
                  if (delta && delta.content) {
                    fullText += delta.content;
                    setAssistantMarkdown(assistantEl, fullText);
                    scrollToBottom();
                  }
                } catch (_) {
                  // ignore malformed SSE chunk
                }
              }
            });

            return pump();
          });
        }

        return pump();
      })
      .catch(function (err) {
        removeTypingIndicator();
        appendError('Error: ' + err.message);
      })
      .finally(function () {
        isStreaming = false;
        sendBtn.disabled = false;
        input.disabled = false;
        input.focus();
      });
    });
  }

  function finishStream(fullText, relevantDocs, assistantEl) {
    if (fullText) {
      var docReferences = extractDocReferences(relevantDocs);
      conversationHistory.push({
        role: 'assistant',
        content: fullText,
        references: docReferences
      });
      persistChatSession();
      appendDocReferences(assistantEl, docReferences);
    }
  }

  function renderConversationHistory() {
    messages.innerHTML = '';

    if (conversationHistory.length === 0) {
      showEmptyState();
      return;
    }

    conversationHistory.forEach(function (msg) {
      var messageEl = appendMessage(msg.role, msg.content);
      if (msg.role === 'assistant' && msg.references && msg.references.length > 0) {
        appendDocReferences(messageEl, msg.references);
      }
    });
  }

  function restoreChatSession() {
    var sessionData = readChatSession();
    if (sessionData && typeof sessionData.drawerWidth === 'number') {
      drawerWidth = clampDrawerWidth(sessionData.drawerWidth);
    }

    applyDrawerWidth(drawerWidth, false);

    if (!sessionData) return;

    conversationHistory = normalizeConversationItems(sessionData.conversation);
    renderConversationHistory();
    requestAnimationFrame(scrollToBottom);

    if (sessionData.isOpen) {
      openModal(true);
      requestAnimationFrame(scrollToBottom);
    }
  }

  // ── Clear conversation ────────────────────────────────────────────────────────

  function clearConversation() {
    conversationHistory = [];
    renderConversationHistory();
    persistChatSession();
  }

  // ── Event wiring ─────────────────────────────────────────────────────────────

  function onSubmit() {
    var text = input.value.trim();
    if (!text || isStreaming) return;
    input.value = '';
    sendMessage(text);
  }

  function submitFromTopSearch(topSearchInput) {
    if (!topSearchInput) return false;
    var text = topSearchInput.value.trim();
    if (!text || isStreaming) return false;

    // Starting from search should begin a fresh AI conversation.
    clearConversation();
    openModal();
    sendMessage(text);

    // Clear search query and refresh search UI state.
    topSearchInput.value = '';
    topSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        ta.remove();
        if (!ok) {
          reject(new Error('Copy failed'));
          return;
        }
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  function setCopyButtonState(button, success) {
    if (!button) return;
    var icon = button.querySelector('i');
    if (!icon) return;

    if (success) {
      button.setAttribute('timeout', '');
      icon.className = 'fas fa-check';
    } else {
      button.removeAttribute('timeout');
      icon.className = 'far fa-clipboard';
    }
  }

  function init() {
    initRefs();
    if (!trigger || !modal) return;
    var topSearchInput = el('search-input');

    modal.hidden = true;
    modal.classList.remove('is-open');
    document.body.classList.remove('ai-chat-open');
    applyDrawerWidth(drawerWidth, false);
    initResizeHandle();

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!submitFromTopSearch(topSearchInput)) {
        openModal();
      }
    });

    closeBtn.addEventListener('click', closeModal);
    clearBtn.addEventListener('click', clearConversation);

    sendBtn.addEventListener('click', onSubmit);

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
      }
    });

    if (topSearchInput) {
      topSearchInput.addEventListener('keydown', function (e) {
        // Shortcut: send current search text directly to AI.
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          submitFromTopSearch(topSearchInput);
        }
      });
    }

    messages.addEventListener('click', function (e) {
      var button = e.target.closest('.ai-chat-copy-btn');
      if (!button) return;

      var code = button.closest('.highlighter-rouge');
      var codeEl = code ? code.querySelector('.highlight code') : null;
      if (!codeEl) return;

      copyTextToClipboard(codeEl.textContent || '')
        .then(function () {
          setCopyButtonState(button, true);
          setTimeout(function () {
            setCopyButtonState(button, false);
          }, 1500);
        })
        .catch(function () {
          setCopyButtonState(button, false);
        });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    restoreChatSession();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
