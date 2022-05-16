<template>
  <table
    v-if="isValid"
    class="table"
  >
    <tr>
      <th>User</th>
      <th>Type</th>
      <th>Username</th>
      <th>Password</th>
      <th>Salary</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>{{ name }}</td>
      <td>{{ type }}</td>
      <td>{{ username }}</td>
      <td>{{ password }}</td>
      <td>
        <currency-input
          v-model="salary"
          class="input is-small"
        />
      </td>
      <td>
        <button
          @click="resetPassword"
          class="button is-small"
        >
          Reset password
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import Credentials from '@/mixins/credentials';
import { CurrencyInput } from 'vue-currency-input';

export default {
  name: 'User',
  components: {
    CurrencyInput,
  },
  mixins: [
    Credentials,
  ],
  props: {
    givenName: String,
    familyName: String,
  },
  data() {
    return {
      salary: 5000,
    };
  },
  computed: {
    name() {
      return `${this.givenName} ${this.familyName}`;
    },
  },
  watch: {
    password() {
      console.warn('Password is set: ', this.password);
    },
  },
  mounted() {
    this.login();
  },
  methods: {
    login() {
      this.username = 'Bigbank';
      this.password = 'bigbank';
    },
  },
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
</style>
