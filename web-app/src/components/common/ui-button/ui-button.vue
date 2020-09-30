<template>
    <button class="ui-button" :class="{'disabled': disabled}" :style="insertStyle">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'UiButton',
    props: {
        text: {
            type: String,
            default: 'Текст'
        },
        margin: {
            type: String,
            default: '0 auto',
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        insertStyle: function() {
            return {
                margin: `${this.margin}`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.ui-button {
    display: block;
    width: 100%;
    padding: .5rem 0;
    background: #0051DE;
    box-shadow: 0 0 .5rem 0 rgba(0, 0, 0, .2);
    font-weight: 700;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        filter: brightness(90%)
    }
}
</style>