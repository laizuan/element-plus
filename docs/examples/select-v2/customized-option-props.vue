<template>
  <el-select-v2
    v-model="value"
    filterable
    :options="options"
    :props="props"
    placeholder="Please select"
    style="width: 240px"
  >
    <template #default="{ item }">
      <span style="margin-right: 8px">{{ item.label }}</span>
      <span style="color: var(--el-text-color-secondary); font-size: 13px">
        {{ item.value }}
      </span>
    </template>
  </el-select-v2>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const props = {
  label: 'desc',
  disabled: 'enabled',
  dropdownLabel: (item: any) => `${item.value} == ${item.desc}`,
}

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  desc: `${initials[idx % 10]}${idx}`,
  enabled: idx % 10 === 0,
}))
</script>
