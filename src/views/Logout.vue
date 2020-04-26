<script>
export default {
  name: 'Logout',
  methods: {
    logout() {
      localStorage.removeItem('toke');
      localStorage.removeItem('id');
      this.$router.push('/login');
    },
  },
  created() {
    this.logout();
  },
};
</script>
