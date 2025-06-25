<template>
    <div class="flex flex-row gap-20">
        <template v-for="(image, index) in images">
             <div class="modelo__item" :class="`order-${index}`">
                 <img :src="image" alt="">
            </div>
        </template>
    </div>
    <button class="text-white cursor-pointer btn" v-on:click="sayHola()">Push me</button>
</template>

<script>
export default {
    data() {
        return {
            images: ['/images/modelo_1.png', '/images/modelo_2.png', '/images/modelo_3.png']
        }
    },
    methods: {
        sayHola() {
            this.images = []; 
            console.log("Hola mundo");
        }
    }
}
</script>

<style>
.modelo__item {
    background-color: #110531;
    border-radius: 20px;
    width: auto;
}

.modelo__item img {
    width: 560px;
}

/* .modelo__item .active {
    width: 600px;
} */
</style>