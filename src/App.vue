<template>
    <div class="bg-gray-100">
        <Navbar />
        <Menu />
    </div>
        <router-view />
    <div>
        <Footer />
    </div>

</template>

<script setup>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'

</script>