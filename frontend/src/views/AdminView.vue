<script setup>
import useAccount from '@/components/composables/account';
import { onMounted } from 'vue';

const { getToken, user } = useAccount();

onMounted(()=>{ getToken(); })
</script>

<template>
    <div>
        <p class="text-xl text-white font-semibold">Welcome to Admin Panel</p>
    </div>
</template>