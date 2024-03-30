<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SideDrawer from './components/SideDrawer.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <SideDrawer>
                    <NavBar />
                </SideDrawer>
                <!-- <RouterLink to="/">Home</RouterLink> -->
                <!-- <RouterLink to="/about">About</RouterLink> -->
            </nav>
        </div>
    </header>

    <RouterView />
    <Footer />
</template>

<style scoped></style>
