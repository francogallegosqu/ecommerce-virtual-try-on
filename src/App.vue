<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ClothsView from './views/ClothsView.vue';
import HeaderGlobal from './components/global/HeaderGlobal.vue';
</script>


<template>
  <HeaderGlobal />
  <!-- <ClothsView></ClothsView> -->
  <RouterView />
</template>

<style scoped>
</style>
