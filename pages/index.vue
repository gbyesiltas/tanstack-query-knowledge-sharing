<script setup lang="ts">
const todos: any[] = [];
</script>

<template>
    <div>
        <h2 class="font-bold text-2xl">My todo's</h2>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>