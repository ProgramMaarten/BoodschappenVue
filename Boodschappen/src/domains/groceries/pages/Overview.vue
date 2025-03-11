<template>
    <GroceriesTable v-model="getAllGroceries" />
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

import GroceriesTable from './../components/GroceriesTable.vue';

import {getAllGroceries} from './../store.js';
</script>

<style scoped></style>
