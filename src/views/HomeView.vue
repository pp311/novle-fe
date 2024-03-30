<script setup lang="ts">
import Swiper from '../components/Swiper.vue'
import Footer from '../components/Footer.vue'
import BookCoverList from '../components/HomePage/BookCoverList.vue'
</script>

<template>
    <main class="mx-40 mt-10 mb-72">
        <Swiper />
        <BookCoverList title="New Books" />
    </main>
</template>
