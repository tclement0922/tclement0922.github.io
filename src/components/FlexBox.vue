<script lang="ts" setup>
withDefaults(
  defineProps<{
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  }>(),
  {
    direction: 'row'
  }
)
</script>

<template>
  <div :style="{ flexDirection: direction }" style="display: flex">
    <slot></slot>
  </div>
</template>
