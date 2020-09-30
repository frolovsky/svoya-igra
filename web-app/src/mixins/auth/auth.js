export default {
    name: 'authMixin',
    data: () => ({
        submitButtonDisabled: false,
        errorMessage: '',
    }),
    methods: {
        closeError: function () {
            this.errorMessage = '';
            this.$v.$reset();
            this.submitButtonDisabled = false;
        },
        handleInput: function () {
            this.submitButtonDisabled = false;
        },
        showErrorState: function (error) {
            this.$v.$touch();
            this.errorMessage = error;
            this.submitButtonDisabled = true;
        },
    }
}