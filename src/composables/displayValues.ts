import {
  type App,
  computed,
  type ComputedRef,
  type FunctionPlugin,
  inject,
  type InjectionKey,
  ref,
  type Ref
} from 'vue'

const displayValuesKey: InjectionKey<DisplayValues> = Symbol()

// Same breakpoints as in Vuetify
export const breakpoints = {
  xs: 0,
  s: 600,
  m: 960,
  l: 1280,
  xl: 1920,
  xxl: 2560
} as const

export interface DisplayValues {
  width: Ref<number>
  height: Ref<number>

  xs: ComputedRef<boolean>
  s: ComputedRef<boolean>
  m: ComputedRef<boolean>
  l: ComputedRef<boolean>
  xl: ComputedRef<boolean>
  xxl: ComputedRef<boolean>

  sAndDown: ComputedRef<boolean>
  mAndDown: ComputedRef<boolean>
  lAndDown: ComputedRef<boolean>
  xlAndDown: ComputedRef<boolean>

  sAndUp: ComputedRef<boolean>
  mAndUp: ComputedRef<boolean>
  lAndUp: ComputedRef<boolean>
  xlAndUp: ComputedRef<boolean>
}

export function useDisplayValues() {
  const displayValues = inject(displayValuesKey)
  if (displayValues === undefined) throw new Error("Can't use displayValues before initialization")
  return displayValues
}

export const plugin: FunctionPlugin = (app: App) => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  window.addEventListener(
    'resize',
    () => {
      width.value = window.innerWidth
      height.value = window.innerHeight
    },
    {
      passive: true
    }
  )

  const displayValues: DisplayValues = {
    width,
    height,

    xs: computed(() => width.value < breakpoints.s),
    s: computed(() => width.value >= breakpoints.s && width.value < breakpoints.m),
    m: computed(() => width.value >= breakpoints.m && width.value < breakpoints.l),
    l: computed(() => width.value >= breakpoints.l && width.value < breakpoints.xl),
    xl: computed(() => width.value >= breakpoints.xl && width.value < breakpoints.xxl),
    xxl: computed(() => width.value >= breakpoints.xxl),

    sAndDown: computed(() => width.value < breakpoints.m),
    mAndDown: computed(() => width.value < breakpoints.l),
    lAndDown: computed(() => width.value < breakpoints.xl),
    xlAndDown: computed(() => width.value < breakpoints.xxl),

    sAndUp: computed(() => width.value >= breakpoints.s),
    mAndUp: computed(() => width.value >= breakpoints.m),
    lAndUp: computed(() => width.value >= breakpoints.l),
    xlAndUp: computed(() => width.value >= breakpoints.xl)
  }

  app.provide(displayValuesKey, displayValues)
}
