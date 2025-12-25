<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'
import { Button } from '@/components/ui/button'

const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
}
</script>

<template>
  <Button v-if="authStore.user" variant="outline" @click="handleLogout">
    Logout
  </Button>
</template>
