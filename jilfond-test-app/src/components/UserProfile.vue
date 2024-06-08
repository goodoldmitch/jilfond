<template>
    <div v-if="employee" class="user-profile">
      <div class="user-profile-img">
        <img src="../assets/images/dummy.png" alt="{{ employee.name }}">
      </div>
      <div class="user-profile-text">
        <h2>{{ employee.name }}</h2>
        <p><strong>Phone:</strong> {{ employee.phone }}</p>
        <p><strong>Email:</strong> {{ employee.email }}</p>
      </div>
    </div>
    <div v-else>
      <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    props: {
      employee: {
        type: Object,
        default: null,
      },
    },
  };
  </script>
  
  <style>
  .user-profile {
    border: 1px solid #ccc;
    padding: 16px;
    margin-top: 16px;
  }
  </style>
  