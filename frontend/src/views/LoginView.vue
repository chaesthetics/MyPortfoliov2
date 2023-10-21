<script setup>
import { reactive } from "vue";
import useAccount from "@/components/composables/account.js";

const { errors, login } = useAccount();

const loginForm = reactive({
    email: "",
    password: "",
});

</script>

<template>
<div class="fixed w-screen h-screen">
    <form @submit.prevent="login(loginForm)">
        <div class="card flex mt-40 min-w-[300px] w-1/3 flex-col ml-auto mr-auto">
            <div class="flex flex-col">
                <label class="text-white mt-1/2">Email</label>
                <input v-model="loginForm.email" class="h-10 focus:outline-none" placeholder="Enter your email" type="email">
            </div>
            <div class="flex flex-col">
                <label class="text-white">Password</label>
                <input v-model="loginForm.password" class="h-10 focus:outline-none" placeholder="Enter your password" type="password">
            </div>
            <button class="bg-yellow-600 font-semibold hover:bg-yellow-700 text-white mt-3 h-10" type="submit">Login</button>
        </div>
    </form>
</div>
</template>