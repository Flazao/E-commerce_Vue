<template>
    <div class="bg-gray-100">
        <Navbar />
    </div>
        <router-view />
    <div>
        <Footer />
    </div>

</template>

<script setup>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

</script>