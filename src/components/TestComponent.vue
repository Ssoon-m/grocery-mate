<template>
  <button class="testComponent__btn" @click="onClickKakaoLogin">
    KAKAO LOGIN
  </button>
</template>

<script setup>
import { onMounted } from 'vue';
import { KAKAO_JS_KEY } from '@/utils/key';

const onClickKakaoLogin = () => {
  console.log("hello")
}

onMounted(() => {

  console.log("KAKAO_JS_KEY", KAKAO_JS_KEY);
})
</script>
<style scoped>
.testComponent__btn {
  /* background-color: inherit; */
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  border: 1px solid #000000;
  color: #000000;
  padding: 12px;
  border-radius: 12px;
}
</style>