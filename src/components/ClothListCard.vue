<script>
import { mapActions, mapState } from 'pinia';
import { baseURL } from '../api';
import { logStore } from '../stores/logStore';
import { dataStore } from '../stores/dataStore'
import { useFavClothStore } from '../stores/favClothStore';
import { tryoutStore } from '../stores/tryoutStore';
import { imgStore } from '../stores/imgStore';

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
    }  
  },
  computed: {
    ...mapState(dataStore, ['getUser']),
    ...mapState(logStore, ['getLog']),
    ...mapState(imgStore, ['getImg'])
  },
  methods: {
    getClothImg() {
      console.log(`${this.cloth.img.url}`);
      return `${this.cloth.img.url}`;
    },
    async removeFavCloth() {
      if (this.getLog) {
        await this.favClothStore.removeFavCloth(this.getUser, this.cloth.id);
      } else {
        this.$router.push({ path: '/login' })
      }
    },
    ...mapActions(tryoutStore, ['sendTryout','updateUploading']),
    async sendTryoutTest(imgCloth, imgUser){
      this.updateUploading(true)
      await this.sendTryout(imgCloth, imgUser)
      this.updateUploading(false)
    }
  }
}
</script>

<template>
  <div class="flex flex-row gap-3">
    <div class="w-2/5 bg-gray-100 items-center">
      <img :src="getClothImg()" alt="Producto" width="150" height="150" class="">
    </div>

    <div class="border-l border-black h-auto"></div>

    <div class="w-3/5 flex flex-col justify-center">
      <h2 class="font-bold text-lg mb-2">{{ cloth.cloth_name }}</h2>
      <!-- <p class="text-gray-700 text-sm mb-2">Talla: {{ cloth.size }}</p> -->
      <p class="text-gray-700 text-lg">{{ `S/. ${cloth.price}` }}</p>
      <div class="flex gap-x-0 justify-between">
        <button class="w-3/4 bg-[#FEE7D6] hover:bg-white text-sm md:text-base border hover:border-1 hover:border-[#FEE7D6] rounded-xl p-1 text-black"
          @click="sendTryoutTest(getClothImg(), getImg.url)"
        >Probarse
      </button>
      <button class="w-1/4 bg-red-400 hover:bg-white text-sm md:text-base border hover:border-1 hover:border-red-400 rounded-xl text-black"
      @click="removeFavCloth()">
        <Fai icon="fa-solid fa-trash-can" />
      </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
