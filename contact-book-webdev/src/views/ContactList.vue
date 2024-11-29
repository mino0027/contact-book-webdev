<template>
  <div>
    <h1>Contact List</h1>
    <input v-model="searchQuery" placeholder="Search contacts..." />
    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">{{ contact.firstName }} {{ contact.lastName }}</router-link>
      </li>
    </ul>
    <router-link to="/add">Add New Contact</router-link>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { getContacts } from '../utils/storage.js';

export default {
  setup() {
    const searchQuery = ref('');
    const contacts = ref(getContacts());

    const filteredContacts = computed(() => {
      return contacts.value
        .filter(contact => {
          return (
            contact.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchQuery.value.toLowerCase())
          );
        })
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    });

    return { searchQuery, filteredContacts };
  },
};
</script>
