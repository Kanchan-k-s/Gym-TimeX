import Cookies from "js-cookie";
export default {
  methods: {
    logout() {
      localStorage.clear();
      Cookies.remove("token");
      this.$router.push("/");
    }
  }
}