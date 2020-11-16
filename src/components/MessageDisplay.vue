<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '@/services/axios.js'

export default {
  data() {
    return {
      message: {},
      error: null
    }
  },

  async created() {
    console.log('MessageDisplay created')
    try {
      this.message = await getMessage()
    } catch (err) {
      this.error = 'err'
    }
  },
  mounted() {
    console.log('MessageDisplay mounted')
  }
}
</script>
