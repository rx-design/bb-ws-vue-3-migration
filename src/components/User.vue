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
          :options="{ currency: 'EUR' }"
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
import { computed, onMounted, ref, watch } from '@vue/composition-api';
import { makeCredentialsProps, useCredentials } from '@/composables/credentials';
import CurrencyInput from '@/components/CurrencyInput.vue';

export default {
  name: 'User',
  components: {
    CurrencyInput,
  },
  props: {
    ...makeCredentialsProps(),
    givenName: String,
    familyName: String,
  },
  setup(props) {
    const salary = ref(5000);

    const name = computed(() => {
      return `${props.givenName} ${props.familyName}`;
    });

    const {
      username,
      password,
      isValid,
      resetPassword,
    } = useCredentials(name.value);

    const login = () => {
      username.value = 'Bigbank';
      password.value = 'bigbank';
    }

    watch(password, () => {
      console.warn('Password is set: ', password.value);
    });

    onMounted(() => {
      login();
    });

    return {
      username,
      password,
      salary,
      isValid,
      name,
      resetPassword,
    };
  },
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
</style>
