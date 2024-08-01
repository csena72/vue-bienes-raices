<script setup>

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
        <v-form
            @submit.prevent
            class="mt-5"
        >
            <v-text-field
                type="email"
                label="Email"
                bg-color="blue-grey-lighten-5"
            ></v-text-field>
            <v-text-field
                type="password"
                label="Password"
                bg-color="blue-grey-lighten-5"
            ></v-text-field>
            <v-btn
                block
                color="pink-accent-3"
                large
            >
                Iniciar Sesión
            </v-btn>
        </v-form>
    </v-card>
</template>