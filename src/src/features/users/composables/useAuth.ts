import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth.store'

export function useAuth() {
  const store = useAuthStore()
  const { user } = storeToRefs(store)

  return {
    user,
    login: store.login,
    logout: store.logout,
    isAuthenticated: !!user.value,
  }
}
