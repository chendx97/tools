<template>
	<div class="sideBar">
		<el-menu>
			<el-menu-item v-for="(menu, index) in menuList" :key="index" @click="switchMenu(index)">
				<span :class="`iconfont ${menu.icon}`"></span>
				<span slot="title">{{menu.title}}</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'sideBar',
	data () {
		return {
			menuList: [
				{
					title: '颜色值转换',
					icon: 'icon-yanse',
					url: '/color'
				},
				{
					title: '生成随机密码',
					icon: 'icon-iconfontmima',
					url: '/pwd'
				},
				{
					title: '时间转换',
					icon: 'icon-shijian',
					url: '/time'
				},
				{
					title: '特殊符号',
					icon: 'icon-fuhao',
					url: '/specialSign'
				},
			]
		}
	},
	methods: {
		switchMenu (idx) {
			this.$router.push(this.menuList[idx].url)
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '../../public/icon/iconfont.css';

.sideBar {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 150px;
	height: 100vh;

	.el-menu-item {
		overflow: hidden;
		text-overflow: ellipsis;

		.iconfont {
			margin-right: 2px;
		}
	}
}
</style>