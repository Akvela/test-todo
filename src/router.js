import { createRouter, createWebHistory } from 'vue-router';
import Todo from "./pages/Todo.vue";
import Home from "./pages/Home.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/todo', component: Todo }
    ]
})