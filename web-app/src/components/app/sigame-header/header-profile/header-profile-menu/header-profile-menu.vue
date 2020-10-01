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
import { mapActions } from 'vuex'
import { SEND_LOGOUT } from '@/store/auth/actions'
export default {
    name: 'HeaderProfileMenu',
    methods: {
        ...mapActions('auth', {
            sendLogout: SEND_LOGOUT
        }),
        async logout() {
            await this.sendLogout();
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>