<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth.store'
import UserActions from './UserActions.vue'

// mock data (privremeno, ide napolje kad ubacimo useUsers)
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'manager' },
]

const auth = useAuthStore()

function handleEdit(userId: string) {
  console.log('edit', userId)
}

function handleDelete(userId: string) {
  console.log('delete', userId)
}

const canViewActions = computed(
  () => auth.hasPermission('edit') || auth.hasPermission('delete')
)
</script>

<template>
  <div class="border rounded-md overflow-hidden">
    <table class="w-full text-left border-collapse">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3">Name</th>
          <th class="p-3">Email</th>
          <th class="p-3">Role</th>
          <th v-if="canViewActions" class="p-3 text-right">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id" class="border-t">
          <td class="p-3">{{ user.name }}</td>
          <td class="p-3">{{ user.email }}</td>
          <td class="p-3">{{ user.role }}</td>

          <td v-if="canViewActions" class="p-3 text-right">
            <UserActions
              @edit="handleEdit(user.id)"
              @delete="handleDelete(user.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
