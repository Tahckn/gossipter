<template>
  <nav>
    <div>
      <p>Hey there</p>
      <p class="email">Currently logged in as ... email</p>
    </div>
    <button @click="LogoutClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
export default {
    setup(){
        const {logout,error} = useLogout()

        const LogoutClick = async () => {
            await logout()
            if(!error.value){
                console.log('user logged out')
            }
        }

        return {LogoutClick}
    }
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
  font-size: 16px;
  color: rgb(190, 190, 191);
}

nav p.email {
    font-size: 14px;
    color: rgb(228, 228, 229);
}

button {
    cursor: pointer;
}
</style>
