// Set up a listener to get the documents.
import { ref, watchEffect } from 'vue'
import { db } from "@/firebase/config"
import { onSnapshot, doc } from 'firebase/firestore'

const getDocument = (coll, id) => {
    // Still inside in case we use it at multiple places with multiple collections
    const document = ref(null)
    const error = ref(null)

    const docRef = doc(db, coll, id)

    const unsub = onSnapshot(docRef, (doc) => {
        if (doc.data()) {
            document.value = {...doc.data(), id: doc.id}
            error.value = null
        } else {
            error.value = "No such document"
        }
    }, (err) => {
        //Second callback for error.
        console.log(err.message)
        document.value = null
        error.value = "Couldn't fetch document"
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { document, error }

}

export default getDocument