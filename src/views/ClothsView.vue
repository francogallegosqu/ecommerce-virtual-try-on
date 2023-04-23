<script>
import { mapState } from 'pinia';
import ClothCard from '../components/ClothCard.vue';
import { clothStore } from '../stores/clothStore';

export default {
  data() {
    return {
      clothStore: clothStore()
    }
  },
  computed: {
    ...mapState(clothStore, ['getClothes']),
  },
  async mounted() {
    await this.clothStore.listClothes();
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
