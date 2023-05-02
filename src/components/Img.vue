<template>
    <img v-if="srcImg" :src="srcImg" alt="Img">
</template>

<script>
export default {
    props:{
        srcImg: {
            type: String
        }
    }
}
</script>