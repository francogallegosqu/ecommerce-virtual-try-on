<script>
import { mapActions, mapState } from 'pinia';
import ClothCard from '../components/ClothCard.vue';
import { dataStore } from '../stores/dataStore'
import { clothStore } from '../stores/clothStore';
import { sizeCloth } from '../stores/sizeCloth';
import { useFavClothStore } from '../stores/favClothStore';

export default {
  data() {
    return {
      clothStore: clothStore(),
      favClothStore: useFavClothStore(),
      select: '',
      list:[]
    }
  },
  computed: {
    ...mapState(clothStore, ['getClothes']),
    ...mapState(dataStore, ['getUser']),
    ...mapState(useFavClothStore, ['getfavClothes']),
    ...mapState(sizeCloth, ['getlist']),
  },
  async mounted() {
    await this.clothStore.listClothes();
    await this.favClothStore.listFavCloths(this.getUser);
    
  },
  methods: {
    ...mapActions(sizeCloth, ['listFilter']),
    async filterQuery(){
      this.list = await this.listFilter(this.select)
    }
  },
  components: {
    ClothCard
  }
}

</script>

<template>
  <main>
    <div class="buscador">
      <div class="form-content">
        <select class="sel" v-model="select" @change="filterQuery()">
            <option value="" disabled selected >Busca tu Categoria</option>
            <option value="all">all</option>
            <option value="moderno">moderno</option>
            <option value="clasico">clasico</option>
        </select>
        </div>
    </div>
    <div v-if="getlist.length == 0 || select == 'all'" class="mx-5 h-full py-5 justify-center items-center grid grid-cols-5 gap-5">
      
      <div v-for="cloth in clothStore.getClothes" :key="cloth.id">
        <ClothCard :cloth="cloth" />
      </div>
    </div>
    <div v-if="select == 'moderno' || select == 'clasico'" class="mx-5 h-full py-5 justify-center items-center grid grid-cols-5 gap-5">
      <div v-for="cloth in getlist" :key="cloth.id">
        <ClothCard :cloth="cloth?.attributes" :filter="true" :id="cloth.id" />
      </div>
    </div>
  </main>
</template>

<style>
.sel {
  color:#7B552F
}
.buscador {
  width: 100%;
  text-align: end;
}


select, select option {
  background: rgba(255, 237, 201, 0.5);
  border: 2px solid #7B552F;
  border-radius: 10px;
  height: 50px;
  width: 400px;
  color: #7B552F;
}
</style>
