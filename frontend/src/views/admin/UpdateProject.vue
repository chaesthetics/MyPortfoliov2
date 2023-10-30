<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from "vue-router";
import useAccount from "@/components/composables/account";
import { ref } from "vue"; 
const { getProject, activeProject, updateProject } = useAccount();

const route = useRoute();
const router = useRouter();

onMounted(()=>{
    console.log(route.params.id);
    getProject(route.params.id);
});

const projectIMG = ref(null);
const url = ref('');

const convertToBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};


const handleFileUpload = async(event) => {

    const selectedFile = event.target.files[0];
    url.value = URL.createObjectURL(selectedFile);
    document.getElementById("displayIMG").src = url.value;

    if (selectedFile) {
    try {
        const base64Data = await convertToBase64(selectedFile);
        projectIMG.value = base64Data;
        activeProject.img = projectIMG;
    }   catch (error) {
        console.error("Error converting image to Base64:", error);
    }
  } 
}

const submitHandler = async() => {
    try{
        await updateProject(route.params.id);
        router.push({name: "projects"});
    }catch(error){
        console.log(error);
    }
}

</script>

<template>
<div class="w-full">
    <!-- component -->
<div class="bg-neutral-800 w-full">
    <div class="bg-gradient-to-b from-green-800 to-green-600 h-96"></div>
    <div class="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 mb-5 pb-2">
        <div class="bg-neutral-900 shadow rounded p-8 sm:p-12 -mt-72 mb-20" style="border-radius:20px 60px;">
            <p class="text-2xl font-bold leading-7 text-center text-white">Update Project</p>
            <form action=""  @submit.prevent="submitHandler()" method="post">
                <div class="md:flex items-center mt-6 items-center justify-center">
                    <div class="flex relative justify-center items-center mt-6 group">
                        <img class="w-[400px] h-[200px] border border-gray-500 group-hover:opacity-20" :src="activeProject.img" id="displayIMG">
                        <input @change="handleFileUpload" type="file" id="avatar" name="projectIMG" class="absolute top-1/2 w-[160px] opacity-0 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-card-image absolute top-1/2 w-[160px] opacity-0 group-hover:opacity-100" viewBox="0 0 16 16"> <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/> </svg>
                    </div>
                </div>
                <div class="md:flex items-center mt-6">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-neutral-300">Title</label>
                        <input v-model="activeProject.title" type="text" class="leading-none text-neutral-50 p-3 focus:outline-none focus:border-green-700 mt-4 border-0 bg-neutral-800 rounded" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none text-neutral-300">Git Repo</label>
                        <input v-model="activeProject.link" type="text" class="leading-none text-neutral-50 p-3 focus:outline-none focus:border-green-700 mt-4 border-0 bg-neutral-800 rounded"/>
                    </div>
                </div>
                <div class="md:flex items-center mt-6">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-neutral-300">Language Used</label>
                        <input v-model="activeProject.language" type="text" class="leading-none text-neutral-50 p-3 focus:outline-none focus:border-green-700 mt-4 border-0 bg-neutral-800 rounded" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none text-neutral-300">Role</label>
                        <select  placeholder="Select Role" v-model="activeProject.role" class="leading-none text-neutral-50 p-3 focus:outline-none focus:border-green-700 mt-4 border-0 bg-neutral-800 rounded">
                            <option class="hover:bg-green-700" value="Author">Author</option>
                            <option class="hover:bg-green-700" value="Collaborator">Collaborator</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-neutral-300">Description</label>
                        <textarea v-model="activeProject.description" type="text" class="h-20 text-base leading-none text-neutral-50 p-3 focus:outline-none focus:border-green-700 mt-4 bg-neutral-800 border-0 rounded"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">
                        Update Project
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</template>