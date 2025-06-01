<template>
    <div class="bg-gray-500 rounded-lg p-6 w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div class="rounded-lg p-4 text-black shadow-md bg-gray-100 hover:bg-gray-300 hover:shadow-xl">
            <h2 class="text-center capitalize font-bold text-lg">{{ product.title }}</h2>
            <p v-if="product.price" class="text-center text-sm uppercase text-gray-600">{{ product.price }}</p>
            <p v-if="product.category" class="text-center text-xs text-gray-500">category: {{ product.category }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: Object
})
</script>