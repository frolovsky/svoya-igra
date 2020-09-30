<template>
    <div class="ui-checkbox__wrapper">
        <label class="ui-checkbox__label">
            <input 
                class="ui-checkbox"
                type="checkbox"
                :class="{invalid: invalid}"
                :name="name"
                @change="handleInputChange"
            >
            <span class="label__text">
                {{ label }}
            </span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'UiCheckbox',
    props: {
        label: {
            type: String,
            default: ''
        },
        invalid: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleInputChange: function (event) {
            this.$emit('change', event.target.checked);
        },
    }
}
</script>

<style lang="scss" scoped>
.ui-checkbox__label {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
}
.ui-checkbox__wrapper {
    margin-bottom: 1rem;
    display: flex;
    width: 100%;
}
.label__text {
    font-weight: 700;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
    padding-left: .5rem;
}
.ui-checkbox {
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