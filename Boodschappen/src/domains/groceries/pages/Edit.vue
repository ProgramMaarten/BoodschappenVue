<template>
    <GroceryForm :grocery="grocery" @updateMessage="handleMessage" />
    <!-- <div>{{ grocery }}</div> -->
</template>
<script setup>
import {ref, reactive, computed} from 'vue';

import {getGroceryById} from './../store.js';

import {editGrocery} from './../store.js';

import GroceryForm from './../components/GroceryForm.vue';

import {useRoute} from 'vue-router';

const route = useRoute();
const id = route.params.id;

const grocery = ref(getGroceryById(id).value);

const message = ref('');
const handleMessage = changedGrocery => {
    editGrocery(changedGrocery);
};
</script>

<style scoped></style>
