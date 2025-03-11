<template>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Prijs</th>
                <th>Aantal</th>
                <th></th>
            </tr>
            <tr>
                <td><input v-model="newGrocery.product" placeholder="Voeg een product toe" type="text" /></td>
                <td><input v-model="newGrocery.price" placeholder="1" type="number" step="0.01" /></td>
                <td><input v-model="newGrocery.number" placeholder="1" type="number" step="1" /></td>
                <td><button @click="emitGrocery">boodschap opslaan</button></td>
            </tr>
            <tr>
                <td>{{ newGrocery.value }}</td>
                <!-- <td>{{ grocery.value.price }}</td> -->
                <!-- <td>{{ grocery.value.number }}</td> -->
                <td></td>
            </tr>
        </thead>
    </table>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

const {grocery} = defineProps(['grocery']);

const newGrocery = ref({...grocery});

const emit = defineEmits(['updateMessage']);

const emitGrocery = () => {
    emit('updateMessage', newGrocery.value);
};

// const newProduct = ref('');
// const newPrice = ref(1);
// const newNumber = ref(1);
// const addGrocery = () => {
//     const newGrocery = {
//         product: newProduct.value,
//         price: newPrice.value,
//         number: newNumber.value,
//     };
//     groceries.value.push(newGrocery);
// };
</script>

<style scoped></style>
