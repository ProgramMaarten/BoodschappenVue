<template>
    <GroceryForm :grocery="grocery" @updateMessage="handleMessage" />
    
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

import GroceryForm from './../components/GroceryForm.vue';

import {addGrocery} from './../store.js';

const grocery = ref({product: '', price: 1, number: 1});


const handleMessage = newMessage => {

    addGrocery(newMessage);
};
</script>

<style scoped></style>
