<template>
    <div class="ui-input__wrapper">
        <label class="ui-input__label">
            <span class="label__text">
                {{ label }}
            </span>
            <input 
                class="ui-input"
                :class="{invalid: invalid}"
                :type="type"
                :value="value"
                :placeholder="placeholder"
                :name="name"
                @input="handleInputChange"
            >
        </label>
    </div>
</template>

<script>
export default {
    name: 'UiInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        invalid: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleInputChange: function (event) {
            this.$emit('input', event.target.value);
        },
    }
}
</script>

<style lang="scss" scoped>
.ui-input__label {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.ui-input__wrapper {
    margin-bottom: 1rem;
    width: 100%;
}
.label__text {
    font-weight: 700;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
    padding-left: .5rem;
}
.ui-input {
    padding: .5rem;
    font-size: 1rem;
    color: #fff;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid rgba(255,255,255,.3);
    transition: all .2s;
    &:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid rgba(255,255,255,1);
        padding-left:1rem;
    }
    &.invalid {
        border-bottom-color: red;
    }
}
</style>