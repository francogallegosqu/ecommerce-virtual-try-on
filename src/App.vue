<script setup>
import { RouterView } from 'vue-router'

import HeaderGlobal from './components/global/HeaderGlobal.vue';
import FooterGlobal from './components/global/FooterGlobal.vue';
</script>


<template>
  <HeaderGlobal />
  <RouterView />
  <FooterGlobal />
</template>

<style scoped>
</style>
