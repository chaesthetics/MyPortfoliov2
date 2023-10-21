import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/auth/";

export default function useAccount(){
    const user = ref([]);
    const errors = ref({});
    const router = useRouter();

    const login = async (data) => {
        try{
            const response = await axios.post("login", data);
            localStorage.setItem("token", response.data.token);
            await router.push({name: "admin"});
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const logout = async () => {
        localStorage.removeItem("token");
        router.push({name: "login"});
    }
   
    const getToken = async () => {
        const token = localStorage.getItem("token");
        if(!token){
            router.push({name: "login"});
        }else{
            router.push({name: "admin"});
        }
    }
 
    return{
        errors,
        user,
        login,
        getToken,
        logout
    }   
}