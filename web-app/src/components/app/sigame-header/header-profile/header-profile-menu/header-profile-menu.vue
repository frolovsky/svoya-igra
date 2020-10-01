<template>
    <div class="profile-menu">
        <ul class="profile-menu__list">
            <li class="profile-menu__item">
                <a href="" class="profile-menu__link" @click.prevent="logout">Выйти</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderProfileMenu',
    methods: {
        logout() {
            this.$emit('logout')
        }
    }
}
</script>