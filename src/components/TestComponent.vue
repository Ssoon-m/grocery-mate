<template>
  <button
    class="p-2 rounded-full border-solid border-2 border-black"
    @click="onClickKakaoLogin"
  >
    KAKAO LOGIN
  </button>
</template>

<script setup lang="ts">
import { KAKAO_JS_KEY } from '@/utils/key';

const onClickKakaoLogin = () => {
  console.log(window.Kakao);
  window.Kakao.init(KAKAO_JS_KEY);
  console.log(Kakao.isInitialized());
  // if (KAKAO_JS_KEY) {
  //   console.log(12);
  // }
};
</script>
