<template>
	<div class="pwd">
		<div>
			<p>所用符号</p>
			<el-checkbox-group v-model="selectedList" @change="handleChange">
				<el-checkbox
					v-for="(item, index) in checkList"
					:label="index + 1"
					:key="index"
					:disabled="judgeDiasbled(index + 1)"
				>{{item.label}}</el-checkbox>
			</el-checkbox-group>
			<el-input
				class="sign-text"
				v-if="selectedList.includes(6)"
				v-model="customSign"
				placeholder="请输入自定义符号"
			/>
		</div>
		<div>
			<p>密码位数</p>
			<el-input-number v-model="pwdCount" :step="1" size="mini"></el-input-number>
		</div>
		<el-button type="primary" size="mini" @click="generateResult">生成</el-button>
		<p class="pwd-text">{{pwdVal}}</p>
	</div>
</template>

<script>
export default {
	name: 'pwd',
	data () {
		return {
			checkList: [
				{
					label: '数字',
					type: 1
				},
				{
					label: '字母',
					type: 2
				},
				{
					label: '其他符号',
					type: 3
				},
				{
					label: '小写',
					type: 4
				},
				{
					label: '大写',
					type: 5
				},
				{
					label: '自定义',
					type: 6
				}
			],
			selectedList: [],
			pwdCount: 6,
			pwdVal: '',
			customSign: ''
		}
	},
	methods: {
		handleChange () {
			if (!this.selectedList.includes(6)) {
				this.customSign = ''
			}
		},
		judgeDiasbled (index) {
			if (this.selectedList.includes(6) && index !== 6) {
				return true
			}
			if (this.selectedList.length && !this.selectedList.includes(6) && index === 6) {
				return true
			}
			if ([4, 5].includes(index) && !this.selectedList.includes(2)) {
				return true
			}
			if ((this.selectedList.includes(4) && index === 5) || this.selectedList.includes(5) && index === 4) {
				return true
			}
			return false
		},
		generateResult () {
            /**
                * 33~47：!~/
                * 48~57：0~9
                * 58~64：:~@
                * 65~90：A~Z
                * 91~96：[~`
                * 97~122：a~z
                * 123~127：{~
            */
			this.pwdVal = ''
			if ((!this.selectedList.length && !this.customSign) || !this.pwdCount) {
				return
			} else if (this.customSign) {
				for (let i = 0; i < this.pwdCount; i++) {
					let num = Math.floor(Math.random() * this.customSign.length)
					this.pwdVal += this.customSign[num]
				}
			} else {
				for (let i = this.pwdCount; i > 0; i--) {
					let num = Math.floor((Math.random() * 94) + 33)
					let hasNum = this.selectedList.includes(1)
					let hasChar = this.selectedList.includes(2)
					let hasSymbol = this.selectedList.includes(3)
					if (
						(
							(hasNum == "0") && ((num >= 48) && (num <= 57))
						) || (
							(hasChar == "0") && ((
								(num >= 65) && (num <= 90)
							) || (
									(num >= 97) && (num <= 122)
								))
						) || (
							(hasSymbol == "0") && ((
								(num >= 33) && (num <= 47)
							) || (
									(num >= 58) && (num <= 64)
								) || (
									(num >= 91) && (num <= 96)
								) || (
									(num >= 123) && (num <= 127)
								))
						)
					) {
						i++
						continue
					}
					this.pwdVal += String.fromCharCode(num)
				}
				if (this.selectedList.includes(4)) {
					this.pwdVal = this.pwdVal.toLowerCase()
				} else if (this.selectedList.includes(5)) {
					this.pwdVal = this.pwdVal.toUpperCase()
				}
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.pwd {
	padding-left: 150px;

	.el-input-number--mini {
		width: 100px;
	}

	.pwd-text {
		border: 1px solid #ddd;
		width: 300px;
		height: 26px;
		padding: 4px 0;
		border-radius: 5px;
	}

	.el-button {
		margin-top: 20px;
	}

	.sign-text {
		width: 300px;
		margin-top: 10px;
	}
}
</style>