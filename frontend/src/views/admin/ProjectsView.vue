<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
import { reactive } from 'vue';
import { ref } from 'vue';
import useAccount from '@/components/composables/account';

const { createProject } = useAccount();

onMounted(()=>{
    initFlowbite();
});

const projectForm = reactive({
    img: "",
    title: "",
    description: "",
    language: "",
    role: "",
    link: ""
});

const projectIMG = ref(null);

const convertToBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};


const fileHandler = async(event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
    try {
        const base64Data = await convertToBase64(selectedFile);
        projectIMG.value = base64Data;
        projectForm.img = projectIMG;

    }   catch (error) {
        console.error("Error converting image to Base64:", error);
    }
  }
}


</script>

<template>
<div class="flex flex-col space-y-6">
  <div class="flex space-x-3 justify-end">
        <button class="flex items-center space-x-2 bg-neutral-700 pb-1 pt-1 pl-3 pr-3 rounded-sm">
            <p class="text-white">Screen Options</p>
            <svg fill="white" height="10" width="10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96.154 96.154" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61 c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056 c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"></path> </g> </g></svg>
        </button>
        <button class="flex items-center space-x-2 bg-neutral-700 pb-1 pt-1 pl-3 pr-3 rounded-sm">
            <p class="text-white">Help</p>
            <svg fill="white" height="10" width="10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96.154 96.154" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61 c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056 c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"></path> </g> </g></svg>
        </button>
    </div>
    <p class="items-center text-gray-200 font-semibold text-2xl">My Projects</p>
    <hr class="h-1/2 bg-green-400">
    <div class="main py-6 px-8 items-center flex space-x-20 w-2/3">
    <button data-modal-target="project-modal" data-modal-toggle="project-modal" class="py-2 px-6 bg-neutral-800 text-white rounded-md hover:bg-green-700 shadow border hover:border-green-700 border-gray-600">Add New Project</button>

    <!-- Project modal -->
                <div id="project-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-lg max-h-full">
                        <!-- Modal content -->
                        <div class="relative rounded-lg shadow dark:bg-gray-700 bg-neutral-800">
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-neutral-600 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="project-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-white dark:text-white">Create new project</h3>
                                <form class="space-y-6" @submit.prevent="createProject(projectForm)">
                                    <div class="space-y-2 group">
                                            <label for="firstname" class="mb-2 text-sm font-medium text-white dark:text-white ">User Interface</label>
                                            <input type="file" @change="fileHandler" class="text-white flex w-2/3 bg-green-700 border border-gray-600 border-1 group-hover:bg-green-600"/>
                                    </div>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Project Title</label>
                                            <input v-model="projectForm.title" type="text" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-gray-400  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title of your project">
                                        </div>
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Github Link</label>
                                            <input v-model="projectForm.link" type="text" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-gray-400  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Project Link">
                                        </div>
                                    </div>
                                    <div>
                                        <label for="Description" class="block mb-2 text-sm font-medium text-white dark:text-white">Description</label>
                                        <textarea v-model="projectForm.description" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-gray-400  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"></textarea>
                                    </div>
                                     <div class="grid grid-cols-2 gap-3">
                                        <div class="flex flex-col">
                                            <label for="GithubLink" class="mb-2 text-sm font-medium text-white dark:text-white">Language Used</label>
                                            <input v-model="projectForm.language" type="text" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-gray-400  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Language Used">
                                        </div>
                                        <div class="flex flex-col">                                
                                        <label for="countries" class="mb-2 text-sm font-medium text-white dark:text-white">Role</label>
                                        <select v-model="projectForm.role" id="countries" class="text-white bg-neutral-600 rounded-lg">
                                        <option class="hover:bg-green-700" value="Author">Author</option>
                                        <option class="hover:bg-green-700" value="Colaborator">Collaborator</option>
                                        </select>
                                        </div>
                                    </div>
                                    <button type="submit" class="w-full text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create Project</button>
                                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Having problems? <a href="#" class="text-green-400 hover:underline dark:text-green-500">Contact Admin?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
    </div>
</div>
</template>