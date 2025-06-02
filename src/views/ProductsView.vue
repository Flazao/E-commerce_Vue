<template>
    <main class="bg-gray-100 min-h-screen">
        <h1 class="text-center font-bold text-5xl p-10">Produtos</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ProductsCards v-for="p in products" :key="p.id" :product="p" />
        </div>
        <div class="flex justify-center gap-4 mt-6 mb-6">
            <button @click="previousProducts" :disabled="skip === 0"
                class="btn bg-[var(--cor-botoes)] px-3 py-3 rounded-lg hover:bg-[var(--cor-botoes-hover)] text-white disabled:bg-gray-400 cursor-pointer">Anterior</button>
            <button @click="nextProducts" :disabled="!TemMais"
                class="btn bg-[var(--cor-botoes)] px-3 py-3 rounded-lg hover:bg-[var(--cor-botoes-hover)] text-white disabled:bg-gray-400 cursor-pointer">Próximo</button>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductsCards from '../components/ProductsCards.vue'

const products = ref([])
const skip = ref(0)
const limit = ref(12)

const TemMais = ref(true);

const fetchProducts = async () => {
    try {
        const response = await axios.get(`https://dummyjson.com/products?limit=${limit.value}&skip=${skip.value}`);

        const productsData = response.data.products;

        TemMais.value = (skip.value + productsData.length) < response.data.total;

        products.value = productsData.map(product => ({
            id: product.id,
            title: product.title,
            category: product.category,
            price: product.price,
            image: product.thumbnail
        }));

    } catch (error) {
        console.error("Erro ao buscar produtos da DummyJSON:", error);
    }
}

const nextProducts = () => {
    if (TemMais.value) {
        skip.value += limit.value;
        fetchProducts();
    }
}

const previousProducts = () => {
    if (skip.value > 0) {
        skip.value -= limit.value;
        if (skip.value < 0) skip.value = 0;
        fetchProducts();
    }
}

onMounted(fetchProducts)
</script>
