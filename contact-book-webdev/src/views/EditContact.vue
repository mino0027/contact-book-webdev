<template>
  <div>
    <h1>Edit Contact</h1>
    <form @submit.prevent="editContact">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <button type="submit">Update Contact</button>
    </form>
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
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');

    onMounted(() => {
      const id = route.params.id;
      const contact = contacts.value.find(c => c.id === id);
      firstName.value = contact.firstName;
      lastName.value = contact.lastName;
      email.value = contact.email;
    });

    const editContact = () => {
      const id = route.params.id;
      const contact = contacts.value.find(c => c.id === id);
      contact.firstName = firstName.value;
      contact.lastName = lastName.value;
      contact.email = email.value;

      saveContacts(contacts.value);
      router.push(`/contact/${contact.id}`);
    };

    return { firstName, lastName, email, editContact };
  },
};
</script>
