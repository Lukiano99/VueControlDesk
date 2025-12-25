import router from '@/app/router'
import { hasPermission } from '@/lib/permissions'
import { defineStore } from 'pinia'

export type Role = 'admin' | 'manager' | 'viewer'

interface User {
  id: string
  role: Role
}

export const useAuthStore = defineStore('auth', {
  state: (): { user: User | null } => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
  }),

  actions: {
    login(role: Role) {
      this.user = { id: crypto.randomUUID(), role }
      localStorage.setItem('user', JSON.stringify(this.user))
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
      router.push('/login')
    },
    // auth.store.ts
    hasPermission(action: string) {
      if (!this.user) return false
      return hasPermission(this.user.role, action)
    },
  },
})
