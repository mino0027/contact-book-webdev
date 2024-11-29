<template>
  <div>
    <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
    <p>Email: {{ contact.email }}</p>
    <router-link :to="`/edit/${contact.id}`">Edit</router-link>
    <button @click="deleteContact">Delete</button>
    <router-link to="/">Back to List</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getContacts, saveContacts } from '../utils/storage.js';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const contacts = ref(getContacts());
    const contact = ref({});

    onMounted(() => {
      const id = route.params.id;
      contact.value = contacts.value.find(c => c.id === id);
    });

    const deleteContact = () => {
      contacts.value = contacts.value.filter(c => c.id !== contact.value.id);
      saveContacts(contacts.value);
      router.push('/');
    };

    return { contact, deleteContact };
  },
};
</script>
