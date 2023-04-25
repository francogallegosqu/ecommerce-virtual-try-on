<script>
import ClothListCard from './ClothListCard.vue';

export default {
    props: {
        favClothes: {
            type: Array,
            required: false,
            default: [
                {
                    id: 1,
                    url_img: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg",
                    name: "polo",
                    size: "M",
                    price: 50,
                },
                {
                    id: 2,
                    url_img: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg",
                    name: "pantalon",
                    size: "M",
                    price: 65,
                },
            ]
        },
    },
    components: { ClothListCard }
}
</script>

<template>
  <h2 class="font-bold mb-4">Prendas Favoritas</h2>
  <ul class="flex flex-col gap-y-2">
    <li v-for="cloth in favClothes" :key="cloth.id" class="border-black border-2 rounded-md p-2">
      <ClothListCard :cloth="cloth"></ClothListCard>
    </li>
  </ul>  
</template>

<style scoped></style>
