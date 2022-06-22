<template>
  <nav v-if="user">
    <div>
      <p>{{user.displayName}}</p>
      <p class="email">{{user.email}}</p>
    </div>
    <button @click="LogoutClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const LogoutClick = async () => {
      await logout()
      if (!error.value) {
        console.log('user logged out')
      }
    }

    return { LogoutClick, user }
  },
}
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1 px #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 20px;
  font-weight: bold;
  color: rgb(190, 190, 191);
}

nav p.email {
  font-size: 14px;
  color: rgb(228, 228, 229);
  font-weight: 100;
}

button {
  cursor: pointer;
}
</style>
