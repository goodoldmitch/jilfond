<template>
  <div class="search-result">
    <h3>Результаты</h3>

    <div class="search-result-items" v-if="employees.length">
      <div class="search-result-item" v-for="employee in employees" :key="employee.id" @click="selectEmployee(employee)" :class="{ active: employee.id === selectedEmployeeId }">
        <div class="search-result-item-img">
          <img src="../assets/images/dummy.png" alt="{{ employee.name }}">
        </div>
        <div class="search-result-item-text">
          <p><b> {{ employee.name }}</b></p>
          <p>{{ employee.email }}</p>
        </div>
      </div>
    </div>
    <p class="search-result-no-item" v-else>ничего не найдено</p>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    employees: Array,
    selectedEmployeeId: Number,
  },
  methods: {
    selectEmployee(employee) {
      this.$emit('select-employee', employee);
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/variables.scss';

  .search-result{
    h3{
      color: $headers-color;
      font-size: 16px;
      font-weight: 600;
    }
    .search-result-no-item{
      margin-top: 10px;
    }

    &-item{
      display: flex;
      align-items: center;
      margin-top: 18px;
      box-shadow: 0 0 10px $shadow-color;
      @include border-radius(10px);

      &-img{
        width: 70px;

        & img{
          width: 100%;
        }
      }

      &-text{
        width: calc(100% - 70px);
        padding: 15px;
        overflow-x: auto;
        border-left: 1px solid $details-color;

        & p{
            margin-bottom: 5px;
            
          & b{
            font-weight: 600;
            color: $headers-color;
          }
        }
      }
      
      &:hover, &.active{
        cursor: pointer;
        
        .search-result-item-text{
          background-color: $details-color;
        }
      }
    }

    @media screen and (max-width: 992px) {
      &-items{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      &-item{
        width: 48%;
      }
    }

    @media screen and (max-width: 768px) {
      &-item{
        width: 100%;
      }
    }
  }
</style>
