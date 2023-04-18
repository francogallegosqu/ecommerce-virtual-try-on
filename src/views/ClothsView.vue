<script>
import ClothCard from '../components/ClothCard.vue';

export default {
  data() {
    return {
      clothes: [
        {
          id: 1,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'polo',
          size: 'M',
          price: 50,
        },
        {
          id: 2,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
        {
          id: 3,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
        {
          id: 4,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
        {
          id: 5,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
        {
          id: 6,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
        {
          id: 7,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
        {
          id: 8,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
        {
          id: 9,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
        {
          id: 10,
          url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
          name: 'pantalon',
          size: 'M',
          price: 65,
        },
      ],
      // card_obj : {
      //   url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
      //   name: 'polo',
      //   price: 50,
      // },
    }
  },
  components: {
    ClothCard
  }
}

</script>

<template>
  <main>
    <div class="mx-5 h-full py-5 justify-center items-center grid grid-cols-5 gap-5">
      <div v-for="cloth in clothes" :key="cloth.id">
        <ClothCard :cloth="cloth" />
      </div>
    </div>
  </main>
</template>
