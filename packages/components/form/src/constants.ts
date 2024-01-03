import type { InjectionKey } from 'vue'
import type { FormContext, FormItemContext } from './types'
import type { EventBusKey } from '@vueuse/core'
export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
export const scrollToFieldKey: EventBusKey<FormItemContext> =
  Symbol('ScrollToFieldKey')
