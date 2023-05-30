export type OptionCommon = {
  label: string
}

export type Option<T = any> = {
  created?: boolean
  value: T
  // reserve for option
  [prop: string]: any
}

export type OptionGroup<T = any> = {
  options: Array<T>

  // reserve for flexibility
  [prop: string]: any
}

export type OptionType<T = any> = Option<T> | OptionGroup<T>

// maybe adding T for type restriction is better here, but not sure this is going to work for
// template rendering
export type OptionItemProps = {
  item: any
  index: number
  disabled: boolean
}

// ============= 自定义新功能开始 ============= //
export type SelectOptionProps<T = any> = {
  label?: string | ((data: T) => string)
  disabled?: string | ((data: T) => boolean)
  // 下拉选项显示的label字段名称，默认：label
  dropdownLabel?: string | ((data: T) => string)
}
// ============= 自定义新功能结束 ============= //
