<template>
	<div id="app">
		<sideBar v-if="isSideVisible"></sideBar>
		<router-view />
	</div>
</template>

<script>
import sideBar from './components/sideBar'
export default {
	name: 'app',
	components: {
		sideBar
	},
	data () {
		return {
			isSideVisible: true
		}
	},
	watch: {
		$route (route) {
			if (route.name === 'notFound') {
				this.isSideVisible = false
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
body {
	margin: 0px;
}
</style>
