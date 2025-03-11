<template>
    <GroceryForm :grocery="grocery" @updateMessage="handleMessage" />
    <p>Bericht van kindcomponent: {{ message }}</p>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

import GroceryForm from './../components/GroceryForm.vue';

import {addGrocery} from './../store.js';

const grocery = ref({product: '', price: 1, number: 1});
const message = ref('');

const handleMessage = newMessage => {
    message.value = newMessage;
    console.log(newMessage);
    addGrocery(newMessage);
};
</script>

<style scoped></style>
