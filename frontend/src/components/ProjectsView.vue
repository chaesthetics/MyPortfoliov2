<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
import { ref } from 'vue';

var onView = ref(0);

onMounted(() => {
    initFlowbite();
});



const getId = (event) => {
    onView.value = event.currentTarget.id;
}

const projects = [
    {
        title: 'Personal Website',
        description: 'My Portfolio, I created this website to enhance my skills in VueJS 3 and to display my profile.',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4RCDJK9MrLF40HApTbIFtAw5lI5dyr2W876M9lAIzjsO1OB36PKGijLaBQk6mwFyuU3ZfpAOIMVgBqin5rEfsNVfTz_zfdYgU4-hcSyIUmrt2aac5T2l_biaOaj-zoA1QYg7NC52CTrBf8Rddc0-7L9bZvTh5XIV7xX5u47QuaGcRovJP6aPQxvVK8S_y/w642-h343/portfolio.png',
        language: 'VueJS 3, Tailwind',
        role: 'Author',
        link: 'https://github.com/chaesthetics/Portfolio',
    },
    {
        title: 'Instagram Clone',
        description: 'My version of Instagram, I created this website when I studying laravel 10 with proper Validations, and Authentication.',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlsEwmqAUomhZ4a_-99sXdP2mj3A3IluuG5WbgunradWKSn6Mh8MgWwIZHM-e6dRY2T1IVUIiP2yutPMRKPlABcHbv9SU2OuIX7ifZUoUuhPBISQ8vp1O_8LVqIBk7_aZUuhrjPzaqzb7A_umYEm7DUUth2N_DTbQ5rT7pTtB4ZQSscFatfygBsPMuXy-v/w641-h329/instagram.png',
        language: 'Blade, Laravel 10, Tailwind',
        role: 'Author',
        link: 'https://github.com/chaesthetics/Instagram',
    },
    {
        title: 'CRM',
        description: 'Customer Relationship Management, System that manages the interaction with customer and potential customers.',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCm77ejWFmu280lIRRK-UVOtAB6s4AWV-MtgNfxQqzdMwR_TaiK6LOGlsFySSypgJSxlybbbFoiT_UflEOxgXyqReWJF1C_EIe9s4WIINVJiqGqUuKB1AXXbSor-R7eFEx-eoRRfHTEk3CKkAQhJoXPEZippiahK4JiOUcgzjiXkXpJ8XfdcDndo78kEKG/w679-h348/crm.png',
        language: 'NextJS, Laravel 8, Tailwind',
        role: 'Collaborator',
        link: 'https://github.com/deeveraEnchongOfficial/crm',
    },
    {
        title: 'Weather App',
        description: 'Weather App, app provides detailed local forecast & weather forecast world wide using RapidAPI.',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6f4_i2PbA-60IFKvu-jTDeYAt1R8KGclU0Nws1BSpLD-wqWBs54k_jQxvcPB1gU-NhKvB_HC6sqEGOq2IQ4Jynlk3E9nN22CvEZ6gWbm8WROkvx7ipyvBk_uRy5mQHs46ZO6mf3jNNpgqZ5n1g0xCPmLfPgWWWYtMw_COy0M_-2ysIFTD1Y_3hGg3tPSx/w574-h289/weatherapp.png',
        language: 'ReactJs, ApiFetch, Tailwind',
        role: 'Author',
        link: 'https://github.com/chaesthetics/Weather-App',
    },
    {
        title: 'Twitter Clone',
        description: 'A social networking site where users broadcast short posts known as tweets. These tweets can contain text, videos, photos or links. ',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtaO9isM7TM9XAw70rMFXnyyj1GP1JM25LXDeAlGDGGxxfUooh_4Grs4uOMl5Qgys37BubYFxK18fhURGVOVk1c8IAw2m4ByUVDbBnkDJ68Sbr__AIWTEe7QZuzyitdQi-4Gh1dNXD-Bo-0fLJLqbNLKEmpqR6YpvJO6kn8Q8G4hV__IU-EayyHLRYeqhH/w503-h242/twitter.png',
        language: 'Php, Tailwind',
        role: 'Collaborator',
        link: 'https://github.com/chaesthetics/Twitter-Clone',
    },
    {
        title: 'Anime Dictionary',
        description: 'Anime Dictionary, This system provides a complete list of whatever anime in the search using RapidAPI.',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRm8jqgE1onqAF_feaUlYdORNhTiyIdAgpx7-4IW3K38FSyJZGW08VGRmWmkXS7TSZBPK5G6KVs9hzJP8zyXetS1xal5cixvwzhyphenhyphen77izHm9KxBjOyee0hDB3icjyZDnnZfCmgpn0G9gDnfdCEN2GIrK8Wi0CD5dvQ3YLA16KEOZbXUJvaaztUGOs2v9pXH/w542-h278/animelist.png',
        language: 'ReactJs, ApiFetch, Bootstrap5',
        role: 'Author',
        link: 'https://github.com/chaesthetics/AnimeList',
    },
];

</script>
<template>
<div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-10 pb-10 text-white">
    <button v-for="(project, key) in projects" :key="key" class="bg-neutral-800 rounded-xl hover:bg-neutral-700 hover:-translate-y-1 hover:scale-110 animation duration-300">
        <div class="pt-5 pb-5 pr-5 pl-5">
            <div class="space-y-2">
                <img :src="project.img" class="rounded-md ">
                <div class="flex flex-col leading-4 items-center justify-center">
                    <p class="text-white font-bold text-md text-center">{{ project.title }}</p>
                    <p class="text-[10px] text-slate-400">{{ project.role }}</p>
                </div>
                <p class="text-white text-sm text-left">{{ project.description }}</p>
            </div>
            <div class="pt-5">
                <p class="text-yellow-300 text-sm font-semibold text-left">{{ project.language }}</p>
                <div class="flex justify-end items-center">
                    <div class="flex space-x-2">
                        <div class="hover:text-gray-400" data-tooltip-target="tooltip-github{{ key }}">
                            <a data-tooltip-target="tooltip-github{{ key }}" v-bind:href="project.link"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-github text-white hover:text-gray-400" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg></a>
                        </div>
                        <div id="tooltip-github{{ key }}" role="tooltip" class="absolute z-20 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700">
                            Visit GitHub
                        <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button class="text-white hover:bg-gray-600" data-tooltip-target="tooltip-image{{ key }}">
                            <svg data-tooltip-target="tooltip-image{{ key }}" v-on:click="getId($event)" :id="key" data-modal-target="popup-modal{{ key }}" data-modal-toggle="popup-modal{{ key }}" type="button" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" class="bi bi-box-arrow-in-up-right text-white outline-none" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z" fill="white"></path> <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z" fill="white"></path> </svg>
                        </button>
                        <div id="tooltip-image{{ key }}" role="tooltip" class="absolute z-20 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700">
                            Zoom in
                        <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</button>

<div id="popup-modal{{ key }}" tabindex="-1" class="fixed top-0 mt-[-20px] left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-neutral-900 bg-opacity-50 border-slate-100 border-2 rounded-sm shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-yellow-400 bg-transparent hover:bg-slate-200 hover:text-black rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal{{ key }}">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <img :src="projects[onView].img" class="pt-7 shadow pl-4 pr-4"/>
            </div>
        </div>
    </div>
</div>

</div>
</template>