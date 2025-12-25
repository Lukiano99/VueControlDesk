<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import Select from '@/components/ui/select/Select.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'
import SelectValue from '@/components/ui/select/SelectValue.vue'
import SelectContent from '@/components/ui/select/SelectContent.vue'
import SelectGroup from '@/components/ui/select/SelectGroup.vue'
import SelectLabel from '@/components/ui/select/SelectLabel.vue'
import SelectItem from '@/components/ui/select/SelectItem.vue'
import Button from '@/components/ui/button/Button.vue'

const router = useRouter()
const auth = useAuthStore()

const role = ref<'admin' | 'manager' | 'viewer'>('viewer')

function handleLogin() {
  auth.login(role.value)
  router.push('/users')
}

onMounted(() => {
  if (auth.user) {
    router.push('/users')
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-[320px] space-y-4">
      <h1 class="text-xl font-semibold text-center">ControlDesk Login</h1>

      <label class="block text-sm">
        <Select v-model="role">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Roles</SelectLabel>
              <SelectItem value="admin"> Admin </SelectItem>
              <SelectItem value="manager"> Manager </SelectItem>
              <SelectItem value="viewer"> Viewer </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>

      <Button class="w-full" @click="handleLogin"> Login </Button>
    </div>
  </div>
</template>
