<script>
import { mapState } from 'pinia';
import ListTryOn from '../components/ListTryOn.vue';
import { useFavClothStore } from '../stores/favClothStore';

export default {
  data() {
    return {
      favClothStore: useFavClothStore()
    }
  },
  computed: {
    ...mapState(useFavClothStore, ['getfavClothes']),
  },
  async mounted() {
    await this.favClothStore.listFavClothes();
  },
  components: {
    ListTryOn
  },
}

</script>

<template>
  <main>
    <div class="flex flex-row">
      <div class="w-1/4 bg-gray-200 p-4">
        <ListTryOn :favClothes="favClothStore.getfavClothes"></ListTryOn>
      </div>
      <div class="w-3/4 bg-white p-4">
        <!-- Contenido principal aquí -->
        <p>aqui va la imagen de la prueba de ropa</p>
      </div>
    </div>    
  </main>
</template>
