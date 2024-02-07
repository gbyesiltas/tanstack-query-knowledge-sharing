<script setup lang="ts">
const text = defineModel<string>({
    default: "",
});
</script>

<template>
    <input v-model="text" type="text" class="bg-gray-800 rounded-xl p-4 w-96" />
</template>