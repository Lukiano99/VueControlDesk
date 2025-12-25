<script setup lang="ts">
import UsersTable from './UsersTable.vue'
import { useAuthStore } from '@/stores/auth.store'

const auth = useAuthStore()
</script>

<template>
  <section class="p-6 space-y-4">
    <header class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Users</h1>

      <button
        v-if="auth.hasPermission('create')"
        class="px-4 py-2 bg-black text-white"
      >
        Create User
      </button>
    </header>

    <UsersTable />
  </section>
</template>
