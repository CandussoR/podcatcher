import { auth } from "@/firebase/config";
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null)

const login = async (email, password) => {
    error.value = null
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        return res
        } catch(err) {
            error.value = err.message
            console.log(err)
        }
    }

const useLogin = () => {
    return { error, login }
}

export default useLogin