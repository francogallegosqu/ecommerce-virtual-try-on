<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content-login">
    <div class="item-first girl">
      <img src="/chica.png" alt="Girl" />
    </div>
    <div class="item-second content-form">
        <div class="title">
            Login de usuario 
        </div>
        <div class="welcome">
            ¡Bienvenido! Por favor, ingresa tus datos
        </div>
      <form class="form-insert" id="formId" enctype="multipart/form-data">
        <div class="form-content">
            <label for="dni">Ingresa tu Correo</label>
          <input
            type="email"
            class="form-control"
            required
            v-model="form.identifier"
          />
        </div>
        <div class="form-content">
              <label for="dni">Ingresa tu Password</label>
            <input
              type="password"
              class="form-control"
              required
              v-model="form.password"
            />
          </div>
      </form>
      <div class="form-content">
          <button @click="sendAuthenticated()">
            Iniciar
          </button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { loginStore } from '../stores/loginStore'
import { logStore } from '../stores/logStore'
export default {
  data() {
    return {
      form: {
        identifier: '',
        password: '',
      }
    }
  },
  
  methods: {
    ...mapActions(loginStore, ['sendLogin']),
    ...mapActions(logStore, ['updateLogin']),
    async sendAuthenticated(){
      const response = await this.sendLogin(this.form)
      if(response){
        alert('Usuario Logeado con éxito')
        this.$router.push({ path: '/' })
        this.updateLogin(true)
      }
    }
  }

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
input {
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
