import { ref } from "vue";
import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export default function useProfile(){
    const profile = ref([]);
    const errors = ref({});

    const getProfile = async () => {
        const response = await axios.get("home/1");
        profile.value = response.data;
        console.log(profile.value);
    }
    return{
        profile,
        getProfile,
        errors,
    }
}