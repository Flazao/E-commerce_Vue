<template>

    <div
        class="bg-gradient-to-b from-[var(--cor-primaria)] via-emerald-400 to-[var(--cor-segundaria)] rounded-lg p-1 w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
        <div
            class="rounded-lg p-2 gap-3 text-black shadow-md bg-gray-100 hover:bg-gray-200 hover:shadow-xl min-h-70 max-h-70 flex flex-col justify-center">
            <router-link :to="`/product/${product.id}`">
                <img v-if="product.image" :src="product.image" :alt="product.title"
                    class="mx-auto mb-2 w-25 h-25 object-cover rounded-full"></img>
                <h2 class="text-center capitalize font-bold text-lg">{{ product.title }}</h2>
                <p v-if="product.price" class="text-center text-md uppercase text-gray-600"><strong
                        class="text-black/60">R$</strong> {{ product.price }}</p>
                <p v-if="product.category" class="text-center text-md text-gray-500"><strong
                        class="text-black/60">Categoria:</strong> {{ product.category }}</p>
            </router-link>
            <button @click="addCart(product.id)"
                class="p-1 bg-[var(--cor-botoes)] text-white cursor-pointer rounded-2xl hover:bg-[var(--cor-botoes-hover)]">
                Adicionar ao Carrinho
            </button>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
    product: Object,
    addCart: Function
})
console.log("Propriedade 'product' recebida no ProductCard:", props.product);
</script>