<template>
    <header class="header">
        <div class="item-header">Logo</div>
        <nav class="item-header navigation">
            <a class="" href="#">Inicio</a>
            <a href="#">Favoritos</a>
            <a href="#">Iniciar sesion</a>
        </nav>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    width: 100%;
    height: 100px;
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