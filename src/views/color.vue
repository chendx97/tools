<template>
	<div class="color">
		<h3>颜色值转换</h3>
		<div class="format-wrap">
			<div class="format-item">
				<p>rgba格式</p>
				<el-input placeholder="如255, 0, 0, 1" size="small" />
				<el-button size="small">转换</el-button>
			</div>
			<div class="format-item">
				<p>十六进制格式</p>
				<el-input placeholder="如#ff0000" size="small" />
				<el-button size="small">转换</el-button>
			</div>
			<div class="format-item">
				<p>常量名格式</p>
				<el-input placeholder="如red" size="small" />
				<el-button size="small">转换</el-button>
			</div>
			<div class="format-item">
				<p>预览</p>
				<div class="preview"></div>
			</div>
		</div>
		<div class="list-wrap">
			<div class="color-item" v-for="(color, index) in colorList" :key="index">
				<div class="small-preview" :style="`background: ${color.constant}`"></div>
				<span>{{color.constant}}</span>
				<span>{{color.hexadecimal}}</span>
				<span>{{color.rgbaVal}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'color',
	data () {
		return {
			colorList: [
				{
					constant: 'Aliceblue',
					hexadecimal: '#F0F8FF',
					rgbaVal: '240,248,255'
				},
				{
					constant: 'antiquewhite',
					hexadecimal: '#faebd7',
					rgbaVal: '250,235,215'
				},
				{
					constant: 'aqua',
					hexadecimal: '#00ffff',
					rgbaVal: '0,255,255'
				},
				{
					constant: 'aquamarine',
					hexadecimal: '#7fffd4',
					rgbaVal: '127,255,212'
				},
				{
					constant: 'azure',
					hexadecimal: '#f0ffff',
					rgbaVal: '240,255,255'
				},
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
.color {
	max-width: 1000px;
	padding-left: 150px;

	.format-wrap {
		display: flex;
		justify-content: space-between;
		padding: 0 20px;

		.format-item {
			.el-input {
				width: 200px;
				margin-right: 5px;
			}

			.preview {
				width: 100px;
				height: 100px;
				border: 1px solid #eee;
			}
		}
	}

	.list-wrap {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.color-item {
			display: flex;
			font-size: 14px;
			margin-top: 20px;
			min-width: 400px;

			.small-preview {
				width: 40px;
				height: 20px;
			}

			span {
				padding: 0 10px;

				&:nth-child(2) {
					width: 100px;
				}
			}
		}
	}
}
</style>