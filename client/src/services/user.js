import api from "./api";

export default {
    register(body){
        return api.post("http://localhost:3000/user/register",body);
    },
    login(body){
        return api.post("http://localhost:3000/user/login",body);
    }
    

}