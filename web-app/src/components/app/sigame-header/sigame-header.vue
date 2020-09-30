<template>
	<header class="header">
		<!-- <div class="header__server-info">
			<p class="header__server-status header__server-status_online">
				Сервера работают
			</p>
			<p class="header__online">Игроков онлайн: 
				<span class="header__online-count">30</span>
			</p>
		</div> -->
		<header-controls :controls-config="controlsConfig" class="header__controls" />
		<header-profile />
	</header>
</template>

<script>
import HeaderControls from '@/components/app/sigame-header/header-controls/header-controls'
import HeaderProfile from '@/components/app/sigame-header/header-profile/header-profile'
export default {
	name: 'SigameHeader',
	components: {
		HeaderControls,
		HeaderProfile
	},
	computed: {
		controlsConfig: function() {
			return [
				{
					class: 'create',
					text: 'Создать игру',
					icon: '',
					url: '',
				},
				{
					class: 'create',
					text: 'Редактор паков',
					icon: '',
					url: '',
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	padding: 1rem;
	background: #010132;
}
.header__server-info {
	max-width: 500px;
	width: 100%;
}
.header__server-status {
	margin-bottom: .5rem;
	position: relative;
	padding-left: .9rem;
	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: .5rem; height: .5rem;
		border-radius: 50%;
	}
	&.header__server-status_online {
		&:before {
			background: #01D332;
		}
	}
}
.header__online {
	padding-left: .9rem;
}
</style>

<style lang="scss">
p, div {
	font-size: .9rem;
}
</style>