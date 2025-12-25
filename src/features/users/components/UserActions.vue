<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'

const auth = useAuthStore()
defineEmits(['edit', 'delete'])
</script>

<template>
  <div class="flex gap-2">
    <button v-if="auth.hasPermission('edit')" @click="$emit('edit')">
      Edit
    </button>

    <button v-if="auth.hasPermission('delete')" @click="$emit('delete')">
      Delete
    </button>
  </div>
</template>
