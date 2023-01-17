<template>
  <div>
    <router-link to="/">Home</router-link>

    <h1 v-if="userStore.users.length">{{ userStore.users[0].name }}</h1>
    <h1 v-else>Loading...</h1>
  </div>
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
    this.userStore.fetchUser('1')
  }
})
</script>
