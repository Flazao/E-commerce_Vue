<template>
    <router-link :to="`/product/${product.id}`">
        <div
            class="bg-gradient-to-b from-[var(--cor-primaria)] via-emerald-400 to-[var(--cor-segundaria)] rounded-lg p-1 w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div
                class="rounded-lg p-2 text-black shadow-md bg-gray-100 hover:bg-gray-200 hover:shadow-xl min-h-70 flex flex-col justify-center">
                <img v-if="product.image" :src="product.image" :alt="product.title"
                    class="mx-auto mb-2 w-30 h-30 object-cover rounded-full"></img>
                <h2 class="text-center capitalize font-bold text-lg">{{ product.title }}</h2>
                <p v-if="product.price" class="text-center text-sm uppercase text-gray-600"><strong
                        class="text-black/70">R$</strong> {{ product.price }}</p>
                <p v-if="product.category" class="text-center text-xs text-gray-500"><strong
                        class="text-black/70">Categoria:</strong> {{ product.category }}</p>
            </div>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({
    product: Object
})
console.log("Propriedade 'product' recebida no ProductCard:", props.product);
</script>