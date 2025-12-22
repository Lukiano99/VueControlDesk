import type { Role } from '@/stores/auth.store'

export function hasPermission(role: Role, action: string) {
  const map: Record<Role, string[]> = {
    admin: ['create', 'edit', 'delete', 'view'],
    manager: ['edit', 'view'],
    viewer: ['view'],
  }

  return map[role].includes(action)
}
