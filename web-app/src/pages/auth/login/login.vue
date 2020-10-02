<template>
    <div>
        <auth-form 
            :fieldsConfig="fieldsConfig"
            :is-submit-button-disabled="submitButtonDisabled"
            submitButtonText="Войти"
            @submit="handleSubmit" 
        />
        <auth-router-link to="/register" text="Зарегистрироваться"></auth-router-link>
    </div>
</template>

<script>
import AuthForm from '@/components/auth/auth-form/auth-form.vue'
import AuthRouterLink from '@/components/auth/auth-router-link/auth-router-link.vue'
import authMixin from '@/mixins/auth/auth.js'
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { SEND_LOGIN } from '@/store/auth/actions';
import { mapActions } from 'vuex'

export default {
    name: 'Login',
    mixins: [authMixin],
    components: {
        AuthForm,
        AuthRouterLink
    },
    data: () => ({
        identify: '',
        password: '',
        remember: false,
    }),
    computed: {
        fieldsConfig: function() {
            return [
                {
                    component: 'ui-input',
                    inputType: 'text',
                    invalid: this.isIdentifyInvalid,
                    input: this.handleIdentifyInput,
                    key: '0',
                    name: 'identify',
                    placeholder: 'Имя пользователя или email',
                    label: 'Логин:',
                    value: this.identify,
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
                    component: 'ui-checkbox',
                    change: this.handleRememberInput,
                    key: '2',
                    name: 'remember',
                    label: 'Запомнить?',
                },
            ]
        },
        formData: function() {
            return {
                identify: this.identify,
                password: this.password,
                remember: this.remember,
            }
        }
    },
    methods: {
        ...mapActions('auth', {
            sendLogin: SEND_LOGIN
        }),
        isIdentifyInvalid: function() {
            return ( this.$v.identify.$dirty && (!this.$v.identify.required || !this.$v.identify.minLength || !this.$v.identify.maxLength) )
        },
        isPasswordInvalid: function() {
            return ( this.$v.password.$dirty && (!this.$v.password.required || !this.$v.password.minLength || !this.$v.password.maxLength) )
        },
        handleIdentifyInput: function(identify) {
            this.identify = identify
        },
        handlePasswordInput: function(password) {
            this.password = password
        },
        handleRememberInput: function(remember) {
            this.remember = remember
        },
        handleSubmit: async function () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                console.log('invalid')
                return;
            }
            // submit
            await this.sendLogin(this.formData)
            this.$router.push({ name: 'Home' })
        },
    },
    validations: {
        identify: {
            maxLength: maxLength(50),
            minLength: minLength(6),
            required,
        },
        password: {
            maxLength: maxLength(50),
            minLength: minLength(6),
            required,
        },
    }
}
</script>