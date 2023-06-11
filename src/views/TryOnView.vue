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
    ...mapState(tryoutStore, ['getTryout','getTUploading', 'updateTryOn'])
  },
  methods:{
    ...mapActions(tryoutStore, ['sendTryout','uploadImg','updateUploading', 'uploadImgToRestApiModel']),
    ...mapActions(imgStore, ['updateDataImg']),
    async sendUploadImg(){
      if(this.fileImg == null){
        alert('Porfavor elige un archivo primero')
      } else {
        this.updateUploading(true)
        await this.uploadImg(this.fileImg, this.getUser?.user?.id)
        await this.updateDataImg()
        this.updateTryOn()
        
        console.log('updatre', this.idUpdate)
        this.idUpdate +=1
        
        this.updateUploading(false)
        alert('Foto subida exitosamente');
        
        this.uploadImgToRestApiModel(this.getUser?.user?.id)
        .then(response => {

        })
      }
      
    }
  },
  created() {
    this.idUpdate +=1
  },
  mounted() {
    this.updateDataImg()
    this.updateTryOn()
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
        <!-- <div v-if="getTUploading" class="svgAnimate">
          <button type="button" class="buttonProcess ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Cargando Imagen...
          </button>
        </div> -->
        <div v-if="getTUploading" class="svgAnimate">
          <button type="button" class="buttonProcess ..." disabled style="display:flex, align-items:center">
            <div role="status">
          <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="white"/>
          </svg>
          
      </div>
      <span style="color:white">Loading...</span>
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