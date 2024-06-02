<script lang="ts">
import Badge from 'primevue/badge'
import SpinnerIcon from 'primevue/icons/spinner'
import Ripple from 'primevue/ripple'
import BaseButton from 'primevue/button/BaseButton.vue'

export default {
  extends: BaseButton,
  inheritAttrs: false,
  methods: {
    getPTOptions(key) {
      const _ptm = key === 'root' ? this.ptmi : this.ptm

      return _ptm(key, {
        context: {
          disabled: this.disabled
        }
      })
    }
  },
  computed: {
    disabled(): boolean {
      return this.$attrs.disabled || this.$attrs.disabled === '' || this.loading
    },
    defaultAriaLabel(): string {
      return this.label ? this.label + (this.badge ? ' ' + this.badge : '') : this.$attrs.ariaLabel
    },
    hasIcon(): boolean {
      return this.icon || this.$slots.icon
    }
  },
  components: {
    SpinnerIcon,
    Badge
  },
  directives: {
    ripple: Ripple
  }
}
</script>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    iconStyle?: 'outlined' | 'rounded' | 'sharp'
  }>(),
  {
    iconStyle: 'outlined'
  }
)
</script>

<template>
  <button
    v-ripple
    :aria-label="defaultAriaLabel"
    :class="cx('root')"
    :data-p-severity="severity"
    :disabled="disabled"
    type="button"
    v-bind="getPTOptions('root')"
  >
    <slot>
      <slot v-if="loading" :class="[cx('loadingIcon'), cx('icon')]" name="loadingicon">
        <span
          v-if="loadingIcon"
          :class="[cx('loadingIcon'), cx('icon'), loadingIcon]"
          v-bind="ptm('loadingIcon')"
        />
        <SpinnerIcon
          v-else
          :class="[cx('loadingIcon'), cx('icon')]"
          spin
          v-bind="ptm('loadingIcon')"
        />
      </slot>
      <slot v-else :class="[cx('icon')]" name="icon">
        <span
          v-if="icon"
          :class="[cx('icon'), iconClass, 'material-symbols-' + iconStyle]"
          v-bind="ptm('icon')"
          >{{ icon }}</span
        >
      </slot>
      <span v-if="label" :class="cx('label')" v-bind="ptm('label')">{{ label }}</span>
      <Badge
        v-if="badge"
        :class="badgeClass"
        :severity="badgeSeverity"
        :unstyled="unstyled"
        :value="badge"
        v-bind="ptm('badge')"
      ></Badge>
    </slot>
  </button>
</template>
