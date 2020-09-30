<template>
	<div class="header__profile">
		<img src="" alt="" class="header__profile-image">
		<router-link class="header__profile-name" to="/">
			{{ username }}
		</router-link>
		<header-profile-menu />
	</div>
</template>

<script>
import HeaderProfileMenu from '@/components/app/sigame-header/header-profile/header-profile-menu/header-profile-menu';
export default {
	name: 'HeaderProfile',
	components: {
		HeaderProfileMenu
	},
	data: () => ({
		username: 'Vasya'
	})
}
</script>

<style lang="scss" scoped>
.header__profile {
	margin-left: auto;
}
</style>