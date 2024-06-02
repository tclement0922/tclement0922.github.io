import { createI18n } from 'vue-i18n'

export const plugin = createI18n({
  legacy: false,
  globalInjection: false
})

export default plugin.global
