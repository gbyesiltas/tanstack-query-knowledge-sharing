<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

const route = useRoute();
const eventId = route.params.eventId as string;

const { data } = useQuery({
    queryFn: () => getEventById(eventId),
    queryKey: ["event", eventId],
});

</script>
<template>
    <div>
        <h2 class="font-bold text-2xl mb-4">Event page</h2>
        <div class="rounded-xl bg-gray-700 p-16 w-fit">
            {{ data?.name }}
        </div>
    </div>
</template>