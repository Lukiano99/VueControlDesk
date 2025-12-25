import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

import LoginView from '@/features/auth/LoginView.vue'
import UsersView from '@/features/users/components/UsersView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { public: true },
    },
    {
      path: '/',
      redirect: '/users',
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
      meta: {
        requiresAuth: true,
        permissions: ['view'],
      },
    },
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.public) return true

  if (to.meta.requiresAuth && !auth.user) {
    return { name: 'login' }
  }

  if (to.meta.permissions && auth.user) {
    const required = to.meta.permissions as string[]
    const hasPermission = required.every((p) => auth.hasPermission(p))

    if (!hasPermission) {
      return false // ili redirect na /403 kasnije
    }
  }

  return true
})

export default router
