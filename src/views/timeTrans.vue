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
		<div class="mistiming">
			<h4>时间差计算</h4>
			<p>
				起止时间：
				<el-date-picker
					v-model="choosDate"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
				></el-date-picker>
				<el-time-picker
					is-range
					v-model="chooseTime"
					range-separator="至"
					start-placeholder="开始时间"
					end-placeholder="结束时间"
					placeholder="选择时间范围"
				></el-time-picker>
				<el-button @click="calculateDiff" type="primary">计算</el-button>
			</p>
			<p class="result">{{missTime}}</p>
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
			resultTimeStamp: '',
			choosDate: '',
			chooseTime: '',
			missTime: ''
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
		},
		calculateDiff () {
			let time = (this.choosDate[1] - this.choosDate[0]) + (this.chooseTime[1] - this.chooseTime[0])
			let day = (time / (1000 * 60 * 60 * 24)).toFixed(0)
			time = time % (1000 * 60 * 60 * 24)
			let hour = (time / (1000 * 60 * 60)).toFixed(0)
			time = time % (1000 * 60 * 60)
			let min = (time / (1000 * 60)).toFixed(0)
			time = time % (1000 * 60)
			let second = (time / 1000).toFixed(0)
			this.missTime = `${day}天${hour}小时${min}分${second}秒`
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

	.mistiming {
		.el-range-editor {
			width: 230px;
			margin-right: 10px;
		}

		.result {
			border: 1px solid gray;
			height: 40px;
			width: 400px;
			transform: translateX(100px);
			border-radius: 4px;
			text-align: center;
			line-height: 40px;
		}
	}
}
</style>
