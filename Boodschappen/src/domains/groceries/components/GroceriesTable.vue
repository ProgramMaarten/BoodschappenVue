<template>
    <table id="boodschappenTabel">
        <thead>
            <tr>
                <th>Product</th>
                <th>Prijs</th>
                <th>Aantal</th>
                <th>Subtotaal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(grocery, index) in groceries" :key="index">
                <td>{{ grocery.product }}</td>
                <td>{{ grocery.price }}</td>
                <td>
                    <input v-model="grocery.number" type="number" step="1" />
                </td>
                <td>{{ (grocery.price * grocery.number).toFixed(2) }}</td>
                <td><RouterLink :to="`/Edit/${grocery.id}`">edit</RouterLink></td>
                <td><button @click="deleteGrocery(grocery.id)">verwijderen</button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="3">Totaal</th>
                <td>{{ Total }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

const groceries = defineModel();

const Total = computed(() => groceries.value.reduce((i, j) => i + j.price*j.number, 0).toFixed(2));

import {deleteGrocery} from './../store.js';
</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
}
</style>
