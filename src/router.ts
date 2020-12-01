import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Pre from '@/views/Pre.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'home', component: Home },
  { path: '/pre', name: 'pre', component: Pre },
  { path: '/about', name: 'about', component: About }
];

const router = new VueRouter({
  routes
});

export default router;
