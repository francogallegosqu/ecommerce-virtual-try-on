<script>
import ListTryOn from '../components/ListTryOn.vue';
import { mapState, mapActions } from 'pinia'
import { imgStore } from '../stores/imgStore'
import { dataStore } from '../stores/dataStore'
import {tryoutStore} from '../stores/tryoutStore'
export default {
  components: {
    ListTryOn
  },
  data(){
    return {
      fileImg: null,
      idUpdate: 0,
    }
  },
  computed: {
    ...mapState(imgStore, ['getImg']),
    ...mapState(dataStore, ['getUser']),
    ...mapState(tryoutStore, ['getTryout'])
  },
  methods:{
    ...mapActions(tryoutStore, ['sendTryout','uploadImg']),
    ...mapActions(imgStore, ['updateDataImg']),
    sendUploadImg(){
      if(this.fileImg == null){
        alert('Porfavor elige un archivo primero')
      } else {
        this.uploadImg(this.fileImg, this.getUser?.user?.id)
        this.updateDataImg()
        this.idUpdate +=1
      }
      
    }
  },
  mounted() {
    let input = document.getElementById('inputTag')
    input.addEventListener('change', () => {
      let file = document.querySelector('input[type=file]').files[0]
      this.fileImg = file
    })
  },
}

</script>

<template>
  <main>
    <div class="flex flex-row justify-end">
      {{ getUser?.user?.id}}
      <div class="content-button">
        <button class="button rounded-full ...">Probar Prenda</button>
        <button class="button rounded-full ..." @click="sendUploadImg()">Subir Foto </button>
        <input id="inputTag" type="file" class="form-control p-2" />
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-1/4 bg-gray-200 p-4">
        <ListTryOn></ListTryOn>
      </div>
      <div class="w-3/4 bg-white p-4">
        <!-- Contenido principal aquí -->
        <!-- <p>{{getTryout}}</p> -->
        <img :src="getTryout?.data" alt="">
        <!-- <img :key="idUpdate" v-if="getImg" :src="getImg?.url" alt=""> -->
      </div>
    </div>    
  </main>
</template>

<style scoped>
.button {
  background-color: #683C11;
  padding: 15px 15px;
  margin-inline: 10px;
}
.content-button {
  margin: 15px 4px;
}

input {
  background: rgba(255, 237, 201, 0.5);
  border: 2px solid #7B552F;
  border-radius: 25px;
  height: 50px;
  color: #683C11;
}
</style>