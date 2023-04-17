<script setup>
defineProps({
  // ropa a probarse
  cloths: {
    type: Array,
    required: false,
    default: []
  }
})
</script>

<template>
  <h2 class="font-bold mb-4">Productos</h2>
  <ul>
    <li class="mb-2 border-black border-2 rounded-md p-2">
      <div class="flex flex-row gap-3">
        <div class="w-2/5 bg-gray-100 items-center">
          <img src="https://via.placeholder.com/150" alt="Producto" class="w-full">
        </div>

        <div class="border-l border-black h-auto"></div>

        <div class="w-3/5">
          <h2 class="font-bold text-lg mb-2">Producto 1</h2>
          <p class="text-gray-700 text-sm mb-2">Talla: M</p>
          <p class="text-gray-700 text-lg">$20.00</p>
        </div>
      </div>
    </li>
    <li class="mb-2 border-black border-2 rounded-md">
      <a href="#" class="text-gray-800 hover:text-gray-600">Producto 2</a>
    </li>
    <li class="mb-2 border-black border-2 rounded-md">
      <a href="#" class="text-gray-800 hover:text-gray-600">Producto 3</a>
    </li>
    <li class="mb-2 border-black border-2 rounded-md">
      <a href="#" class="text-gray-800 hover:text-gray-600">Producto 4</a>
    </li>
  </ul>
  <div class="flex flex-row items-center border rounded-lg overflow-hidden">
    <div class="w-1/4 bg-gray-100 p-4">
      <img src="https://via.placeholder.com/150" alt="Producto" class="w-full">
    </div>
    <div class="w-3/4 p-4">
      <h2 class="font-bold text-lg mb-2">Producto 1</h2>
      <p class="text-gray-700 text-sm mb-2">Talla: M</p>
      <p class="text-gray-700 text-lg">$20.00</p>
    </div>
    <div class="border-l border-gray-300 h-16"></div>
  </div>
</template>

<style scoped></style>
