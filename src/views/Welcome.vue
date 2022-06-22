<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <login @login="enterChat"/>
      <p>
        No account yet? <span @click="showLogin = false">Signup </span>instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <signup @signup="enterChat" />
      <p>
        Already have account
        <span @click="showLogin = true">Login </span>instead
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    Signup,
    Login,
  },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () =>{
      router.push({name:'GossipRoom'})
    }

    return { showLogin, enterChat }
  },
}
</script>
<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 0.7rem;
  border-radius: 12px;
  outline: none;
  color: rgb(104, 104, 104);
  margin: 0.3em auto;
  background: rgb(17, 19, 23);
  border: 1px solid;
}
.welcome p {
  color: rgb(172, 172, 172);
}
.welcome input:focus {
  border: 1px solid rgb(84, 195, 138);
  transition: all 0.3s;
  border-radius: 10px;
}

.welcome input:focus::placeholder {
  color: transparent;
  transition: all 0.3s;
}

.welcome span {
  font-weight: bold;
  color: rgb(165, 125, 217);
  cursor: pointer;
}

.welcome button {
  margin: 1em auto;
}
</style>
X
