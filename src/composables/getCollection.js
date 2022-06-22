import { ref, watchEffect } from 'vue'
import { projectFireStore } from '../firebase/config'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFireStore
    .collection(collection)
    .orderBy('createdAt')

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = []
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      error.value = null
    },
    (err) => {
      console.log(err.message)
      error.value = error.value = 'could not fetch data'
    }
  )

  watchEffect((onInvalidate) => {
    //unsub from previous collection when watcher stopped
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection
