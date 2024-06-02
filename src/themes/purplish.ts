import Aura from 'primevue/themes/aura'
import { definePreset } from 'primevue/themes/actions'
import colors from '@/themes/purplish.module.scss'

const surface = {
  0: '{purplish.neutral.10}',
  50: '{purplish.neutral.50}',
  100: '{purplish.neutral.100}',
  200: '{purplish.neutral.200}',
  300: '{purplish.neutral.300}',
  400: '{purplish.neutral.400}',
  500: '{purplish.neutral.500}',
  600: '{purplish.neutral.600}',
  700: '{purplish.neutral.700}',
  800: '{purplish.neutral.800}',
  900: '{purplish.neutral.900}',
  950: '{purplish.neutral.950}'
}

export default definePreset(Aura, {
  primitive: {
    purplish: colors
  },
  semantic: {
    primary: {
      50: '{purplish.primary.50}',
      100: '{purplish.primary.100}',
      200: '{purplish.primary.200}',
      300: '{purplish.primary.300}',
      400: '{purplish.primary.400}',
      500: '{purplish.primary.500}',
      600: '{purplish.primary.600}',
      700: '{purplish.primary.700}',
      800: '{purplish.primary.800}',
      900: '{purplish.primary.900}',
      950: '{purplish.primary.950}'
    },
    colorScheme: {
      light: { surface },
      dark: { surface }
    }
  }
})
