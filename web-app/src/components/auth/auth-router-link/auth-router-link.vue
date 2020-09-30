<template>
    <div class="auth-router-link__wrapper">
        <router-link :to="to" class="auth-router-link">
            {{ text }}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'AuthRouterLink',
    props: {
        to: {
            type: String,
            default: '/'
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.auth-router-link__wrapper {
    text-align: right;
}
.auth-router-link {
    display:inline-block;
    margin: 0 auto;
    color: #eee;
    font-size: .7rem;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}
</style>