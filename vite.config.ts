import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ComponentResolver } from 'unplugin-vue-components/types'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

const components = [
  'Accordion',
  'AccordionContent',
  'AccordionHeader',
  'AccordionPanel',
  'AutoComplete',
  'Avatar',
  'AvatarGroup',
  'Badge',
  'BlockUI',
  'Breadcrumb',
  'Button',
  'ButtonGroup',
  'Card',
  'Carousel',
  'CascadeSelect',
  'Chart',
  'Checkbox',
  'Chip',
  'ColorPicker',
  'Column',
  'ColumnGroup',
  'ConfirmDialog', // ConfirmationService must be registered globally
  'ConfirmPopup', // ConfirmationService must be registered globally
  'ContextMenu',
  'DataTable',
  'DataView',
  'DatePicker',
  'Deferred',
  'Dialog',
  'Divider',
  'Dock',
  'Drawer',
  'DynamicDialog',
  'Editor',
  'Fieldset',
  'FloatLabel',
  'Galleria',
  'IconField',
  'Image',
  'InlineMessage',
  'Inplace',
  'InputChips',
  'InputGroup',
  'InputGroupAddon',
  'InputIcon',
  'InputMask',
  'InputNumber',
  'InputOtp',
  'InputText',
  'Knob',
  'Listbox',
  'MegaMenu',
  'Menu',
  'Menubar',
  'Message',
  'MeterGroup',
  'MultiSelect',
  'OrderList',
  'OrganizationChart',
  'Paginator',
  'Panel',
  'PanelMenu',
  'Password',
  'PickList',
  'Popover',
  'ProgressBar',
  'ProgressSpinner',
  'RadioButton',
  'Rating',
  'Row',
  'ScrollPanel',
  'ScrollTop',
  'Select',
  'SelectButton',
  'Skeleton',
  'Slider',
  'SpeedDial',
  'SplitButton',
  'Splitter',
  'SplitterPanel',
  'Stepper',
  'StepperPanel',
  'Steps',
  'Tab',
  'TabList',
  'TabMenu',
  'TabPanel',
  'TabPanels',
  'Tabs',
  'Tag',
  'Terminal',
  'Textarea',
  'TieredMenu',
  'Timeline',
  'Toast', // ToastService must be registered globally
  'ToggleButton',
  'ToggleSwitch',
  'Toolbar',
  'Tree',
  'TreeSelect',
  'TreeTable',
  'Upload',
  'VirtualScroller'
]

const directives = [
  'AnimateOnScroll',
  'FocusTrap',
  'Ripple',
  'StyleClass',
  'Tooltip',
  'BadgeDirective'
]

const PrimeVue4ComponentResolver: ComponentResolver = {
  type: 'component',
  resolve: (name: string) => {
    if (!name.startsWith('P'))
      return

    name = name.substring(1)

    if (components.includes(name)) {
      return {
        from: `primevue/${ name.toLowerCase() }`
      }
    }
  }
}

const PrimeVue4DirectiveResolver: ComponentResolver = {
  type: 'directive',
  resolve: (name: string) => {
    if (directives.includes(name)) {
      return {
        from: `primevue/${ name.toLowerCase() }`
      }
    } else if (directives.includes(name + 'Directive')) {
      return {
        from: `primevue/${ name.toLowerCase() }directive`
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      resolvers: [
        PrimeVue4ComponentResolver,
        PrimeVue4DirectiveResolver
      ]
    }),
    VueI18nPlugin({
      defaultSFCLang: 'yaml'
    })
  ],
  resolve: {
    /*alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: /^primevue\/(api|config)$/,
        replacement: 'primevue/$1/$1.mjs'
      }
    ]*/
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    __INTLIFY_JIT_COMPILATION__: true,
    __INTLIFY_DROP_MESSAGE_COMPILER__: true
  }
})
