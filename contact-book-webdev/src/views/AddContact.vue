<template>
  <div>
    <h1>Add New Contact</h1>
    <form @submit.prevent="addContact">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { saveContacts, getContacts } from '../utils/storage.js';

export default {
  setup() {
    const router = useRouter();
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');

    const addContact = () => {
      const newContact = {
        id: Date.now().toString(),
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      };

      const contacts = getContacts();
      contacts.push(newContact);
      saveContacts(contacts);
      router.push(`/contact/${newContact.id}`);
    };

    return { firstName, lastName, email, addContact };
  },
};
</script>
