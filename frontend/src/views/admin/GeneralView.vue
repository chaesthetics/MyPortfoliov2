<script setup>
import useAccount from '@/components/composables/account';
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const { user, getUser } = useAccount();

onMounted(()=>{
    getUser();
    initFlowbite();
});

const viewSite = () => {
    router.push({name: "home"});
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
    <p class="items-center text-gray-200 font-semibold text-2xl">General Information</p>
    <hr class="h-1/2 bg-green-400">
    <div class="main py-6 px-8  items-center flex justify-around space-x-20 w-2/3">
        <img class="h-[160px] w-[160px] rounded-full" src="https://jira.atlassian.com/secure/projectavatar?pid=18514&avatarId=106292">
        <div class="space-y-4">
            <div class="flex space-x-3 items-center">
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="py-2 px-6 bg-neutral-800 text-white rounded-md hover:bg-green-700 shadow border hover:border-green-700 border-gray-600">Edit profile</button>
                <button @click="viewSite" class="py-2 px-6 bg-neutral-800 text-white rounded-md hover:bg-green-700 shadow border hover:border-green-700 border-gray-600">View Site</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings text-neutral-400"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>

                <!-- Main modal -->
                <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-lg max-h-full">
                        <!-- Modal content -->
                        <div class="relative rounded-lg shadow dark:bg-gray-700 bg-neutral-800">
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-neutral-600 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-white dark:text-white">Update General Info</h3>
                                <form class="space-y-6" action="#">
                                    <div class="grid grid-cols-2 gap-3">
                                        <div>
                                            <label for="email" class="mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-white  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                                        </div>
                                        <div>
                                            <label for="email" class="mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-white  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-white  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                                    </div>
                                     <div class="grid grid-cols-2 gap-3">
                                        <div>
                                            <label for="email" class="mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-white  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                                        </div>
                                        <div>
                                            <label for="email" class="mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-white  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Description</label>
                                        <textarea  name="email" id="email" class="text-white bg-neutral-600  text-sm rounded-lg placeholder-white  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"></textarea>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800">
                                            </div>
                                            <label for="remember" class="ml-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
                                        </div>
                                        <a href="#" class="text-sm text-green-400 hover:underline dark:text-green-500">Lost Password?</a>
                                    </div>
                                    <button type="submit" class="w-full text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered? <a href="#" class="text-green-400 hover:underline dark:text-green-500">Add account?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 


            </div>
            <div>
                <p class="text-white font-semibold text-lg">{{ user.firstname }} {{ user.lastname }}</p>
                <div class="flex items-center space-x-2">
                    <svg style="color: white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="18" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 " clip-rule="nonzero" fill="white"></path></clipPath></defs><g clip-path="url(#id1)"><path fill="white" d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 " fill-opacity="1" fill-rule="nonzero"></path></g></svg>
                    <p class="text-green-400 text-sm">{{ user.email }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="">
    <div class="main py-6 px-8 items-center flex space-x-3 w-2/3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>
        <p class="text-white">{{ user.githublink }}</p>
    </div>
    <div class="main px-6 items-center flex space-x-3 w-2/3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg>
        <p class="text-white">{{ user.contactlink }}</p>
    </div>
    </div>
</div>
</template>