<template>
  <nav v-if="user">
    <div class="namearea">
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

.namearea{
    padding: 15px 10px;
    background: rgb(39, 41, 46);
    border-radius: 14px;
    font-family: 'Lato', sans-serif;
}

nav p {
  margin: 2px auto;
  font-size: 20px;
  font-weight: bold;
  color: rgb(190, 190, 191);
  font-style: inherit;
}

nav p.email {
  font-size: 14px;
  color: rgb(228, 228, 229);
  font-weight: 100;
}

button {
  cursor: pointer;
  font-size: 13px;
  border-radius: 10px;
  color:rgb(65, 65, 65);
}
</style>
