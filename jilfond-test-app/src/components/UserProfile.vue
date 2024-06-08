<template>
    <div v-if="employee" class="user-profile">
      <div class="user-profile-img">
        <img src="../assets/images/dummy.png" alt="{{ employee.name }}">
      </div>
      <div class="user-profile-text">
        <h2>{{ employee.name }}</h2>
        <p><b>email:</b> {{ employee.email }}</p>
        <p><b>phone:</b> {{ employee.phone }}</p>
        <h3>О себе</h3>
        <div class="user-profile-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    <div v-else class="user-profile-placeholder">
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
  
  <style scoped lang="scss">
    @import '../assets/styles/variables.scss';

    .user-profile{
      display: flex;
      justify-content: space-between;
      align-items: stretch;

      &-img{
        width: 45%;

        & img{
          width: 100%;
          border: 1px solid $details-color;
        }
      }
      &-text{
        width: 47%;

        h2, h3{
          font-size: 16px;
          font-weight: 600;
          color: $headers-color;
        }

        h3{
          margin: 20px 0 25px 0;
        }

        p{
          margin-top: 10px;

          b{
            font-weight: 600;
          }
        }
      }
    }
    .user-profile-placeholder{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
  