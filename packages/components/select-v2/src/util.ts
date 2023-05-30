// @ts-nocheck
import { isArray } from '@vue/shared'

import type { Option, OptionGroup } from './select.types'

export const flattenOptions = (
  options: Array<Option | OptionGroup>,
  getLabelValue: (item: any) => string
) => {
  const flattened = []
  options.forEach((option) => {
    if (isArray(option.options)) {
      flattened.push({
        label: getLabelValue(option),
        isTitle: true,
        type: 'Group',
      })

      option.options.forEach((o: Option) => {
        flattened.push(o)
      })
      flattened.push({
        type: 'Group',
      })
    } else {
      flattened.push(option)
    }
  })

  return flattened
}
