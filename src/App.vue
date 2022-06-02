<template>
  <div
    v-for="(item, i) in itemList.items"
    :key="i"
    class="dropdown"
    @click="onClickItemList(item)"
  >
    <div :style="item.valid() && { color: 'red' }">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Item from '@/entity/boardInfo/Item';
import ItemList from '@/entity/boardInfo/ItemList';
const itemList = ref<ItemList>(
  new ItemList(
    new Item(1, '제목입니다1', '서브타이틀입니다1', '작성자1'),
    new Item(2, '하하', '서브타이틀입니다2', '작성자2'),
    new Item(3, '제목입니다3', '서브타이틀입니다3', '작성자3')
  )
);

const onClickItemList = (item: Item) => {
  itemList.value.add(item);
};
</script>

<style scoped></style>
