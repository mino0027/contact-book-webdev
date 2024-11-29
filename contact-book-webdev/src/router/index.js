import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../views/ContactList.vue';
import ContactDetail from '../views/ContactDetail.vue';
import AddContact from '../views/AddContact.vue';
import EditContact from '../views/EditContact.vue';

const routes = [
  { path: '/', component: ContactList },
  { path: '/contact/:id', component: ContactDetail, props: true },
  { path: '/add', component: AddContact },
  { path: '/edit/:id', component: EditContact, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
