<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ClothsView from './views/ClothsView.vue';
import TryOnView from './views/TryOnView.vue';
import HeaderGlobal from './components/global/HeaderGlobal.vue';
import FooterGlobal from './components/global/FooterGlobal.vue';
</script>


<template>
  <HeaderGlobal />
  <!-- <ClothsView></ClothsView> -->
  <RouterView />
  <FooterGlobal />
</template>

<style scoped>
</style>
