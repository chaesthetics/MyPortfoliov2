<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
import { reactive } from 'vue';
import { ref } from 'vue';
import { useRouter } from "vue-router";

import useAccount from '@/components/composables/account';

const { createProject, getProjects, projects, deleteProject } = useAccount();
const router = useRouter();

onMounted(()=>{
    initFlowbite();
    getProjects();
    console.log("Projects: ", projects);
});

const projectForm = reactive({
    img: "",
    title: "",
    description: "",
    language: "",
    role: "Author",
    link: "",
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
    const selectedFile =  event.target.files[0];
    if (selectedFile) {
    try {
        const base64Data = await convertToBase64(selectedFile);
        projectForm.img = base64Data;
        console.log(projectForm.img);
    }   catch (error) {
        console.error("Error converting image to Base64:", error);
    }
  }
}



const submitHandler = async() => {
    await createProject(projectForm);
}

const gotoEditProj = (projectId) => {
    router.push({path: `/admin/projects/${projectId}`});
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
    <div class="main px-8 items-center flex space-x-20 w-2/3">

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
                                <form class="space-y-6"  @submit.prevent="submitHandler()">
                                    <div class="space-y-2 group">
                                            <label for="firstname" class="mb-2 text-sm font-medium text-white dark:text-white ">User Interface</label>
                                            <input type="file" @change="fileHandler" class="flex text-white text-xs cursor-pointer w-2/3 bg-neutral-700 border border-gray-600 border-1 group-hover:bg-neutral-600"/>
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
                                        <select v-model="projectForm.role" placeholder="Select Role" id="countries" class="text-white bg-neutral-600 rounded-lg">
                                        <option class="hover:bg-green-700" value="Author">Author</option>
                                        <option class="hover:bg-green-700" value="Collaborator">Collaborator</option>
                                        </select>
                                        </div>
                                    </div>
                                    <button type="submit" data-modal-hide="project-modal" class="w-full text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create Project</button>
                                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Having problems? <a href="#" class="text-green-400 dark:text-green-500">Contact Admin?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg pb-4">
    <div class="flex items-center justify-between pb-4">
        <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="flex items-center py-2 px-6 bg-neutral-800 text-white rounded-md hover:bg-green-700 shadow border hover:border-green-700 border-gray-600" type="button">
                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" fill="white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                    </svg>
                Last 30 days
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownRadio" class="z-10 hidden w-48 bg-neutral-800 divide-y divide-white rounded-lg" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                <ul class="p-3 space-y-1 text-sm text-white" aria-labelledby="dropdownRadioButton">
                    <li>
                        <div class="flex items-center p-2 text-white rounded hover:bg-neutral-700">
                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-white rounded dark:text-gray-300">Last day</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 text-white rounded hover:bg-neutral-700">
                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-2" class="w-full ml-2 text-sm font-medium text-white rounded dark:text-gray-300">Last 7 days</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 text-white rounded hover:bg-neutral-700">
                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-white rounded dark:text-gray-300">Last 30 days</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 text-white rounded hover:bg-neutral-700">
                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-4" class="w-full ml-2 text-sm font-medium text-white rounded dark:text-gray-300">Last month</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 text-white rounded hover:bg-neutral-700">
                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-5" class="w-full ml-2 text-sm font-medium text-white rounded dark:text-gray-300">Last year</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
             <button data-modal-target="project-modal" data-modal-toggle="project-modal" class="py-2 px-6 bg-neutral-800 text-white rounded-md hover:bg-green-700 shadow border hover:border-green-700 border-gray-600">Add Project</button>
        </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400  max-w-full">
        <thead class="text-xs bg-neutral-800 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    User Interface
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Language
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                <th scope="col" class="px-6 py-3">
                    Git Repository
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody class="divide-y divide-neutral-600">
            <tr v-for="project in projects" :key="project.id" class="bg-neutral-700 items-center hover:bg-neutral-800 transition delay-900 w-full">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    <img class="w-24 h-15 border border-gray-500" :src="project.img"/>
                </th>
                <td class="text-white font-medium px-6 py-4">
                    {{ project.title }}
                </td>
                <td class="text-gray-200 px-6 py-4">
                    {{ project.language }}
                </td>
                <td class="px-6 py-4">
                    <p v-if="project.role === 'Author'" class="text-white py-1 px-2 rounded-lg text-xs text-center bg-sky-600">
                        {{ project.role }}
                    </p>
                    <p v-else class="text-white py-1 px-2 rounded-lg text-xs text-center bg-gray-600">
                        {{ project.role }}
                    </p>
                </td>
                <td class="text-gray-200 px-6 py-4 max-w-[180px] overflow-hidden text-ellipsis">
                    {{ project.link }}
                </td>
                <div class="flex items-center">
                <td class="flex px-6 space-x-2 py-4 items-center mt-1/2">
                    <button @click="gotoEditProj(project.id)" class="font-semibold text-white bg-green-700 px-4 py-2 rounded-sm border-none hover:bg-green-600">Edit</button>
                    <button @click="deleteProject(project.id)" class="font-semibold text-white bg-red-800 px-4 py-2 rounded-sm border-none hover:bg-red-700">Delete</button>
                </td>
                </div>
            </tr>
        </tbody>
    </table>
</div>

</div>
</template>