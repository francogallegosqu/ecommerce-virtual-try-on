import { defineStore } from 'pinia'
import Api from '../api'
import RestApiModel from '../rest-api-model'
export const tryoutStore = defineStore('tryoutStore', {
    state: () => ({ data:null, uploading:false, file_img_url: null }),
  getters: {
    getTryout: (state) => state.data,
    getTUploading: (state) => state.uploading,
  },
  
  actions: {
    updateTryOn()
    {
      this.data = null;
    },
    async sendTryout(imgCloth, imgUser, user_id) {
      try {
        if(!imgCloth || !imgUser) {
            alert('No hay imagen de usuario y/o prenda para probar ')
        }
        const data = {
          "cloth": {
            "id": 1,
            //   "url": "https://res.cloudinary.com/drj2ycrko/image/upload/v1682899359/000023_1_a1b4c49ddc.jpg"
            "url":imgCloth
          },
            "user": {
              "id": user_id,
            //   "url": "https://res.cloudinary.com/drj2ycrko/image/upload/v1682899359/6_614013f93e.jpg"
            "url":imgUser
          }
          }
        
          // const responseData = await Api.post(`${url}/tryon`, data, );
          // const url = 'https://4eb3-34-147-116-212.ngrok-free.app'
          // const responseData = await axios.post(`${url}/tryon`, data, {
            //   headers: {
              //     // 'Content-Type': 'application/json',
              //     // 'Access-Control-Allow-Origin': '*',
              //     "ngrok-skip-browser-warning":"any",
        //   }
        // })
        const responseData = await RestApiModel.post('/tryon', data);
        console.log(responseData);
        if (responseData) {
          this.data = responseData.data;
          console.log('imprimiendo en tryout', this.data)
          //alert('Generación de prueba de ropa exitoso')
        } else {
          console.log('hubo un error al cargar los datos');
        }
      } catch (error) {
        return error
      }
    },

    async uploadImg(file, id) {
        try {
            const formData = new FormData()
            const formFile = new FormData()
            formFile.append('files', file)
            const response = await Api.post('/api/upload', formFile, {
            headers: {
                'Content-Type': 'multipart/form-data; charset=utf-8',
            },
            })
            formData.append('file', response.data[0].id)

            const responseData = await Api.put( `/api/users/${id}`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data; charset=utf-8',
                },
              })
            console.log(responseData, 'status', responseData.data.id)
            const url_query = `/api/users/${responseData.data.id}?populate[file]=*`;
            const responseImg = await Api.get(url_query);
            localStorage.setItem("img", JSON.stringify(responseImg.data.file));
            
            this.file_img_url = responseImg.data.file.url;

        }catch(error){
            console.log(error)
        }
    },

    async uploadImgToRestApiModel(user_id) {
      // enviar nueva imagen al rest api modelo
      const responseAPI = await RestApiModel.post('/prepro_user', {
        "id": user_id,
        "url": this.file_img_url
      })
    },
    updateUploading(status){
        this.uploading = status
    }
  },
})
