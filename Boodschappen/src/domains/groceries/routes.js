import Overview from './pages/Overview.vue';
import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';

export const routes = [
    {path: '/', component: Overview},
    {path: '/Create', component: Create},
    {path: '/Edit/:id', component: Edit},
];
