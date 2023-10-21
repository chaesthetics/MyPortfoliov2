<script setup>
import useAccount from '@/components/composables/account';
import { onMounted } from 'vue';

const { getToken, user, logout } = useAccount();

onMounted(()=>{ getToken(); })


</script>

<template>
    <div class="flex space-x-2">
        <p class="text-xl text-white font-semibold">Welcome to Admin Panel</p>
        <button @click="logout" class="bg-yellow-600 px-4 py-1 text-white text-md hover:bg-yellow-700 rounded-sm">Logout</button>
    </div>
</template>