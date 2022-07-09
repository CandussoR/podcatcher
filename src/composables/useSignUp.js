import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

const error = ref(null)

const signUp = async (email, password, displayName) => {
    error.value = null
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Something went wrong')
        }
        await updateProfile(auth.currentUser, { displayName })
        error.value = null

        return res
    } catch(err) {
        console.log(err)
        error.value = err.message
    }
}

const useSignUp = () => {
    
    return { error, signUp }
}

export default useSignUp