import { ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'



export const useAuthStore = defineStore('auth', () => {

    const auth = useFirebaseAuth()
    const userAuth = ref(null)

    const router = useRouter()

    const errorMsg = ref('')

    const errorCodes = {
        'auth/user-not-found': 'El usuario no existe',
        'auth/wrong-password': 'La contraseña es incorrecta',
        'auth/invalid-credential': 'Credenciales inválidas',
    }

    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            userAuth.value = user
        })
    })

    const login = ( { email, password } ) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                userAuth.value = user
                router.push({ name: 'admin-propiedades' })
            })
            .catch(error => {
            errorMsg.value = (errorCodes[error.code])
        })
    }

    const hasError = computed(() => {
        return errorMsg.value
    })

    const isAuth = computed(() => {
        return userAuth.value
    })

    const logout = () => {
        signOut(auth).then(() => {
            userAuth.value = null
            router.push({ name: 'login' })
        }).catch(error => {
            errorMsg.value = (errorCodes[error.code])
        })
    }

    return {
        login,
        logout,
        hasError,
        errorMsg,
        isAuth,
    }

})
