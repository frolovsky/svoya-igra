<template>
	<div class="header__controls-list">
		<router-link 
			class="header__controls-item"
			tag="div" 
			v-for="control in controlsConfig"
			:key="control.to" 
			:to="control.url"
		>
			{{ control.text }}
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'SigameHeaderControls',
	props: {
		controlsConfig: {
			type: Array,
			default: []
		} 
	}
}
</script>

<style lang="scss" scoped>
.header__controls-list {
	display: flex;
}
.header__controls-item {
	cursor: pointer;
	margin-right: 2rem;
	&:last-child {
		margin-right: 0;
	}
}
</style>