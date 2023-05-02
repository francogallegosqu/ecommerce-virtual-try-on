<script>
import { mapState } from 'pinia';

import { dataStore } from '../stores/dataStore'
import { useFavClothStore } from '../stores/favClothStore';
import ClothListCard from './ClothListCard.vue';
export default {
  data() {
    return {
      favClothStore: useFavClothStore()
    }
  },
  computed: {
    ...mapState(dataStore, ['getUser']),
    ...mapState(useFavClothStore, ['getfavClothes']),
  },
  async mounted() {    
    await this.favClothStore.listFavCloths(this.getUser);
  },
  components: { ClothListCard }
}
</script>

<template>
  <h2 class="font-bold mb-4">Prendas Favoritas</h2>
  <ul class="flex flex-col gap-y-2">
    <li v-for="cloth in getfavClothes" :key="cloth.id" class="border-black border-2 rounded-md p-2">
      <ClothListCard :cloth="cloth"></ClothListCard>
    </li>
  </ul>  
</template>

<style scoped></style>
