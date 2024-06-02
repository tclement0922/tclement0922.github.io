export function isSystemThemeDark(): boolean {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function listenOnSystemThemeChange(listener: (isDark: boolean) => void) {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (ev) => listener(ev.matches))
}
