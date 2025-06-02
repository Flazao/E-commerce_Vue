<template>
    <main class="animated-navbar bg-gradient-to-r from-[var(--cor-primaria)] to-[var(--cor-segundaria)]">
        <div class="flex p-4 items-center">
            <router-link to="/" class="cursor-pointer transition-transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                    <path fill-rule="evenodd"
                        d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                        clip-rule="evenodd" />
                </svg>
            </router-link>
            <h1 class="p-2 text-xl font-bold">CodeShop</h1>

            <div class="flex items-center ml-auto space-x-4">
                <button @click="isMenuOpen = true"
                    class="cursor-pointer transition-transform hover:scale-110 bg-transparent border-none p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div class="relative w-full max-w-md mx-auto">
                    <input type="search" placeholder="Pesquisar"
                        class="w-full pl-12 pr-2 py-1 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 text-gray-900 placeholder-gray-500" />
                    <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                </div>
            </div>
        </div>

        <div v-if="isMenuOpen" @click="isMenuOpen = false" class="fixed inset-0 bg-black/70 z-40 transition-opacity">
        </div>

        <aside :class="[
            'fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300',
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        ]">
            <div class="flex flex-col h-full p-6">
                <button @click="isMenuOpen = false" class="self-end mb-8 cursor-pointer">
                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <nav class="flex flex-col gap-4">
                    <router-link to="/" class="py-2 px-4 rounded hover:bg-gray-200">Home</router-link>
                    <router-link to="/products" class="py-2 px-4 rounded hover:bg-gray-200">Produtos</router-link>
                    <router-link to="/carrinho" class="py-2 px-4 rounded hover:bg-gray-200">Carrinho</router-link>
                    <router-link to="/categories" class="py-2 px-4 rounded hover:bg-gray-200">Categorias</router-link>
                </nav>
            </div>
        </aside>
    </main>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>
