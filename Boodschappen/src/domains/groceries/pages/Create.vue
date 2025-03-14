<template>
    <GroceryForm :grocery="grocery" @updateMessage="handleGrocery" />
    
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

import GroceryForm from './../components/GroceryForm.vue';

import {addGrocery} from './../store.js';

const grocery = ref({product: '', price: 1, number: 1});


const handleGrocery = newGrocery => {

    addGrocery(newGrocery);
};
</script>

<style scoped></style>
