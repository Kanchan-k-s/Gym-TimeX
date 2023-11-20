import api from "./api";

export default {
    register(body) {
        return api.post("http://localhost:3000/user/register", body);
    },
    login(body) {
        return api.post("http://localhost:3000/user/login", body);
    },
    getUserInfo() {
        return api.get("http://localhost:3000/user/info/");
    },
    updateUser(body) {
        return api.post("http://localhost:3000/user/info/update", body)
    },
    changePassword(body) {
        return api.post("http://localhost:3000/user/password/update", body)
    }

}