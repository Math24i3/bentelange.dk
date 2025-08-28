import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import ProjectView from './views/ProjectView.vue';
import Main from './views/Main.vue';
const routes = [
    { path: '/', component: Main },
    { path: '/projects/:slug', component: ProjectView, props: true },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
createApp(App).use(router).mount('#app');
