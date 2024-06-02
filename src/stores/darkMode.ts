import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { isSystemThemeDark, listenOnSystemThemeChange } from '@/utils/systemDarkMode'
import { useRoute } from 'vue-router'

export type DarkMode = 'system' | 'dark' | 'light'

export const useDarkModeStore = defineStore(
  'darkMode',
  () => {
    const htmlClassList = document.documentElement.classList
    const route = useRoute()
    const _mode = ref<DarkMode>('system')
    const mode = computed(() => {
      return route.path === '/' ? 'dark' : _mode.value
    })
    const _preferAmoled = ref(false)
    const preferAmoled = computed(() => {
      return route.path === '/' ? true : _preferAmoled.value
    })

    htmlClassList.toggle(
      'dark',
      (mode.value === 'system' && isSystemThemeDark()) || mode.value === 'dark'
    )

    listenOnSystemThemeChange((isDark) => {
      if (mode.value === 'system') {
        htmlClassList.toggle('dark', isDark)
      }
    })

    htmlClassList.toggle('amoled', preferAmoled.value)

    watch(mode, (value) => {
      htmlClassList.toggle('dark', (value === 'system' && isSystemThemeDark()) || value === 'dark')
    })
    watch(preferAmoled, (value) => {
      htmlClassList.toggle('amoled', value)
    })

    function nextMode() {
      if (_mode.value === 'system') _mode.value = 'dark'
      else if (_mode.value === 'dark') _mode.value = 'light'
      else _mode.value = 'system'
    }

    function setMode(mode: DarkMode) {
      _mode.value = mode
    }

    function setPreferAmoled(preferAmoled: boolean) {
      _preferAmoled.value = preferAmoled
    }

    return { _mode, _preferAmoled, mode, preferAmoled, nextMode, setMode, setPreferAmoled }
  },
  {
    persist: true
  }
)
