<template>
  <div id="app">
    <div class="wrapper">
      <Header/>
      <main>
        <aside>
          <SearchInput :searchQuery="searchQuery" @update:searchQuery="updateSearchQuery" />
          <SearchResults :employees="filteredEmployees" @select-employee="selectEmployee" />
        </aside>
        
        <section class="user-info">
          <UserProfile :employee="selectedEmployee" />
        </section>
      </main>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Header from './components/Header.vue';
import SearchInput from './components/SearchInput.vue';
import SearchResults from './components/SearchResults.vue';
import UserProfile from './components/UserProfile.vue';

export default {
  name: 'App',
  components: {
    Header,
    SearchInput,
    SearchResults,
    SearchResults,
    UserProfile,
  },
  computed: {
    ...mapState(['searchQuery', 'selectedEmployee']),
    ...mapGetters(['filteredEmployees']),
  },
  methods: {
    ...mapActions(['fetchEmployees', 'updateSearchQuery', 'selectEmployee']),
  },
  mounted() {
    this.fetchEmployees();
  },
};
</script>