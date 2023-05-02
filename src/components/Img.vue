<template>
    <img :src="srcImg" alt="Img">
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