<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

const route = useRoute();
const todoId = route.params.todoId as string;

const { data } = useQuery({
    queryFn: () => getTodoById(todoId),
    queryKey: ["todos", todoId],
});

</script>
<template>
    <div>
        <h2 class="font-bold text-2xl mb-4">Todo details</h2>
        <div class="rounded-xl bg-gray-700 p-16 w-fit">
            {{ data?.title }}
        </div>
    </div>
</template>