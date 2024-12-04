<template>
  <div>
    <h1>Contact List</h1>
    <input v-model="searchQuery" placeholder="Search contacts..." />
    <ul>
      <li v-for="contact in sortedContacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">
          <strong>{{ contact.firstName }} {{ contact.lastName }}</strong>
        </router-link>
        <p v-if="contact.description" class="description">{{ contact.description }}</p>
      </li>
    </ul>
    <button class="deleteBut" @click="openDeleteModal">Delete a Contact</button>
    <br>
    <router-link class="editBut" to="/add">Add New Contact</router-link>
    <!-- Delete Modal -->
    <div v-if="showDeleteModal" class="modal-overlay">
      <div class="modal">
        <h2>Select a Contact to Delete</h2>
        <ul>
          <li v-for="contact in contacts" :key="contact.id">
            {{ contact.firstName }} {{ contact.lastName }}
            <button @click="deleteContact(contact.id)">Delete</button>
          </li>
        </ul>
        <button @click="closeDeleteModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { getContacts, saveContacts } from '../utils/storage.js';

export default {
  setup() {
    const searchQuery = ref('');
    const contacts = ref(getContacts());
    const showDeleteModal = ref(false);

    // Computed property to filter and sort contacts alphabetically by last name
    const sortedContacts = computed(() => {
      // Filter based on search query
      const filtered = contacts.value.filter(contact => {
        const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
        return fullName.includes(searchQuery.value.toLowerCase());
      });

      // Sort alphabetically by last name
      return filtered.sort((a, b) => a.lastName.localeCompare(b.lastName));
    });

    // Open delete modal
    const openDeleteModal = () => {
      showDeleteModal.value = true;
    };

    // Close delete modal
    const closeDeleteModal = () => {
      showDeleteModal.value = false;
    };

    // Delete a contact by ID
    const deleteContact = (id) => {
      contacts.value = contacts.value.filter(contact => contact.id !== id);
      saveContacts(contacts.value);
      alert('Contact deleted successfully!');
      closeDeleteModal();
    };

    return {
      searchQuery,
      contacts,
      sortedContacts,
      showDeleteModal,
      openDeleteModal,
      closeDeleteModal,
      deleteContact,
    };
  },
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
  padding: 5px;
  width: 80%;
}
.deleteBut {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-bottom: 10px;
}
.deleteBut:hover {
  background-color: #c0392b;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #2fd5b6 !important;
  border-radius: 5px;
}
li {
  margin: 5px 0;
}
.description {
  font-size: 0.9rem;
  color: gray;
  margin: 5px 0 0 15px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}
.modal h2 {
  margin-bottom: 15px;
}
.modal ul {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}
.modal li {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #e74c3c;
  color: white;
  cursor: pointer;
}
.modal button:hover {
  background-color: #c0392b;
}
</style>
