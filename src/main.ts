import 'material-symbols'
import 'normalize.css/normalize.css'
import '@/assets/main.scss'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import primevue from 'primevue/config'

import App from './App.vue'
import routerOptions from './router'
import purplish from '@/themes/purplish'
import { plugin as displayValues } from '@/composables/displayValues'
import { plugin as i18n } from '@/plugins/i18n'
import { createApp } from 'vue'
import { createRouter } from 'vue-router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(createRouter(routerOptions))
app.use(pinia)
app.use(i18n)
app.use(primevue, {
  ripple: true,
  unstyled: false,
  theme: {
    preset: purplish,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark',
      cssLayer: false
    }
  }
})
app.use(displayValues)
app.mount(document.body)
