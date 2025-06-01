<template>
    <main class="bg-gray-200 h-screen">
        <h1 class="text-center fon-bold text-6xl p-10">Venha comprar conosco</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ProductsCards
                v-for="p in products"
                :key="p.id"
                :products="p"
            />
        </div>
    </main>
    <div class="flex justify-center gap-4 mt-6">
        <button @click="previousProducts" :disabled="currentPage === 1" class="btn bg-gray-200 px-10 py-15 rounded-sm hover:bg-black text-white  disabled:bg-gray-100">Anterior</button>
        <button @click="nextProducts" class="btn  bg-gray-200 m-5 px-10 py-15 rounded-sm hover:bg-black text-white">Próximo</button>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import ProductsCards from '../components/ProductsCards.vue'

const products = ref ([])
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
