<script>
import { mapState } from 'pinia';
import ClothCard from '../components/ClothCard.vue';
import { dataStore } from '../stores/dataStore'
import { clothStore } from '../stores/clothStore';
import { useFavClothStore } from '../stores/favClothStore';

export default {
  data() {
    return {
      clothStore: clothStore(),
      favClothStore: useFavClothStore(),
    }
  },
  computed: {
    ...mapState(clothStore, ['getClothes']),
    ...mapState(dataStore, ['getUser']),
    ...mapState(useFavClothStore, ['getfavClothes']),
  },
  async mounted() {
    await this.clothStore.listClothes();
    await this.favClothStore.listFavCloths(this.getUser);
  },
  components: {
    ClothCard
  }
}

</script>

<template>
  <main>
    <div class="mx-5 h-full py-5 justify-center items-center grid grid-cols-5 gap-5">
      <div v-for="cloth in clothStore.getClothes" :key="cloth.id">
        <ClothCard :cloth="cloth" />
      </div>
    </div>
  </main>
</template>
