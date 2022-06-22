<template>
  <form @submit.prevent="submitHandler">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{error}}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { async } from '@firebase/util'
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')

    const {error, login} = useLogin()

    const submitHandler = async () => {
      await login(email.value, password.value)
      if(!error.value){
        context.emit('login')
      }
    }

    return { password, email, submitHandler,error }
  },
}
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
