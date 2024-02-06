<script setup lang="ts">
const title = ref("");
const onSubmit = () => {
    console.log(title.value);
    // to-implement
    title.value = "";
};
</script>
<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Create a todo item</h2>
        <form @submit="onSubmit" class="flex flex-col">
            <input v-model="title" type="text" placeholder="Enter your todo" class="bg-gray-800 rounded-xl p-4 w-96" />
            <button type="submit" class="rounded-xl border-white border w-fit p-4 mt-4 bg-gray-800">Add</button>
        </form>
    </div>
</template>