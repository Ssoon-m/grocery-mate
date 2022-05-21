<template>
  <button class="p-2 rounded-full border-solid border-2 border-black" @click="onClickKakaoLogin">
    KAKAO LOGIN
  </button>
</template>

<script setup>
import { onMounted } from 'vue';
import { KAKAO_JS_KEY } from '@/utils/key';

const onClickKakaoLogin = () => {
  console.log("KAKAO_JS_KEY", KAKAO_JS_KEY);
}
onMounted(() => {

})
</script>
