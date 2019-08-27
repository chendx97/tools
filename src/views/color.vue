<template>
	<div class="color">
		<h3>颜色值转换</h3>
		<div>
			<div>
				<p>rgba格式</p>
				<el-input placeholder="如255, 0, 0, 1" />
				<el-button>转换</el-button>
			</div>
			<div>
				<p>十六进制格式</p>
				<el-input placeholder="如#ff0000" />
				<el-button>转换</el-button>
			</div>
			<div>
				<p>预览</p>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'color'
}
</script>

<style lang="stylus" scoped>
.color {
	padding-left: 150px;
}
</style>