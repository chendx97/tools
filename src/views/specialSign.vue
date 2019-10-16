<template>
	<div class="special-sign">
		<h3>HTML特殊符号对照表</h3>
		<div v-for="(item, idx) in signList" :key="idx">
			<h4>{{item.type}}</h4>
			<div class="sign-wrap">
				<div class="sign-head">
					<div>特殊符号</div>
					<div>编码</div>
					<div>特殊符号</div>
					<div>编码</div>
					<div>特殊符号</div>
					<div>编码</div>
					<div>特殊符号</div>
					<div>编码</div>
				</div>
				<div class="sign-body">
					<div class="sign-item" v-for="(sign, index) in item.list" :key="index">
						<div>{{sign.sign}}</div>
						<div>{{sign.code}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import signList from '@/assets/signList.json'
export default {
	name: 'specialSign',
	data () {
		return {
			signList
		}
	}
}
</script>

<style lang="stylus" scoped>
.special-sign {
	padding-left: 150px;

	h3 {
		text-align: center;
	}

	.sign-wrap {
		.sign-head {
			display: flex;
			justify-content: space-between;
			border: 1px solid grey;

			div {
				padding: 10px 0;
				width: 12.5%;
				text-align: center;
				border-right: 1px solid grey;

				&:last-child {
					border: none;
				}
			}
		}

		.sign-body {
			display: flex;
			flex-wrap: wrap;

			.sign-item {
				width: 25%;
				display: flex;
				box-sizing: border-box;
				border-left: 1px solid grey;
				border-bottom: 1px solid grey;

				div {
					flex: 1;
					text-align: center;
					padding: 5px 0;
				}

				&:nth-child(4n) {
					border-right: 1px solid grey;
					width: calc(25%) !important;
				}

				&:nth-child(4n + 2) {
					width: calc(25% - 1px);
				}

				&:nth-child(4n + 3) {
					width: calc(25% + 1px);
				}

				&:last-child {
					border-right: 1px solid grey;
					width: calc(25% + 1px);
				}
			}
		}
	}
}
</style>
