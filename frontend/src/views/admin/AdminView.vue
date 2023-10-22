<script setup>
import useAccount from '@/components/composables/account';
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
const { getToken, user, logout, getUser } = useAccount();
onMounted(()=>{
    getToken();  
    getUser();
    initFlowbite();
});
</script>

<template>
    <div class="flex w-11/12 ml-auto mr-auto justify-between pt-1">
        <div class="flex items-center space-x-10">
            <div class="flex items-center">
                <svg class="transition ease-in-out group-hover:-translate-y-1 group-hover:scale-120 duration-300" height="35px" width="35px"  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 221" id="vue"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"></path><path fill="#41B883" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"></path><path fill="#35495E" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"></path></svg>
                <p class="mb-[5px] text-xl font-bold text-gray-300">Vue JS</p>
            </div>
            <div class="flex space-x-5">
                <div class="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-chat-left" viewBox="0 0 16 16"> <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/> </svg>
                <p class="text-gray-200 font-bold text-md mb-[3px]">0</p>
                </div>
                <div class="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-plus-square-fill" viewBox="0 0 16 16"> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/> </svg>
                <p class="text-gray-100 font-semibold text-sm mb-[3px] ">New</p>
                </div>
            </div>
            <form class="">   
                <div class="relative bg-neutral-800 rounded-lg">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-lg">
                        <svg class="w-4 h-4 text-gray-300 dark:text-gray-400 bg-neutral-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="placeholder-gray-400 block w-full p-2 pl-10 text-sm text-gray-400 rounded-lg bg-neutral-800 border-none"  placeholder="Search">
                </div>
            </form>
        </div>
        
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="group group-hover:text-green-700 flex items-center space-x-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-blue-800" type="button">
            <p class="text-sm text-gray-200">{{ user.firstname }}</p>
            <img class="h-10 w-10 rounded-lg" src="https://jira.atlassian.com/secure/projectavatar?pid=18514&avatarId=106292">
        </button>

        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-neutral-800 divide-y divide-white rounded-lg shadow w-44">
            <ul class="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-800 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-800 dark:hover:text-white">Settings</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-800 dark:hover:text-white">Earnings</a>
            </li>
            <li @click.prevent="logout">
                <a href="#" class="block px-4 py-2 hover:bg-green-700 dark:hover:bg-green-800 dark:hover:text-white">Sign out</a>
            </li>
            </ul>
        </div>

    </div>
    <div class="flex">
        <aside class="sidebar sticky w-60 h-auto top-0 space-y-3 mt-2">
            <RouterLink to="/admin/dashboard" class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer
            hover:bg-green-700 hover:text-white text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/> <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/> </svg>
            <span class="text-[15px] ml-4 font-semibold">Dashboard</span>
            </RouterLink>

            <RouterLink to="/admin/personal" class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer
            hover:bg-green-700 hover:text-white text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16"> <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/> </svg>
            <span class="text-[15px] ml-4 font-semibold">General Information</span>
            </RouterLink>
            
            <RouterLink to="/admin/abouts" class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer
            hover:bg-green-700 hover:text-white text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/> </svg>
            <span class="text-[15px] ml-4 font-semibold">About Card</span>
            </RouterLink>

            <RouterLink to="/admin/techstacks" class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer
            hover:bg-green-700 hover:text-white text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16"> <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/> </svg>
            <span class="text-[15px] ml-4 font-semibold">Tech Stack</span>
            </RouterLink>

            <RouterLink to="/admin/tools" class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer
            hover:bg-green-700 hover:text-white text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-nintendo-switch" viewBox="0 0 16 16"> <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.136 4.136 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979Zm4.675.269a1.621 1.621 0 0 0-1.113-1.034 1.609 1.609 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.632 1.632 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053ZM3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256Z"/> <path d="M3.425.053a4.136 4.136 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.845 2.845 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"/> </svg>
            <span class="text-[15px] ml-4 font-semibold">Tools</span>
            </RouterLink>

            <RouterLink to="/admin/projects" class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer
            hover:bg-green-700 hover:text-white text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16"> <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/> </svg>
            <span class="text-[15px] ml-4 font-semibold">Projects</span>
            </RouterLink>

            <RouterLink to="/admin/contacts" class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer
            hover:bg-green-700 hover:text-white text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg>
            <span class="text-[15px] ml-4 font-semibold">Contacts</span>
            </RouterLink>

            <RouterLink to="/admin/account" class="p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer
            hover:bg-green-700 hover:text-white text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            <span class="text-[15px] ml-4 font-semibold">Account Setting</span>
            </RouterLink>

        </aside>
        <div class="w-9/12 h-full mr-auto ml-auto">
            <RouterView />
        </div>
    </div>
</template>