<template>
  <main class="bg-[#EEEEEE] p-10">
      <div class="max-w-1/2 flex flex-col text-center mx-auto p-8 bg-white shadow-xl rounded-xl min-h-screen">
        <h1 class="text-3xl font-bold mb-6">Carrinho de Compras</h1>
        <div v-if="cart.length === 0" class="text-gray-500">Seu carrinho está vazio.</div>
        <div v-else>
          <div v-for="item in cart" :key="item.id" class="flex items-center mb-4 gap-4">
            <img :src="item.thumbnail" :alt="item.title" class="w-16 h-16 transition-transform hover:scale-130 rounded-full border border-gray-100 object-cover" />
            <div class="flex-1">
              <div class="font-bold">{{ item.title }}</div>
              <div class="text-sm text-black">R$ {{ item.price }}</div>
            </div>
            <input type="number" v-model.number="item.quantity" @change="saveCart"
              class="w-16 border rounded-full px-2 py-1" />
            <button @click="removeitemCart(item.id)" class="text-red-600 cursor-pointer hover:underline ml-2">Remover</button>
          </div>
          <div class="font-bold text-xl mt-6">
            Total: R$ {{cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}}
          </div>
          <button @click="clearCart" class="mt-4 cursor-pointer px-4 py-2 bg-[var(--cor-botoes)] text-white rounded-xl hover:bg-[var(--cor-botoes-hover)]">
            Limpar Carrinho
          </button>
        </div>
      </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cart = ref([])

const loadCart = () => {
  const saved = localStorage.getItem('cart')
  cart.value = saved ? JSON.parse(saved) : []
}

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const removeitemCart = (id) => {
  cart.value = cart.value.filter(item => item.id !== id)
  saveCart()
}

const clearCart = () => {
  cart.value = []
  saveCart()
}

onMounted(loadCart)
</script>
