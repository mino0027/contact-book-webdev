<template>
  <div>
    <div v-if="contact">
      <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
      <p>Email: {{ contact.email }}</p>
      <router-link class="editBut" :to="`/edit/${contact.id}`">Edit</router-link>
      <br>
      <button class="deleteBut" @click="deleteContact">Delete</button>
      <br>
    </div>
    <div v-else>
      <p>Loading contact details...</p>
    </div>
    <router-link class="editBut" to="/">Back to List</router-link>
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
    const contact = ref(null);

    onMounted(() => {
      const id = route.params.id;
      contact.value = contacts.value.find(c => c.id === id);

      if (!contact.value) {
        alert("Contact not found.");
        router.push("/");
      }
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
<style>
.deleteBut {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-bottom: 10px;
margin-top: 10px;
}
.deleteBut:hover {
  background-color: #c0392b;
}
.editBut {
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  border: 1px solid #333;
  padding: 5px 10px;
}
.editBut:hover {
  color: #2fd5b6 !important;
  border-radius: 5px;
border: 2px solid #2fd5b6;
background-color: #076f5c;
}
</style>