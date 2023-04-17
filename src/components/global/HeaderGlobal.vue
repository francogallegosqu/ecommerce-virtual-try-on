<template>
    <header class="header">
        <div class="item-header logo">
            <div class="content-logo">
                <img src="/logo.png" alt="Logo">
                <span class="title">INLINE</span>
            </div>
        </div>
        <nav class="item-header navigation">
            <a class="" href="#">Inicio</a>
            <a href="#">Favoritos</a>
            <router-link :to="{name:'login'}">Iniciar sesion</router-link>
            <router-link :to="{name:'register'}">Registrarse</router-link>
        </nav>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    width: 100%;
    height: 140px;
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
.item-header {
  flex-basis:50%;
}
.navigation {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #E4E3DF;
}
a {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    padding-inline: 50px;
    color: #7B552F;
}
</style>