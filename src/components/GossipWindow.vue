<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }} :</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed } from 'vue'

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

    return { error, documents, formattedDocuments }
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
  margin: 18px 0;
  background: rgb(39, 41, 46);
  padding: 5px 20px;
  max-width: fit-content;
  border-radius: 6px 25px 25px 25px;
  font-style: inherit;
  font-size: 15px;
  font-family: 'Lato', sans-serif;
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
  max-height: 400px;
  overflow: auto;
  scrollbar-width: thin;
}
</style>
