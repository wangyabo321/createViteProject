<script lang="ts">
  export default {
    inheritAttrs: false, // 阻断后就不会默认接收父组件给的 样式
    customOptions: {}
  };
</script>
<script setup lang="ts">
import { useVModels } from '@vueuse/core';
import { Search } from '@element-plus/icons-vue';

// eslint-disable-next-line vue/no-export-in-script-setup


// interface AttrsT {
//   placeholder?: string;
//   title?: string;
//   onFunc(): any;
//   Data?: any;
// }

const attrs: any = useAttrs();

const props = withDefaults(
  defineProps<{
    modelValue?: number | string;
    clearable?: boolean;
  }>(),
  {
    modelValue: '',
    clearable: true
  }
);

const emits = defineEmits<{
  (event: 'update:modelValue', modelValue?: number | string): void;
  (event: 'search'): void;
}>();

const { modelValue } = useVModels(props, emits);

console.log(233, attrs);
attrs.onFunc();
</script>
<template>
  <div>
    <el-input
      v-model="modelValue"
      clearable
      :placeholder="attrs.placeholder"
      v-bind="$attrs"
    >
      <template #append>
        <el-button :icon="Search" @click="emits('search')"></el-button>
      </template>
    </el-input>
  </div>
</template>

<style scoped>
.inputStyle {
  width: 200px;
}
</style>
