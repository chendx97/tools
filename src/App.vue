<template>
	<div id="app">
		<sideBar v-if="isSideVisible"></sideBar>
		<router-view />
		<a class="beian" target="_blank" href="http://www.beian.miit.gov.cn">浙ICP备19027404号</a>
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
#app {
	padding-bottom: 20px;
}
.beian {
	text-align: center;
    display: block;
    font-size: 14px;
    text-decoration: none;
	position: fixed;
    bottom: 0px;
	background: #fff;
    width: 100%;
}
</style>
<style lang="stylus">
body::-webkit-scrollbar {
	/* 滚动条整体样式 */
	width: 10px; /* 高宽分别对应横竖滚动条的尺寸 */
	height: 1px;
}

body::-webkit-scrollbar-thumb {
	/* 滚动条里面小方块 */
	border-radius: 10px;
	background-color: skyblue;
	background-image: -webkit-linear-gradient(
		45deg,
		rgba(255, 255, 255, 0.2) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 255, 255, 0.2) 50%,
		rgba(255, 255, 255, 0.2) 75%,
		transparent 75%,
		transparent
	);
}

body::-webkit-scrollbar-track {
	/* 滚动条里面轨道 */
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	background: #ededed;
	border-radius: 10px;
}
</style>