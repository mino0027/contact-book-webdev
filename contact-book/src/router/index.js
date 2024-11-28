import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactDetails from '../views/ContactDetails.vue';
import AddContact from '../views/AddContact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetails,
    props: true,
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
