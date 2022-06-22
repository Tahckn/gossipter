<template>
  <form @submit.prevent="submitHandler">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input
      class="effect"
      type="email"
      required
      placeholder="email"
      v-model="email"
    />
    <input
      class="effect"
      type="password"
      required
      placeholder="password"
      v-model="password"
    />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { async } from '@firebase/util'
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup(props, context) {
    const { error, signup } = useSignup()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const submitHandler = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return { displayName, password, email, submitHandler, error }
  },
}
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
