<template>
  <PToolbar class="p-toolbar-vertical">
    <template #start>
      <slot name="start" />
    </template>
    <template #center>
      <slot name="center" />
    </template>
    <template #end>
      <slot name="end" />
    </template>
  </PToolbar>
</template>

<style lang="scss">
.p-toolbar.p-toolbar-vertical {
  flex-direction: column;
  width: max-content;

  > .p-toolbar-start,
  > .p-toolbar-center,
  > .p-toolbar-end {
    flex-direction: column;
  }
}
</style>
