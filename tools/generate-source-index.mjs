#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_REPO = 'json-everything/json-everything';
const DEFAULT_REF = 'main';
const DEFAULT_REPO_ROOT = process.cwd();
const DEFAULT_OUTPUT = path.join(process.cwd(), 'assets', 'js', 'data', 'source-index.json');
const MAX_CHUNK_LINES = 120;

function parseArgs(argv) {
  const args = {
    repo: DEFAULT_REPO,
    ref: DEFAULT_REF,
    repoRoot: DEFAULT_REPO_ROOT,
    output: DEFAULT_OUTPUT
  };

  for (let i = 0; i < argv.length; i += 1) {
    const current = argv[i];
    const next = argv[i + 1];

    if (current === '--repo' && next) {
      args.repo = next;
      i += 1;
    } else if (current === '--ref' && next) {
      args.ref = next;
      i += 1;
    } else if (current === '--repo-root' && next) {
      args.repoRoot = path.resolve(next);
      i += 1;
    } else if (current === '--output' && next) {
      args.output = path.resolve(next);
      i += 1;
    }
  }

  return args;
}

async function listFilesRecursive(rootDir) {
  const results = [];
  const stack = [rootDir];

  while (stack.length > 0) {
    const dir = stack.pop();
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else {
        results.push(fullPath);
      }
    }
  }

  return results;
}

function normalizePath(p) {
  return p.split(path.sep).join('/');
}

function isTargetCsFile(relativePath) {
  if (!relativePath.endsWith('.cs')) return false;
  // Match src/Json*/**/*.cs
  return /^src\/Json[^/]*\/.+\.cs$/i.test(relativePath);
}

function chunkLines(lines, maxLines) {
  const chunks = [];
  for (let i = 0; i < lines.length; i += maxLines) {
    const start = i;
    const end = Math.min(i + maxLines, lines.length);
    chunks.push({
      startLine: start + 1,
      endLine: end,
      text: lines.slice(start, end).join('\n').trim()
    });
  }
  return chunks.filter((c) => c.text.length > 0);
}

async function generateIndex(options) {
  const srcRoot = path.join(options.repoRoot, 'src');
  const allFiles = await listFilesRecursive(srcRoot);

  const sourceFiles = allFiles
    .map((fullPath) => {
      const relative = normalizePath(path.relative(options.repoRoot, fullPath));
      return { fullPath, relative };
    })
    .filter((item) => isTargetCsFile(item.relative))
    .sort((a, b) => a.relative.localeCompare(b.relative));

  const items = [];

  for (const file of sourceFiles) {
    const content = await fs.readFile(file.fullPath, 'utf8');
    const normalized = content.replace(/\r\n/g, '\n');
    const lines = normalized.split('\n');
    const chunks = chunkLines(lines, MAX_CHUNK_LINES);

    chunks.forEach((chunk, index) => {
      const title = `${file.relative} (${index + 1}/${chunks.length})`;
      const url = `https://github.com/${options.repo}/blob/${options.ref}/${file.relative}#L${chunk.startLine}-L${chunk.endLine}`;
      items.push({
        title,
        url,
        source: 'github',
        repo: options.repo,
        ref: options.ref,
        path: file.relative,
        startLine: chunk.startLine,
        endLine: chunk.endLine,
        content: chunk.text,
        snippet: chunk.text.slice(0, 220)
      });
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    repo: options.repo,
    ref: options.ref,
    fileCount: sourceFiles.length,
    chunkCount: items.length,
    items
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  const index = await generateIndex(options);

  await fs.mkdir(path.dirname(options.output), { recursive: true });
  await fs.writeFile(options.output, `${JSON.stringify(index, null, 2)}\n`, 'utf8');

  process.stdout.write(
    `Generated source index: ${index.fileCount} files, ${index.chunkCount} chunks -> ${options.output}\n`
  );
}

main().catch((err) => {
  process.stderr.write(`Failed to generate source index: ${err.message}\n`);
  process.exit(1);
});
