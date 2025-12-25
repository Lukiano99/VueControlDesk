<script setup lang="ts">
import LogoutButton from './features/auth/LogoutButton.vue'
</script>

<template>
  <div class="min-h-screen">
    <!-- Header sa logout dugmetom -->
    <header
      class="bg-white border-b px-4 py-2 flex justify-between items-center"
    >
      <h1 class="text-xl font-semibold">VueControlDesk</h1>
      <LogoutButton />
    </header>

    <!-- Main content -->
    <main>
      <RouterView />
    </main>
  </div>
</template>
