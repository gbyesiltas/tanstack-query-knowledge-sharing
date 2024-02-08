<script setup lang="ts">
import { useCreateTodoMutation } from '~/queries/todos';

const title = ref("");

const { mutateAsync } = useCreateTodoMutation();
const onSubmit = async () => {
    try {
        await mutateAsync(title.value);
        title.value = "";
    } catch(e) {
        console.log("e", e);
    }
}
</script>
<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Create a todo item</h2>
        <TextInput v-model="title" placeholder="Enter your todo" />
        <button @click="onSubmit" class="rounded-xl border-white border w-fit p-4 mt-4 bg-gray-800">Add</button>
    </div>
</template>