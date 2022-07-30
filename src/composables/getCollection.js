// Set up a listener to get the documents.
import { ref, watchEffect } from 'vue'
import { db } from "@/firebase/config"
import { onSnapshot, query, collection, orderBy, where } from 'firebase/firestore'

const getCollection = (coll, queryArray) => {
    // Still inside in case we use it at multiple places with multiple collections
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = collection(db, coll)
    const q = query(collectionRef, orderBy('createdAt'))
    
    if (queryArray) {
        const q2 = query(collectionRef, where(...queryArray))
    }

    const unsub = onSnapshot(q, (snap) => {
        let results = []
        snap.docs.forEach((doc) => {
            // must use 1st member because else we would have local versions of snap
            // default thing to do, else createdAt would be just a full timestamp
            // but a ref to a timestamp, cause it needs to go to the server first
            // so we check if it exists in the db before pushing.
            // Needed because we will display the time on the page.
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        //Second callback for error.
        console.log(err.message)
        documents.value = null
        error.value = "Couldn't fetch data"
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { documents, error }

}

export default getCollection