<template>
    <main class="bg-gray-200 h-screen">
        <h1 class="text-center font-bold text-6xl p-10">Produtos</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ProductsCards v-for="p in products" :key="p.id" :products="p" />
        </div>
        <div class="flex justify-center gap-4 mt-6">
            <button @click="previousProducts" :disabled="currentPage === 1"
                class="btn bg-[var(--cor-botoes)] px-3 py-3 rounded-sm hover:bg-[var(--cor-botoes-hover)] text-white disaled:bg-gray-300 cursor-pointer">Anterior</button>
            <button @click="nextProducts"
                class="btn bg-[var(--cor-botoes)] px-3 py-3 rounded-sm hover:bg-[var(--cor-botoes-hover)] text-white cursor-pointer">Próximo</button>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductsCards from '../components/ProductsCards.vue'

const products = ref([])
const currentPage = ref(1);

const nextUrl = ref(null);
const prevUrl = ref(null);

const fetchCharacters = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
        const results = response.data.results

    } catch (error) {
        console.log("Erro ao buscar os itens", error);
    }

    console.log(products)
}
</script>
