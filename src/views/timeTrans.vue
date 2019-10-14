<template>
	<div class="time-wrap">
		<div class="time-item current-time">
			<el-button type="primary" @click="getCurrentTime">获取当前时间</el-button>
			<span>{{currentTime}}</span>
			<span>{{Number(currentTime)}}</span>
		</div>
		<div class="time-item">
			<span>时间转换为时间戳：</span>
			<el-input clearable v-model="defaultTime"></el-input>
			<el-button type="primary" class="btn-transfer" @click="transferToStamp">></el-button>
			<el-input v-model="resultTime"></el-input>
		</div>
		<div class="time-item">
			<span>时间戳转换为时间：</span>
			<el-input clearable v-model="defaultTimeStamp"></el-input>
			<el-button type="primary" class="btn-transfer" @click="transferToDefault">></el-button>
			<el-input v-model="resultTimeStamp"></el-input>（北京时间）
		</div>
	</div>
</template>

<script>
export default {
	name: 'timeTrans',
	data () {
		return {
			currentTime: new Date(),
			defaultTime: new Date().toLocaleString('chinese', { hour12: false }),
			defaultTimeStamp: Number(new Date()),
			resultTime: '',
			resultTimeStamp: ''
		}
	},
	methods: {
		getCurrentTime () {
			this.currentTime = new Date()
		},
		transferToStamp () {
			if (!this.defaultTime) {
				this.$message.warning('请先输入日期数据')
				return
			}
			let result = Number(new Date(this.defaultTime))
			if (!result) {
				this.$message.error('请先输入正确的日期数据')
				return
			}
			this.resultTime = result
		},
		transferToDefault () {
			let date = new Date(parseInt(this.defaultTimeStamp))
			this.resultTimeStamp = date.toLocaleString('chinese', { hour12: false })
		}
	}
}
</script>

<style lang="stylus" scoped>
.time-wrap {
	padding-left: 150px;

	.time-item {
		margin-bottom: 20px;

		.el-input {
			width: 200px;
		}

		.btn-transfer {
			margin: 0px 10px;
		}

		&.current-time {
			span {
				margin: 0 20px;
			}
		}
	}
}
</style>
