<script setup>
import { useForm, useField } from 'vee-validate'
import { loginSchema as validationSchema } from '../validation/loginSchema'
import { useAuthStore } from '../stores/auth'


const { handleSubmit } = useForm({validationSchema})
const auth = useAuthStore()


const email = useField('email')
const password = useField('password')

const onSubmit = handleSubmit( (values) => {
    auth.login(values)
})

</script>

<template>

    <v-card
        flat
        max-width="600"
        class="mx-auto my-10"

    >
        <v-card-title
            class="text-h4 font-weight-bold"
            primary-title
            tag="h3"
        >
            Iniciar Sesión
        </v-card-title>
        <v-card-subtitle
            class="text-h5"
        >
            Inicia sesion con tu cuenta
        </v-card-subtitle>

        <v-alert
            v-if="auth.hasError"
            class="mt-5"
            color="error"
            icon="$error"
            :title="auth.errorMsg"
        ></v-alert>

        <v-form
            @submit.prevent
            class="mt-5"
        >
            <v-text-field
                type="email"
                label="Email"
                bg-color="blue-grey-lighten-5"
                class="mb-3"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
            ></v-text-field>
            <v-text-field
                type="password"
                label="Password"
                bg-color="blue-grey-lighten-5"
                class="mb-3"
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
            ></v-text-field>
            <v-btn
                @click="onSubmit"
                block
                color="pink-accent-3"
                large
            >
                Iniciar Sesión
            </v-btn>
        </v-form>

    </v-card>
</template>