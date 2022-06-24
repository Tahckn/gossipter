<template>
  <div class="colors"></div>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div
        v-for="doc in formattedDocuments"
        :key="doc.id"
        class="single"
        :style="[
          user.displayName === doc.name
            ? styleObject
            : { color: 'rgb(221, 221, 221)' },
        ]"
      >
        <span
          :style="[
            user.displayName === doc.name
              ? {
                  color: 'rgb(221, 221, 221,0.5)',
                }
              : { color: 'rgb(87, 88, 88)' },
          ]"
          class="created-at"
          >{{ doc.createdAt }}</span
        >

        <span v-if="user.displayName !== doc.name" class="name"
          >{{ doc.name }} :</span
        >
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'
import getUser from '../composables/getUser'
import { doc } from '@firebase/firestore'

export default {
  setup() {
    const { error, documents } = getCollection('messages')

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })

    const styleObject = ref({
      background: 'rgb(56, 122, 255,0.8)',
      'border-radius': '6px 6px 25px 6px',
      float: 'right',
      'text-align': 'right',
      padding: '5px 13px',
    })

    const { user } = getUser()

    const messages = ref(null)
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return {
      error,
      documents,
      formattedDocuments,
      messages,
      user,
      styleObject,
    }
  },
}
</script>
<style>
.chat-window {
  margin: auto;
  max-width: 95%;
  background: rgb(22, 24, 25);
  padding: 30px 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  border-radius: 20px;
}

.single {
  margin: 16px 0;
  background: rgb(39, 41, 46);
  padding: 5px 16px;
  max-width: fit-content;
  border-radius: 6px 6px 6px 25px;
  font-style: inherit;
  font-size: 15px;
  font-family: 'Lato', sans-serif;
  clear: both;
}

.created-at {
  display: block;
  color: rgb(87, 88, 88);
  font-size: 11px;
}

.name {
  font-weight: bold;
  margin-right: 12px;
}

.messages {
  max-height: 500px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgb(55, 58, 65, 0.2) rgb(22, 24, 25);
}

.colors {
  display: flex;
  justify-content: center;
}

.color {
  margin: 2px;
  cursor: pointer;
}

#green {
  background: rgb(51, 156, 109);
  border-radius: 20px;
  padding: 10px 20px;
}

#purple {
  background: rgb(208, 140, 229);
  border-radius: 20px;
  padding: 10px 20px;
}

#orange {
  background: rgb(218, 135, 81);
  border-radius: 20px;
  padding: 10px 20px;
}

#red {
  background-color: rgb(208, 68, 82);
  border-radius: 20px;
  padding: 10px 20px;
}
</style>
