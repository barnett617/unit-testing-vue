<template>
  <MessageDisplay />
</template>

<script>
import MessageDisplay from '@/components/MessageDisplay'

export default {
  components: {
    MessageDisplay
  },
  created() {
    console.log('MessageContainer created')
  },
  mounted() {
    console.log('MessageContainer mounted')
  }
}
</script>
