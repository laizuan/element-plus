import { computed } from 'vue'
import { isObject } from '@vue/shared'
import { get, isFunction, isString } from 'lodash-unified'
import type { SelectOptionProps } from './select.types'

export function useOptionProps(props?: SelectOptionProps) {
  const optionProps = computed(() => {
    const defaultProps = {
      label: 'label',
      disabled: 'disabled',
    }
    return {
      ...defaultProps,
      ...{
        dropdownLabel:
          props?.dropdownLabel || props?.label || defaultProps.label,
      },
      ...(props || {}),
    }
  })

  function getLabelValue(item: any) {
    const label = optionProps.value.label
    if (isString(label)) {
      return isObject(item) ? get(item, label) : item
    }
    if (isFunction(label)) {
      return label(item)
    }
  }

  function getDropdownLabel(item: any) {
    const dropdownLabel = optionProps.value.dropdownLabel

    if (isFunction(dropdownLabel)) {
      return dropdownLabel(item)
    }

    return isObject(item) ? get(item, dropdownLabel) : item
  }

  function getDisabledValue(item: any) {
    const disabled = optionProps.value.disabled
    if (isFunction(disabled)) {
      return disabled(item)
    }
    return isObject(item) ? get(item, optionProps.value.disabled) : item
  }

  return {
    getLabelValue,
    getDisabledValue,
    getDropdownLabel,
    optionProps,
  }
}
