<template>
  <div>
    hello
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { KAKAO_JS_KEY } from '@/utils/key';
onMounted(() => {
  console.log("import.meta.env", import.meta.env.VITE_KAKAO_JS_KEY);
  console.log("KAKAO_JS_KEY", KAKAO_JS_KEY);
})
</script>
<style lang="scss" scoped>
</style>