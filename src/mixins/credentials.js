export default {
  props: {
    type: String,
  },
  data() {
    return {
      username: String,
      password: String,
    };
  },
  computed: {
    isValid() {
      return this.name;
    },
  },
  methods: {
    resetPassword() {
      return this.password = 'qwerty';
    },
  },
};
