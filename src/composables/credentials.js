import { computed, ref } from '@vue/composition-api';

export function makeCredentialsProps() {
  return {
    type: String,
  };
}

export function useCredentials(name) {
  const username = ref();
  const password = ref();

  const isValid = computed(() => {
    return name;
  });

  const resetPassword = () => {
    return password.value = 'qwerty';
  };

  return {
    username,
    password,
    isValid,
    resetPassword,
  };
}
