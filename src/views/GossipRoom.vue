 <template>
    <div class="container">
      <navbar/>
      <gossip-window/>
      <NewChatForm/>
    </div>
 </template>

 <script>
 import NewChatForm from '../components/NewChatForm.vue'
 import GossipWindow from '../components/GossipWindow.vue'
 import Navbar from '../components/Navbar.vue'
 import getUser from '../composables/getUser'
 import { watch } from 'vue'
import { useRouter } from 'vue-router'

 export default {
    components:{Navbar,NewChatForm,GossipWindow},
    setup() {
      const{user} = getUser()
      const router = useRouter()

      watch(user, () =>{
         if(!user.value){
            router.push({name:'Welcome'})
         }
      })
    }
 }
 </script>

 <style>
    
 </style>