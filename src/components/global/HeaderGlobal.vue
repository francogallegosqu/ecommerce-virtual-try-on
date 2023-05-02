<template>
    <header class="header">
        <div class="item-header logo">
            <div class="content-logo">
                <img src="/logo.png" alt="Logo">
                <span class="title">INLINE</span>
            </div>
        </div>
        <nav class="item-header navigation">
            <router-link :to="{name:'Cloths'}">Inicio</router-link>
            <router-link :to="{name:'TryOn'}">Favoritos</router-link>
            <router-link v-if="!getLog" :to="{name:'login'}">Iniciar sesion</router-link>
            <router-link v-if="!getLog" :to="{name:'register'}">Registrarse</router-link>
            <a v-if="getLog" href="#">Hola {{ getUser?.user?.username }}</a>
            <a v-if="getLog" href="#" @click="logoutUser()">Logout</a>
        </nav>
    </header>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { dataStore } from '../../stores/dataStore'
import { logStore } from '../../stores/logStore'
export default {
    computed: {
    ...mapState(logStore, ['getLog']),
    ...mapState(dataStore, ['getUser']),

  },
  methods: {
    ...mapActions(dataStore, ['logout']),
    ...mapActions(logStore, ['updateLogin']),
    logoutUser() {
        this.logout()
        this.updateLogin(false)
        this.$router.push({path: '/login'})
    }
  },
  mounted(){
    const data = JSON.parse(localStorage.getItem("data"))
    if(data != null) {
        this.updateLogin(true)
    }
  }
}
</script>
<style scoped>
.header {
    display: flex;
    width: 100%;
    min-height: 140px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
}
@media (max-width:768px ) {
    .header {
        flex-direction: column;
    }
}
.logo {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.content-logo {
    display: flex;
}
.title {
    font-family: 'Italiana';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    margin-left: 3rem;
    /* line-height: 71px; */
    /* identical to box height */
    


color: #683C11;
}
@media (max-width:768px ) {
    .title {
        display: none !important;
    }
}
.item-header {
  flex-basis:50%;
}
.navigation {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #E4E3DF;
    flex-wrap: wrap;
}
@media (max-width:768px ) {
    .navigation {
        flex-direction: column;
    }
}
a {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    padding-inline: 50px;
    color: #7B552F;
}
</style>