<script>
import ListTryOn from '../components/ListTryOn.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    ListTryOn
  },
}

</script>

<template>
  <main>
    <div class="flex flex-row">
      <div class="w-1/4 bg-gray-200 p-4">
        <ListTryOn></ListTryOn>
      </div>
      <div class="w-3/4 bg-white p-4">
        <!-- Contenido principal aquí -->
        <p>aqui va la imagen de la prueba de ropa</p>
      </div>
    </div>    
  </main>
</template>
