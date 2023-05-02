<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content-login">
    <div class="item-first girl">
      <img src="/chica.png" alt="Girl" />
    </div>
    <div class="item-second content-form">
      <div class="title">
        Registro de usuario
      </div>
      <div class="welcome">
        ¡Bienvenido! Por favor, ingresa tus datos
      </div>
      <form class="form-insert" id="formId" enctype="multipart/form-data">
        <div class="form-content">
          <label for="dni">Ingresa tu DNI</label>
          <input type="text" class="form-control p-2" v-model="form.dni" />
        </div>
        <div class="form-content">
          <label for="text">Ingresa tu Usuario</label>
          <input type="text" class="form-control p-2" required v-model="form.username" />
        </div>
        <div class="form-content">
          <label for="password">Ingresa tu Contraseña</label>
          <input type="password" class="form-control p-2" required v-model="form.password" />
        </div>
        <div class="form-content">
          <label for="countries">Ingresa tu Talla</label>
          <select id="countries" class="form-control" required v-model="form.select">
          <option selected >Elige tu talla</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        </div>
        <div class="form-content">
          <label for="email">Ingresa tu email</label>
          <input type="email" class="form-control p-2" required v-model="form.email" />
        </div>
        <div class="form-content">
          <label for="file">Ingresa tu Foto</label>
          <input id="inputTag" type="file" class="form-control p-2" />
        </div>
      </form>
      <div class="form-content">
          <button @click="sendUserSave()">
            Registrarse
          </button>
        </div>
    </div>
  </div>
</template>
  
<script>
import { mapActions } from 'pinia'
import { userStore } from '../stores/userStore'
export default {
  data() {
    return {
      form: {
        dni: '',
        select:'',
        username: '',
        password: '',
        email: '',
        file: null
      }
    }
  },
  computed: {

  },
  methods: {
    ...mapActions(userStore, ['sendUser']),
    async sendUserSave(){
      try{
        console.log(this.form)
        const response = await this.sendUser(this.form)
        if(response){
          alert('Usuario Registrado con éxito')
          this.$router.push({ name: 'login' })
        }
      }catch(error){ 
        alert('Usuario ya existe o error')
      }
    }
  },
  mounted() {
    let input = document.getElementById('inputTag')
    input.addEventListener('change', () => {
      let file = document.querySelector('input[type=file]').files[0]
      this.form.file = file
    })
  },
}
</script>
<style scoped>
.item-first {
  flex-basis: 50%;
  max-height: 780px;
  /* overflow: hidden; */
}

.item-second {
  flex-basis: 50%;
}

.content-login {
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.girl img {
  width: 100%;
}

.content-form {
  position: absolute;
  top: 0;
  right: 0;
  width: 916px;
  height: 680px;
  background-color: #FFFFFF;
  color: black;
}

.form-insert {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  /* background-color: red; */
}

.form-content {
  display: flex;
  flex-direction: column;
  min-width: 449px;
}

.form-content label {
  color: #683C11;
  font-weight: 400;
  font-size: 16px;
  padding-inline: 10px;
}

input, select {
  background: rgba(255, 237, 201, 0.5);
  border: 2px solid #7B552F;
  border-radius: 10px;
  height: 50px;
}

.title {
  text-align: center;
  margin-top: 3rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;

  color: #7B552F;
}

.welcome {
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 10px;

  color: #7B552F;
}

button {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  text-align: center;

  color: #683C11;
}
</style>
  