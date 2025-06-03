<template>
    <main class="bg-gray-100 min-h-screen">
        <h1 class="text-center font-bold text-5xl p-10">Produtos</h1>

        <div class="flex justify-self-end mb-6 mr-10">
            <select v-model="selectedCategory" @change="categoryFilter"
                class="px-2 py-2 rounded-xl border cursor-pointer">
                <option value="">Filtrar por</option>
                <option v-for="category in categories" :key="category.slug" :value="category.slug">
                    {{ category.name }}
                </option>
            </select>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-5 mr-5 ml-5">
            <ProductsCards v-for="p in products" :key="p.id" :product="p" :addCart="addCart" />
        </div>
        <div class="flex justify-center gap-4 mt-6 mb-6">
            <button @click="previousProducts" :disabled="skip === 0"
                class="btn bg-[var(--cor-botoes)] px-3 py-3 rounded-lg hover:bg-[var(--cor-botoes-hover)] text-white disabled:bg-gray-400 cursor-pointer">
                Anterior
            </button>
            <button @click="nextProducts" :disabled="!haveMore"
                class="btn bg-[var(--cor-botoes)] px-3 py-3 rounded-lg hover:bg-[var(--cor-botoes-hover)] text-white disabled:bg-gray-400 cursor-pointer">
                Próximo
            </button>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductsCards from "../components/ProductsCards.vue";

const products = ref([]);
const skip = ref(0);
const limit = ref(10);
const haveMore = ref(true);
const categories = ref([]);
const selectedCategory = ref("");

const fetchCategories = async () => {
    try {
        const response = await axios.get(
            "https://dummyjson.com/products/categories"
        );
        categories.value = response.data;
    } catch (error) {
        categories.value = [];
    }
};

const fetchProducts = async () => {
    try {
        const response = await axios.get(
            selectedCategory.value
                ? `https://dummyjson.com/products/category/${selectedCategory.value}?limit=${limit.value}&skip=${skip.value}`
                : `https://dummyjson.com/products?limit=${limit.value}&skip=${skip.value}`
        );
        const productsData = response.data.products;
        haveMore.value = skip.value + productsData.length < response.data.total;
        products.value = productsData.map((product) => ({
            id: product.id,
            title: product.title,
            category: product.category,
            price: product.price,
            image: product.thumbnail,
        }));
    } catch (error) {
        console.error("Erro ao buscar produtos da DummyJSON:", error);
    }
};

const addCart = async (productId) => {
    const responseCart = await axios.get(
        `https://dummyjson.com/products/${productId}`
    );
    const product = responseCart.data;
    const saved = localStorage.getItem("cart");
    const cart = saved ? JSON.parse(saved) : [];

    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: 1,
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};

const categoryFilter = () => {
    skip.value = 0;
    fetchProducts();
};

const nextProducts = () => {
    if (haveMore.value) {
        skip.value += limit.value;
        fetchProducts();
    }
};

const previousProducts = () => {
    if (skip.value > 0) {
        skip.value -= limit.value;
        if (skip.value < 0) skip.value = 0;
        fetchProducts();
    }
};

onMounted(() => {
    fetchCategories();
    fetchProducts();
    addCart();
});
</script>
