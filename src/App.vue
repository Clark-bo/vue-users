<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

interface User {
  email: string;
  forename: string;
  surname: string;
  gender: string;
}

const users = ref<User[]>([
  { email: 'adrian12@pemex.com', forename: 'Adrián', surname: 'Aviles', gender: 'Male' },
  { email: 'alejandro22@pemex.com', forename: 'Alejandro', surname: 'Rico', gender: 'Male' },
]);

const formData = reactive<User>({
  email: '',
  forename: '',
  surname: '',
  gender: '',
});

const searchText = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user =>
    user.email.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

function submitForm() {
  if (formData.email && formData.forename && formData.surname && formData.gender) {
    const existingUserIndex = users.value.findIndex(user => user.email === formData.email);
    if (existingUserIndex !== -1) {
      // Update existing user
      users.value[existingUserIndex] = { ...formData };
    } else {
      // Add new user
      users.value.push({ ...formData });
    }
    clearForm();
  }
}

function editUser(user: User) {
  formData.email = user.email;
  formData.forename = user.forename;
  formData.surname = user.surname;
  formData.gender = user.gender;
}

function deleteUser(user: User) {
  const index = users.value.findIndex(u => u.email === user.email);
  if (index !== -1) {
    users.value.splice(index, 1);
  }
}

function clearForm() {
  formData.email = '';
  formData.forename = '';
  formData.surname = '';
  formData.gender = '';
}
</script>

<template>
  <div class="container">
    <h1>Form:</h1>
    <form @submit.prevent="submitForm" class="mb-3">
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input id="email" type="email" v-model="formData.email" required class="form-control">
      </div>
      <div class="mb-3">
        <label for="forename" class="form-label">Forename:</label>
        <input id="forename" type="text" v-model="formData.forename" required class="form-control">
      </div>
      <div class="mb-3">
        <label for="surname" class="form-label">Surname:</label>
        <input id="surname" type="text" v-model="formData.surname" required class="form-control">
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Gender:</label>
        <select id="gender" v-model="formData.gender" required class="form-select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Add/Edit User</button>
    </form>

    <table class="table">
      <thead>
        <h2>Users:</h2>
        <tr>
          <th>Email</th>
          <th>Forename</th>
          <th>Surname</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.email">
          <td>{{ user.email }}</td>
          <td>{{ user.forename }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.gender }}</td>
          <td>
            <button @click="editUser(user)" class="btn btn-sm btn-primary">Edit</button>
            <button @click="deleteUser(user)" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
        <th>
        <h2>Search:</h2>
          <input type="text" v-model="searchText" placeholder="Type the text here..." class="form-control">
      </th>
      </tbody>
    </table>
  </div>
</template>

<style>
  @import 'bootstrap/dist/css/bootstrap.css';
</style>