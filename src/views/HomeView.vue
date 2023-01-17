<template>
  <ul>
    <li v-for="(user, i) in userStore.users" :key="i">
      <router-link to="/about/">{{ user.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import {defineComponent} from 'vue'
import {mapStores} from 'pinia'
import {useUserStore} from '@/stores/user'

export default defineComponent({
  computed: {
    ...mapStores(useUserStore)
  },

  mounted() {
    this.userStore.fetchAllUsers()
  }
})
</script>
