<template>
    <h1>Boodschappenlijst</h1>
    <!-- <p>
        <strong>Current route path:</strong>
        {{ $route.fullPath }}
    </p> -->
    <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        |
        <RouterLink to="/Create">Go to Create</RouterLink>
        |
        <!-- <RouterLink to="/Edit">Go to Edit</RouterLink> -->
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
</script>

<style scoped></style>
