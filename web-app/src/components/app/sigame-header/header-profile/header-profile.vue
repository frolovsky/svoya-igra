<template>
	<div class="header__profile">
		<img src="" alt="" class="header__profile-image">
		<router-link class="header__profile-name" to="/">
			{{ username }}
		</router-link>
		<header-profile-menu @logout="logout" />
	</div>
</template>

<script>
import HeaderProfileMenu from '@/components/app/sigame-header/header-profile/header-profile-menu/header-profile-menu';
import { Auth } from '@/services/auth'
import { mapActions, mapState } from 'vuex'
import { SEND_LOGOUT, GET_USER_INFO } from '@/store/auth/actions'
export default {
	name: 'HeaderProfile',
	components: {
		HeaderProfileMenu
	},
	data: () => ({
		username: 'Vasya'
	}),
	methods: {
		...mapActions('auth', {
			sendLogout: SEND_LOGOUT,
			getUserInfo: GET_USER_INFO
		}),
		async logout() {
			await this.sendLogout();
			this.$router.push({ name: 'Login' })
		}
	},
	computed: {
		...mapState({
			user: state => state.auth.user
		})
	},
	async mounted() {
		if (Auth.isAuthorized() && !this.user) {
			await this.getUserInfo();
		}
		this.username = this.user.username
	}
}
</script>

<style lang="scss" scoped>
.header__profile {
	margin-left: auto;
}
</style>