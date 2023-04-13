<script>
import ClothCard from '../components/ClothCard.vue';

export default {
  data() {
    return {
      card_obj : {
        url_img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg',
        name: 'polo',
        price: 50,
      },
    }
  },
  components: {
    ClothCard
  }
}

</script>

<template>
  <main>
    <div class="w-full bg-slate-400 h-full py-5 flex justify-center items-center">
      <ClothCard :card="card_obj" />
    </div>
  </main>
</template>
