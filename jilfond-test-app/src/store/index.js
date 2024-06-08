import { createStore } from 'vuex';

export default createStore({
  state: {
    searchQuery: '',
    employees: [],
    selectedEmployee: null,
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setEmployees(state, employees) {
      state.employees = employees;
    },
    setSelectedEmployee(state, employee) {
      state.selectedEmployee = employee;
    },
    clearSelectedEmployee(state) {
      state.selectedEmployee = null;
    },
  },
  actions: {
    async fetchEmployees({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      commit('setEmployees', data);
    },
    updateSearchQuery({ commit, state }, query) {
      commit('setSearchQuery', query);

      // Clear selected employee if they are not in the filtered results
      const queries = query.toLowerCase().split(',').map(q => q.trim()).filter(q => q.length > 0);
      if (!queries.some(q => state.selectedEmployee && 
                              (state.selectedEmployee.id.toString().includes(q) ||
                               state.selectedEmployee.name.toLowerCase().includes(q)))) {
        commit('clearSelectedEmployee');
      }
    },
    selectEmployee({ commit }, employee) {
      commit('setSelectedEmployee', employee);
    },
  },
  getters: {
    filteredEmployees(state) {
      if (state.searchQuery === '') {
        return [];
      }

      const queries = state.searchQuery.toLowerCase().split(',')
                            .map(q => q.trim())
                            .filter(q => q.length > 0);

      if (queries.length === 0) {
        return [];
      }

      return state.employees.filter(employee => {
        return queries.some(query => 
          employee.id.toString().includes(query) ||
          employee.name.toLowerCase().includes(query)
        );
      });
    },
  },
});
