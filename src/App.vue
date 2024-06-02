<script lang="ts" setup>
import { RouterView, useRoute } from 'vue-router'
import MaterialButton from '@/components/MaterialButton.vue'
import { computed, ref } from 'vue'
import { useDarkModeStore } from '@/stores/darkMode'
import Toolbar from 'primevue/toolbar'
import VerticalToolbar from '@/components/VerticalToolbar.vue'
import { useDisplayValues } from '@/composables/displayValues'
import { useI18n } from 'vue-i18n'

const route = useRoute()

const { t } = useI18n()

const darkModeStore = useDarkModeStore()
const darkModeIcon = computed(() => {
  return darkModeStore.mode === 'system'
    ? 'night_sight_auto'
    : darkModeStore.mode === 'dark'
      ? 'dark_mode'
      : 'light_mode'
})

const { sAndDown } = useDisplayValues()

const drawer = ref(false)
const drawerRoutes = [
  {
    path: '/',
    label: t('routes.home'),
    icon: 'home'
  }
]
</script>

<template>
  <FlexBox :direction="sAndDown ? 'column' : 'row'" style="height: 100vh">
    <component :is="sAndDown ? Toolbar : VerticalToolbar">
      <template #start>
        <MaterialButton icon="menu" severity="secondary" text @click="drawer = !drawer" />
      </template>
      <template #center>
        <div :class="{ 'text-vertical': !sAndDown }" class="text-monospace">tclement.dev</div>
      </template>
      <template #end>
        <a href="https://github.com/tclement0922" target="_blank" aria-hidden>
          <MaterialButton
            link
            severity="secondary"
            text
            v-tooltip="t('github.tooltip')"
            :aria-label="t('github.tooltip')"
          >
            <template #icon>
              <svg
                height="24px"
                viewBox="0 1 98 96"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </template>
          </MaterialButton>
        </a>
      </template>
    </component>
    <main>
      <router-view />
    </main>
  </FlexBox>
  <PDrawer v-model:visible="drawer" header="tclement.dev">
    <nav>
      <OptionalRouterLink
        v-for="drawerRoute in drawerRoutes"
        :key="drawerRoute.path"
        :disabled="route.path === drawerRoute.path"
        :to="drawerRoute.path"
      >
        <MaterialButton
          :disabled="route.path === drawerRoute.path"
          :icon="drawerRoute.icon"
          :label="drawerRoute.label"
          class="button-fill-width"
        />
      </OptionalRouterLink>
    </nav>

    <div style="flex: 1; display: flex; justify-content: center; align-items: center">
      <p>Nothing else here (yet)</p>
    </div>

    <template #footer>
      <MaterialButton
        v-tooltip.top="t('dark_mode.tooltip.' + ($route.path === '/' ? 'disabled' : 'normal'))"
        :disabled="$route.path === '/'"
        :icon="darkModeIcon"
        :label="t('dark_mode.' + darkModeStore._mode)"
        class="button-fill-width"
        outlined
        severity="secondary"
        @click="darkModeStore.nextMode()"
      />
    </template>
  </PDrawer>
</template>

<i18n>
en:
  dark_mode:
    dark: Dark
    light: Light
    system: Auto
    tooltip:
      normal: Click to change the theme
      disabled: Can't change the theme here
  github:
    tooltip: My GitHub
  routes:
    home: Home
</i18n>

<style lang="scss" scoped>
@use '@/assets/base';

.p-toolbar {
  border-left: none;
  border-top: none;
  border-radius: 0;
  flex: none;

  &.p-toolbar-vertical {
    border-bottom: none;
    height: 100vh;
  }

  &:not(.p-toolbar-vertical) {
    border-right: none;
    width: 100%;
  }
}

main {
  overflow-y: auto;
  flex: 1 1;
}
</style>
