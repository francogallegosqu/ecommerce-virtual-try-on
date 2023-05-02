<script>
import ListTryOn from '../components/ListTryOn.vue';
import { mapState, mapActions } from 'pinia'
import { imgStore } from '../stores/imgStore'
import { dataStore } from '../stores/dataStore'
import {tryoutStore} from '../stores/tryoutStore'
import ImgVue from '../components/Img.vue'
export default {
  components: {
    ListTryOn,
    ImgVue,
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
    ...mapState(tryoutStore, ['getTryout','getTUploading'])
  },
  methods:{
    ...mapActions(tryoutStore, ['sendTryout','uploadImg','updateUploading']),
    ...mapActions(imgStore, ['updateDataImg']),
    async sendUploadImg(){
      if(this.fileImg == null){
        alert('Porfavor elige un archivo primero')
      } else {
        this.updateUploading(true)
        await this.uploadImg(this.fileImg, this.getUser?.user?.id)
        await this.updateDataImg()
        console.log('updatre', this.idUpdate)
        this.idUpdate +=1
        this.updateUploading(false)
        alert('Foto subida exitosamente')
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
        <button style="margin-top:5px; margin-bottom: 5px;" class="button rounded-full ..." @click="sendUploadImg()">Subir Foto </button>
        <input style="margin-top:5px; margin-bottom: 5px;" id="inputTag" type="file" class="form-control p-2" />
      </div>
    </div>
    <div class="rowFlex flex flex-row" style="color:#683C11">
       <div class="itemFlex p-4">
        <ListTryOn></ListTryOn>
      </div>
      
      <div class="imgContent bg-white p-4">
        <!-- <img v-if="getTryout != null && uploading == false" :src="getTryout?.data" alt=""> -->
        <ImgVue v-if="getTryout != null && getTUploading == false" :key="idUpdate" :srcImg="getTryout?.data"></ImgVue>
        <ImgVue v-if="getTryout == null && getTUploading == false" :key="idUpdate" :srcImg="getImg?.url" ></ImgVue>
        <div v-if="getTUploading" class="svgAnimate">
          <button type="button" class="buttonProcess ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Cargando Imagen...
          </button>
        </div>
      </div>
    </div>    
  </main>
</template>

<style scoped>
.rowFlex {
  /* width: 100%; */
  justify-content: space-around;
  flex-wrap: wrap;
}
.button {
  background-color: #683C11;
  padding: 15px 15px;
  margin-inline: 10px;
  color: white;
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
.imgContent {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
}
.svgAnimate{

  border-radius: 20px;
  padding: 10px;
  
}
.buttonProcess {
  background-color: #683C11;
  color: white;
  border-radius: 20px;
  padding: 20px;
}
</style>