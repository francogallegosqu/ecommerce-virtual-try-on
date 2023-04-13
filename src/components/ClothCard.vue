<script setup>
defineProps({
  card: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="relative pl-1 flex justify-center rounded-xl hover:scale-[1.01] duration-500 transform transition cursor-pointer">
    <!-- Boton "Favoritos" -->
    <a
      class="absolute top-0 right-0 mt-3 mr-1 z-30 hover:text-gray-100 w-8 h-8 bg-white text-black rounded-full text-center">
      <Fai icon="fa-regular fa-heart" class="fa-xl pt-1"/>
    </a>
    <div class="w-64 pb-2 bg-white rounded-xl shadow-xl z-10">

      <div class="relative">
        <img :src="card.url_img" class="max-h-60 object-cover rounded-t-xl" alt="">
      </div>

      <div class="px-2 py-1">
        <!-- Product Title -->
        <div class="text-sm md:text-base font-bold pr-2">{{ card.name }}</div>
        <!-- Precio -->
        <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">{{ `S/. ${card.price}` }}</p>
        <!-- Tombol pesan -->
        <a class="inset-x-0 bottom-0 flex justify-center bg-[#FEE7D6] hover:bg-white text-sm md:text-base border hover:border-2 hover:border-[#FEE7D6] rounded-xl px-5 p-1 text-black"
          href="#">Probarse</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
