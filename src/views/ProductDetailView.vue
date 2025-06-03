<template>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div
            class="bg-gradient-to-b from-[var(--cor-primaria)] via-emerald-400 to-[var(--cor-segundaria)] rounded-lg p-1 w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div
                class="rounded-lg p-2 text-black shadow-md bg-gray-100 hover:bg-gray-200 hover:shadow-xl flex flex-col justify-center">
                <img v-if="product.image" :src="product.image" :alt="product.title"
                    class="mx-auto mb-2 w-50 h-50 object-cover rounded-full"></img>
                <h2 class="text-center capitalize font-bold text-lg">{{ product.title }}</h2>
                <p v-if="product.price" class="text-center text-md uppercase text-gray-600"><strong
                        class="text-black/60">R$</strong> {{ product.price }}</p>
                <p v-if="product.category" class="text-center text-md text-gray-500"><strong
                        class="text-black/60">Categoria:</strong> {{ product.category }}</p>
            </div>
        </div>
    </div>
</template>

<script setup> 
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const product = ref([])
const route = useRoute()

const fetchProduct = async () => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`);

        product.value = { 
            id: response.data.id,
            title: response.data.title,
            category: response.data.category,
            price: response.data.price,
            image: response.data.thumbnail
        };
    } catch (error) {
        console.error("Erro ao buscar produtos da DummyJSON:", error);
    }
}

onMounted(fetchProduct)

</script>