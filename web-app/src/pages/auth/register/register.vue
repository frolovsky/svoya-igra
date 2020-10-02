<template>
    <div>
        <auth-form 
            :fieldsConfig="fieldsConfig"
            :is-submit-button-disabled="submitButtonDisabled"
            submitButtonText="Зарегистрироваться"
            @submit="handleSubmit" 
        />
        <auth-router-link to="/login" text="Войти"></auth-router-link>
    </div>
</template>

<script>
import AuthForm from '@/components/auth/auth-form/auth-form.vue'
import AuthRouterLink from '@/components/auth/auth-router-link/auth-router-link.vue'
import authMixin from '@/mixins/auth/auth.js'
import { required, minLength, maxLength, sameAs, email } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import { SEND_REGISTRATION } from '@/store/auth/actions' 

export default {
    name: 'Register',
    mixins: [authMixin],
    components: {
        AuthForm,
        AuthRouterLink
    },
    data: () => ({
        email: '',
        password: '',
        repeatPassword: '',
        error: '',
    }),
    computed: {
        fieldsConfig: function() {
            return [
                {
                    component: 'ui-input',
                    inputType: 'email',
                    invalid: this.isEmailInvalid,
                    input: this.handleEmailInput,
                    key: '0',
                    name: 'email',
                    placeholder: '',
                    label: 'Электронная почта:',
                    value: this.email,
                },
                {
                    component: 'ui-input',
                    inputType: 'password',
                    invalid: this.isPasswordInvalid,
                    input: this.handlePasswordInput,
                    key: '1',
                    name: 'password',
                    placeholder: '',
                    label: 'Пароль:',
                    value: this.password,
                },
                {
                    component: 'ui-input',
                    inputType: 'password',
                    invalid: this.isRepeatPasswordInvalid,
                    input: this.handleRepeatPasswordInput,
                    key: '2',
                    name: 'repeat-password',
                    placeholder: '',
                    label: 'Повторите пароль: ',
                    value: this.repeatPassword,
                },
            ]
        },
        formData: function() {
            return {
                email: this.email,
                password: this.password
            }
        }
    },
    methods: {
        ...mapActions('auth', {
            sendRegistration: SEND_REGISTRATION
        }),
        isEmailInvalid: function() {
            return ( this.$v.email.$dirty && (!this.$v.email.required || !this.$v.email.maxLength || !this.$v.email.email) )
        },
        isPasswordInvalid: function() {
            return ( this.$v.password.$dirty && (!this.$v.password.required || !this.$v.password.minLength || !this.$v.password.maxLength) )
        },
        isRepeatPasswordInvalid: function() {
            return ( this.$v.repeatPassword.$dirty && (!this.$v.repeatPassword.required || !this.$v.repeatPassword.sameAs) )
        },
        handleEmailInput: function(email) {
            this.email = email
        },
        handlePasswordInput: function(password) {
            this.password = password
        },
        handleRepeatPasswordInput: function(repeatPassword) {
            this.repeatPassword = repeatPassword
        },
        handleSubmit: async function () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return;
            }
            // submit
            try {
                await this.sendRegistration(this.formData)
                this.$router.push({ name: 'Home' })
            } catch (e) {
                this.error = e.response.data.error
            }
        },
    },
    validations: {
        email: {
            email,
            maxLength: maxLength(50),
            required,
        },
        password: {
            maxLength: maxLength(50),
            minLength: minLength(6),
            required,
        },
        repeatPassword: {
            required,
            sameAs: sameAs('password')
        },
    }
}
</script>