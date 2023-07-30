<script setup lang="ts">
import { Search, Star } from '@element-plus/icons-vue';
// 封装的 input 组件
import MyInput from '@/components/MyInput.vue';
import { image4 } from '@/assets/js/path';

const searchVal = ref('');
const searchEvent = () => {
  console.log(6666, searchVal);
};

const str= "12313213213";

const info: Global.ListsT={
  name: 'ls',
  age: 28,
  sex: '男',
  address: '浙江杭州'
};

const inputEvent = () => {
  console.log(12123131231, info);
};
</script>

<template>
  <div>
    <img :src="image4" alt="" />
    <img src="@/assets/44.jpg" alt="" />
    <p class="title">好好学习，天天向上。</p>
    <MyInput
      v-model="searchVal"
      placeholder="你的名字"
      title="输入框"
      class="inputStyle"
      @search="searchEvent"
      @func="inputEvent"
    />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="primary" :icon="Search">我是 ElButton</el-button>
    <div class="header">确定, 登录, 注册, 前端开发工程师</div>
    <div class="header">
      <div class="tip">去流浪</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 40px;
  font-family: myFont;
  color: $color-green;
}
.header {
  .tip {
    font-size: 30px;
    color: red;
  }
}
.header {
  font-size: 50px;
  font-weight: bolder;
  font-family: myFont1;
}
img {
  width: 100px;
  height: 100px;
}
</style>
