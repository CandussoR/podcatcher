import { db } from "@/firebase/config"
import { collection, addDoc } from "firebase/firestore"
import { ref } from "vue"

const useCollection = (firebaseCollection) => {

    const error = ref(null)
    const isPending = ref(false)

    const addNewDoc = async (doc) => {
        error.value = null
        isPending.value = true

        try {
            const collectionRef = collection(db, firebaseCollection)
            // addDoc API is the new add from firebase 8.
            // add the res variable to be able to use the doc id in createPlaylist
            const res = await addDoc(collectionRef, doc)
            isPending.value = false
            return res
        } catch(err) {
            console.log(err.message)
            error.value = 'could not send the message'
            isPending.value = false
        }
    }
    return { error, addNewDoc, isPending }
}

export default useCollection