/**
 * Add listener for theme mode toggle
 */
const $toggleElem = $('.mode-toggle');

function updateModeIcon() {
  const $icon = $toggleElem.find('i');
  const $tooltip = $toggleElem.find('.tooltip-text');
  const htmlMode = $('html').attr('data-mode');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Determine if we're in dark mode
  // If explicit mode is set, use that; otherwise follow system preference
  const isDark = htmlMode === 'dark' || (!htmlMode && systemPrefersDark);
  
  // Update icon: filled for light mode, outline for dark mode
  const newIcon = isDark ? 'lightbulb_outline' : 'lightbulb';
  $icon.text(newIcon);
  
  // Update tooltip text
  const tooltipText = isDark ? 'Turn the lights on' : 'Turn the lights off';
  $tooltip.text(tooltipText);
}

export function modeWatcher() {
  if ($toggleElem.length === 0) {
    return;
  }

  // Update icon on page load
  updateModeIcon();

  // Listen for mode changes via window messages
  window.addEventListener('message', (event) => {
    if (event.data && event.data.direction === 'mode-toggle') {
      updateModeIcon();
    }
  });
  
  // Also listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    updateModeIcon();
  });

  $toggleElem.off().on('click', (e) => {
    const $target = $(e.target);
    let $btn =
      $target.prop('tagName') === 'button'.toUpperCase()
        ? $target
        : $target.parent();

    modeToggle.flipMode(); // modeToggle: `_includes/mode-toggle.html`
    $btn.trigger('blur'); // remove the clicking outline
    
    // Update icon after mode change
    setTimeout(updateModeIcon, 10);
  });
}
