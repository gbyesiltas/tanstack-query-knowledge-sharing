<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

const route = useRoute();
const eventId = route.params.eventId as string;

const { data } = useQuery({
    queryFn: () => getProductsForEvent(eventId),
    queryKey: ["event", eventId, "products"],
});

</script>
<template>
    <div>
        <h2 class="font-bold text-2xl">Event page</h2>
        <pre>
            {{ data }}
        </pre>
    </div>
</template>