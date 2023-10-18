<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { initFlowbite } from 'flowbite'
import { useRouter } from 'vue-router'
const router = useRouter();
import { onMounted } from 'vue';

onMounted(() => {
    initFlowbite();
});

</script>

<template>

<header v-if="router.currentRoute.value.name === 'admin'">
</header>
<header v-else>
<div class="bg-black w-full min-w-screen">
  <nav class="flex w-full text-white flex items-center pt-3  md:w-4/6 md:mx-auto md:justify-between ">
    <div class="flex space-x-3 mb-3 items-center hidden md:flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>
        <div class="flex items-center"><span class="flex text-sm items-center">Chaesthetics / </span>
        <p class="font-semibold hidden lg:flex">{{ router.currentRoute.value.name }}</p>
      </div>
    </div>
    <div class="flex text-sm w-screen md:w-auto md:justify-end items-center justify-around md:flex-end">
      <button :class="[router.currentRoute.value.path === '/' ? 'active': '']">
        <RouterLink to="/" class="flex animation duration-300 group-active:border-bottom-2 hover:bg-neutral-800  pl-4 pr-4 pt-1 pb-1 rounded mb-1">
          <svg class="h-[20px] w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><rect width="30" height="30" fill="none"/><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"/></svg>
          <p>Home</p>
        </RouterLink>
      </button>
      <button :class="[router.currentRoute.value.path === '/about' ? 'active': '']">
        <RouterLink to="/about" class="flex animation duration-300 group-active:border-bottom-2 hover:bg-neutral-800  pl-4 pr-4 pt-1 pb-1 rounded mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" color:gray width="14" height="14" fill="currentColor" class="bi bi-person-bounding-box mt-1" viewBox="0 0 16 16"> <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> </svg>
          <p class="ml-1">About</p>
        </RouterLink>
      </button>
      <button :class="[router.currentRoute.value.path === '/portfolio' ? 'active': '']">
        <RouterLink to="/portfolio" class="flex animation duration-300 group-active:border-bottom-2 hover:bg-neutral-800  pl-4 pr-4 pt-1 pb-1 rounded mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-journal mt-1" viewBox="0 0 16 16"> <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/> <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/> </svg>
          <p class="ml-1">Portfolio</p>
        </RouterLink>
      </button>
      <button :class="[router.currentRoute.value.path === '/contact' ? 'active': '']">
        <RouterLink to="/contact" class="flex animation duration-300 group-active:border-bottom-2 hover:bg-neutral-800  pl-4 pr-4 pt-1 pb-1 rounded mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-telephone mt-1" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/> </svg>
          <p class="ml-1">Contact</p>
        </RouterLink>
      </button>
    </div>
  </nav>
</div>
</header>
<body class="w-full h-full">
  <RouterView />
</body>
</template>

<style>
.active{
  border-bottom:3px solid rgb(202 138 4);
}

.no-scrollbar::-webkit-scrollbar { 
  display: none; 
} 
  
</style>