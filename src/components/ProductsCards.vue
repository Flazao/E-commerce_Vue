<template>
    <div class="bg-gray-500 rounded-lg p-6 w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div class="rounded-lg p-4 text-black shadow-md bg-gray-100 hover:bg-gray-300 hover:shadow-xl">
            <img v-if="product.image" :src="product.image" :alt="product.title" class="mx-auto mb-2 w-40 h-40 object-cover rounded-full"></img>
            <h2 class="text-center capitalize font-bold text-lg">{{ product.title }}</h2>
            <p v-if="product.price" class="text-center text-sm uppercase text-gray-600">R$ {{ product.price }}</p>
            <p v-if="product.category" class="text-center text-xs text-gray-500">Categoria: {{ product.category }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: Object
})
console.log("Propriedade 'product' recebida no ProductCard:", props.product);
</script>