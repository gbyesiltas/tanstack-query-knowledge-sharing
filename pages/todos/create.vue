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
            <TextInput v-model="title" placeholder="Enter your todo" />
            <button type="submit" class="rounded-xl border-white border w-fit p-4 mt-4 bg-gray-800">Add</button>
        </form>
    </div>
</template>