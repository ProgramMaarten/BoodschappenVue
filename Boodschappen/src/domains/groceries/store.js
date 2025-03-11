// State
import {ref, reactive, computed} from 'vue';

//export
const groceries = ref([
    {
        id: 0,
        product: 'Brood',
        price: 1.0,
        number: 1,
    },
    {
        id: 1,
        product: 'Broccoli',
        price: 0.99,
        number: 2,
    },
    {
        id: 2,
        product: 'Krentenbollen',
        price: 1.2,
        number: 4,
    },
    {
        id: 3,
        product: 'Noten',
        price: 2.99,
        number: 0,
    },
]);

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = grocery => {
    grocery.id = groceries.value.at(-1).id + 1;
    groceries.value.push(grocery);
};

export const editGrocery = grocery => {
    id = parseInt(grocery.id);
    groceries.value[id].product = grocery.product;
    groceries.value[id].price = grocery.price;
    groceries.value[id].number = grocery.number;
};

export const deleteGrocery = id => {
    groceries.value.splice(id, 1);
};
