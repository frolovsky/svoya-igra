<template>
    <form class="auth-form" method="POST" @submit.prevent="submitHandler">
        <div class="auth-form__wrapper">
            <div v-for="formItem in fieldsConfig" :key="formItem.key">
                <ui-input 
                    v-if="formItem.component === 'ui-input'"
                    :value="formItem.value"
                    :type="formItem.inputType"
                    :placeholder="formItem.placeholder"
                    :label="formItem.label"
                    :invalid="formItem.invalid()"
                    :name="formItem.name"
                    @input="formItem.input"
                />
                <ui-checkbox 
                    v-if="formItem.component === 'ui-checkbox'"
                    :label="formItem.label"
                    :name="formItem.name"
                    @change="formItem.change"
                />
            </div>
            <ui-button 
                :text="submitButtonText"
                :disabled="isSubmitButtonDisabled"
                margin='2rem auto 0 auto' 
            />
        </div>
    </form>
</template>
<script>

import UiButton from '@/components/common/ui-button/ui-button';
import UiCheckbox from '@/components/common/ui-checkbox/ui-checkbox';
import UiInput from '@/components/common/ui-input/ui-input';

export default {
    name: 'AuthForm',
    components: {
        UiButton,
        UiCheckbox,
        UiInput,        
    },
    props: [ 'fieldsConfig', 'submitButtonText', 'isSubmitButtonDisabled' ],
    methods: {
        submitHandler: function() {
            this.$emit('submit')
        },
    }
}
</script>

<style lang="scss" scoped>
.auth-form {
    width:100%;
    padding: 1.5rem;
    background: rgba(0,217,204, .05);
    box-shadow: 0 0 .5rem 0 rgba(0, 0, 0, .2);
}

</style>