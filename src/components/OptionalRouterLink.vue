<script lang="ts" setup>
import type { RouterLinkProps } from 'vue-router'

const props = withDefaults(
  defineProps<
    RouterLinkProps & {
      disabled?: boolean
    }
  >(),
  {
    disabled: false
  }
)
</script>

<template>
  <RouterLink v-if="!disabled" v-bind="props">
    <slot />
  </RouterLink>
  <slot v-else />
</template>
