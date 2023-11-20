import Cookies from "js-cookie";
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$toast.success('Logged out ^-^ ')
      Cookies.remove("token");
      this.$router.push("/sign/in");
    }
  }
}