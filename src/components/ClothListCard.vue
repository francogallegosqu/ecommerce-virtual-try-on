<script setup>
defineProps({
  cloth: {
    type: Object,
    required: false,
    default: null
  }
})
</script>

<template>
  <div class="flex flex-row gap-3">
    <div class="w-2/5 bg-gray-100 items-center">
      <img :src="cloth.url_img" alt="Producto" width="150" height="150" class="">
    </div>

    <div class="border-l border-black h-auto"></div>

    <div class="w-3/5">
      <h2 class="font-bold text-lg mb-2">{{ cloth.name }}</h2>
      <p class="text-gray-700 text-sm mb-2">Talla: {{ cloth.size }}</p>
      <p class="text-gray-700 text-lg">{{ `S/. ${cloth.price}` }}</p>
      <div class="flex gap-x-0 justify-between">
        <button class="w-3/4 bg-[#FEE7D6] hover:bg-white text-sm md:text-base border hover:border-1 hover:border-[#FEE7D6] rounded-xl p-1 text-black"
        href="/tryon">Probarse
      </button>
      <button class="w-1/4 bg-red-400 hover:bg-white text-sm md:text-base border hover:border-1 hover:border-red-400 rounded-xl text-black">
        <Fai icon="fa-solid fa-trash-can" />
      </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
