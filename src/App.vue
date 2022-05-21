<template>
  <header>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>

    <div class="wrapper">
      <TestComponent msg="You did it!" />
    </div>
  </header>
</template>

<script setup lang="ts">
import TestComponent from './components/TestComponent.vue';
// mock service worker 추가 생각해보자
</script>

<style lang="scss">
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>
