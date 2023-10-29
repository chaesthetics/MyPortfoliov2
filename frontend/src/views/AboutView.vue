<script setup>

import SkillsView from '@/components/SkillsView.vue';
import ToolsView from '@/components/ToolsView.vue';
import { onMounted } from "vue";
import useAccount from "@/components/composables/account";

import { ref } from 'vue';

var isActive = ref('techstack');

const { user, getUser } = useAccount();

onMounted(()=>{

  getUser();

});

const changeActive = (event) => {
  isActive.value = event.currentTarget.id;
}

</script>

<template>
  <main>
    <div class="about w-5/6 md:w-4/6 ml-auto mr-auto mt-10 bg-neutral-800 pl-5 pr-4 pt-5 pb-10 rounded-xl">
      <p class="text-white font-bold text-lg pb-4 uppercase pl-4">About me</p><hr class="border-1 border-yellow-300 border md:mb-5">
      <div class="flex text-white  grid md:grid-cols-2 md:justify-around">
        <img :src="user.avatar" class="h-[200px] w-[200px] mx-auto mt-10 md:mt-0 md:h-[250px] md:w-[250px] rounded-full">
        <div class="max-w-50 mt-10 break-words space-y-3 text-md">
         <p class="flex justify-center text-center md:text-left md:justify-start">
          "Hi everyone! My name is Auriel James V. Fernandez from Mangatarem, Pangasinan. Currently, I am working as a Software QA Engineer.
          When I have free time, I do personal projects to enhance my skills.<br>
          I really enjoy studying Web Development and, In my opinion, Creating a program is not just a job, but also an art that has aesthetic value."
         </p>
        </div>
      </div>
    </div>
    <div class="w-5/6 md:w-4/6 ml-auto mr-auto">
      <div class="flex pt-10 font-semibold items-center">
        <hr class="border border-1 border-yellow-300 w-20">
        <p class="text-white pl-3 text-xl">Skills</p>
      </div>
      <div class="space-x-2 pt-3">
        <button v-if="isActive==='techstack'" v-on:click="changeActive($event)" id="techstack" class="text-white font-semibold bg-neutral-800 pt-2  rounded-sm pb-2 pr-3 pl-3 text-yellow-300 border-yellow-300 animation duration-300">Tech Stack
        </button>
        <button v-else id="techstack" v-on:click="changeActive($event)" class="text-white font-semibold hover:bg-neutral-800  pt-2 hover:rounded-sm  pb-2 pr-3 pl-3 hover:border-yellow-300 animation duration-300">Tech Stack
        </button>
        <button v-if="isActive==='tools'" v-on:click="changeActive($event)" id="tools" class="text-white font-semibold bg-neutral-800 pt-2  rounded-sm pb-2 pr-3 pl-3 text-yellow-300 border-yellow-300 animation duration-300">Tools
        </button>
        <button v-else id="tools" v-on:click="changeActive($event)" class="text-white font-semibold hover:bg-neutral-800  pt-2 hover:rounded-sm  pb-2 pr-3 pl-3 hover:border-yellow-300 animation duration-300">Tools
        </button>
      </div>
      <div v-if="isActive === 'techstack'" class="animation transition transition-opacity duration-300">
        <SkillsView />
      </div>
      <div v-else class="animation duration-300">
        <ToolsView />
      </div>
    </div>
  </main>
</template>
