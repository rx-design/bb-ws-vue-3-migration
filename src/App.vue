<template>
  <user
    given-name="Roger"
    family-name="Federer"
    type="registered"
  />
</template>

<script>
import User from '@/components/User.vue';

export default {
  name: 'App',
  components: {
    User,
  },
};
</script>
