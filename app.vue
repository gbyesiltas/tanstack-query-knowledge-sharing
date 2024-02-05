<template>
  <div class="bg-gray-900 text-gray-100 h-screen">
    <header class="py-8 px-48 bg-gray-800">
      <h1 class="font-bold text-5xl mb-4">GameUsedJersey</h1>
      <div class="flex gap-4 text-lg">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/event/event-1">Event 1</NuxtLink>
        <NuxtLink to="/event/event-2">Event 2</NuxtLink>
      </div>
    </header>
    <div class="py-6 px-48">
      <NuxtPage />
    </div>
  </div>
</template>
