<template>
  <form>
    <textarea
      placeholder="Your Message ..."
      v-model="message"
      @keypress.enter.prevent="handleMessage"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'

export default {
  setup() {
    const { user } = getUser()

    const { addDoc, error } = useCollection('messages')

    const message = ref('')

    const handleMessage = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      }

      await addDoc(chat)
      if (!error.value) {
        message.value = ''
      }
    }
    return { message, handleMessage,error }
  },
}
</script>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
  background: rgb(39, 41, 46);
  color: rgb(160, 163, 173);
}
</style>
