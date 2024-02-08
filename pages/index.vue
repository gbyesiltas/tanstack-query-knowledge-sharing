<script setup lang="ts">
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { useTodosQuery } from '~/queries/todos';

const props = defineProps<{
    todoGroupId?: string;
}>();

const todoGroupId = computed(() => props.todoGroupId);

const searchTerm = ref("");
const { data: todos, status, isLoading, isPending } =  useTodosQuery(todoGroupId);

const queryClient = useQueryClient();

// to get data
queryClient.getQueriesData({
    queryKey: ['todos']
});

// to set data
queryClient.setQueryData(['todos'], (data: Object[] | undefined) => {
    data
});
</script>

<template>
    <div>
        <div>isLoading {{ isLoading }}</div>
        <div>isPending {{ isPending }}</div>

        <h2 class="font-bold text-2xl">My todo's</h2>
        <TextInput v-model="searchTerm" />
        <p v-if="status === 'pending'">Loading...</p>
        <p v-if="status === 'error'">Error fetching data</p>
        <ul v-else>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>