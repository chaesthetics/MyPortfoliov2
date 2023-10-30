import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/auth/";

export default function useAccount(){
    const user = ref([]);
    const errors = ref({});
    const router = useRouter();
    const projects = ref([]);
    const activeProject = ref([]);

    const login = async (data) => {
        try{
            const response = await axios.post("login", data);
            localStorage.setItem("token", response.data.token);
            await router.push({name: "dashboard"});
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
            router.push({name: "dashboard"});
        }
    }

    const getUser = async () => {
        const response = await axios.get("user/1");
        user.value = response.data;
    }

    const updateUser = async(id) => {
        try{
            await axios.post("/update/"+id, user.value);
            getUser();
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateAvatar = async(data, id) => {
        try{
            await axios.post("changeAvatar/"+id, data);
            getUser();
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const createProject = async(data) => {
        try{
            await axios.post("createproject", data);
        }catch(error){
            if(error.response.status === 422){
                error.value = error.reponse.data.errors;
            }
        }finally{
            getProjects();
        }
    }

    const getProjects = async() => {
        try{
            const response = await axios.get("projects");
            projects.value = response.data;
        }catch(error){
            if(error.response.status === 422){
                error.value = error.response.data.errors;  
            }
        } 
    }

    const getProject = async(id) => {
        try{
            const response = await axios.get("project/"+id);
            activeProject.value = response.data;
        }catch(error){
            if(error.response.status === 422){
                error.value = error.response.data.error;
            }
        }
    }

    const updateProject = async(id) => {
        try{
            await axios.post("project/update"+id, activeProject.value);
        }catch(error){
            if(error.response.status === 422){
                error.value = error.response.data.error;
            }
        }
    }
 
    return{
        errors,
        user,
        login,
        getToken,
        logout,
        getUser,
        updateUser,
        updateAvatar,
        createProject,
        getProjects,
        projects,
        getProject,
        activeProject,
        updateProject,
    }   
}