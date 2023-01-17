<template>
  <div>
    <router-view />

    <div class="drawer">
      {{ rootStore.theme }}
      <!-- {{ userStore.users.length }} -->
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapStores} from 'pinia'
import {useRootStore} from '@/stores/root'
import {useUserStore} from '@/stores/user'

export default defineComponent({
  computed: mapStores(useRootStore, useUserStore),
})
</script>

<style>
.drawer {
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
