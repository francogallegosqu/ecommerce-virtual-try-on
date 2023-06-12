<script>
import { mapActions, mapState } from 'pinia';
import { baseURL } from '../api';
import { logStore } from '../stores/logStore';
import { dataStore } from '../stores/dataStore'
import { useFavClothStore } from '../stores/favClothStore';
import {tryoutStore} from '../stores/tryoutStore'

export default {
  data() {
    return {
      favClothStore: useFavClothStore()
    }
  },
  props: {
    cloth: {
      type: Object,
      required: true
    },
    filter : {
      type: Boolean,
      default: false
    },
    id: {
      type: [Number, String]
    }
  },
  computed: {
    ...mapState(dataStore, ['getUser']),
    ...mapState(logStore, ['getLog']),
  },
  methods: {
    ...mapActions(tryoutStore, ['get_descripcion_talla']),
    
    getUrlImg() {
      console.log(`${this.cloth.img.url}`);
      return this.filter == true ? `${this.cloth.img.data.attributes.url}` :`${this.cloth.img.url}`;
    },
    async addFavCloth() {
      if (this.getLog) {
        await this.favClothStore.addFavCloth(this.getUser, this.filter ? this.id : this.cloth.id);
        alert('Prenda guardada para probar')
      } else {
        this.$router.push({ path: '/login' })
      }
    },
    async goToTryOn() {
      await this.addFavCloth()
      alert('Prenda guardada para probar')
      this.$router.push({ path: '/tryon' })
    }
  }
}
</script>

<template>
  <div  class="relative pl-1 flex-1 justify-center rounded-xl hover:scale-[1.01] duration-500 transform transition cursor-pointer">
    <div style="min-height: 533px;"  class="pb-2 bg-white rounded-xl shadow-xl z-10 flex flex-col justify-around">
      <!-- Boton "Favoritos" -->
      <a
        class="absolute top-0 right-0 mt-3 mr-1 z-30 hover:text-gray-100 hover:bg-stone-800 w-8 h-8 bg-white text-black rounded-full text-center"
        @click="addFavCloth()"      
        >
        <Fai icon="fa-regular fa-heart" class="fa-xl pt-1"/>
      </a>
      
      <div class="relative px-2 flex justify-center">
        <img  :src="getUrlImg()" class="object-cover w-full h-full rounded-t-xl" alt="">
      </div>

      <div class="px-2 py-1">
        <!-- Titulo -->
        <div class="text-sm md:text-base font-bold pr-2">{{ cloth.cloth_name }}</div>
        <!-- Descripcion -->
        <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-700">{{ cloth.descripcion }}</p>
        <!-- Talla -->
        <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">{{ `Talla: ${cloth.size}` }}</p>
        <!-- Descripcion Talla -->
        <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">{{ `${get_descripcion_talla(cloth.size)}` }}</p>
        <!-- Precio -->
        <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">{{ `S/. ${cloth.price}` }}</p>
        <!-- Boton probarse -->
        <a class="inset-x-0 bottom-0 flex justify-center bg-[#FEE7D6] hover:bg-white text-sm md:text-base border hover:border-2 hover:border-[#FEE7D6] rounded-xl px-5 p-1 text-black"
          @click="goToTryOn()">Ir al Probador</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
