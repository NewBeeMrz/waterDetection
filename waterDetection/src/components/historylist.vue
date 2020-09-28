<template>
	<div class="historylist">
		<van-nav-bar style="background: deepskyblue;">
			<template #title>
				<span style="font-size: 1.5625rem;color: white;font-style: inherit;">水质监测</span>
			</template>
		</van-nav-bar>
		<div class="btn">
			<van-button type="info" size="small" @click="change()">{{msg}}</van-button>
		</div>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="height: 480px;">
			<div v-show="isdegital">
				<van-cell v-for="(data,index) in dataList.rows" :key="index">
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<span class="custom-title">温度：{{data.temperature}} ℃ 浑浊度：{{data.voltage}}</span>
					</template>

					<template #label>
						<span class="custom-title" style="text-align: right;">{{data.time}}</span>
					</template>
				</van-cell>
				<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
					日平均值
				</van-divider>
			</div>

			<div style="margin-top: 20px;">
				<ve-line :data="dataList" :settings="chartSettings" v-show="!isdegital" class="line" width="300px" height="300px"></ve-line>
			</div>

		</van-pull-refresh>
	</div>
</template>
<script>
	import Vue from 'vue';
	//Navbar
	import {
		NavBar
	} from 'vant';
	Vue.use(NavBar);

	import {
		Toast
	} from 'vant';

	Vue.use(Toast);

	import {
		Cell,
		CellGroup
	} from 'vant';

	Vue.use(Cell);
	Vue.use(CellGroup);

	import {
		Divider
	} from 'vant';

	Vue.use(Divider);

	import {
		PullRefresh
	} from 'vant';

	Vue.use(PullRefresh);

	import {
		Button
	} from 'vant';

	Vue.use(Button);

	export default {
		name: 'App-historyList',
		data() {
			this.chartSettings = {
				labelMap: {
					'voltage': '浑浊度',
					'temperature':'温度'
				},
				axisSite: { right: ['voltage'] },
				yAxisType: ['normal', 'normal'],
				yAxisName: ['摄氏度', '浑浊度']
			}
			return {
				dataList: {
					columns: ['time','temperature','voltage'],
					rows: []
				},
				isLoading: false,
				msg: '数据可视化',
				isdegital: true,
			}
		},
		created() {
			var url = 'http://foryouweb.cn/temp/index.php?method=history';
			this.$axios.get(url).then(
				res => {
					this.dataList.rows = res.data
				},
				err => {
					console.log(err)
					Toast.fail('请求失败请重试');
				}
			)
		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					var url = 'http://foryouweb.cn/temp/index.php?method=history';
					this.$axios.get(url).then(
						res => {
							this.dataList.rows = res.data
							Toast('刷新成功');
							this.isLoading = false;
						},
						err => {
							console.log(err)
							Toast.fail('请求失败请重试');
						}
					)
				}, 1000);
			},
			change() {
				if (this.isdegital) {
					this.isdegital = false;
					this.msg = "数据列表";
				} else {
					this.isdegital = true;
					this.msg = "数据可视化"
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.historylist {
		height: 40%
	}

	.btn {
		margin-top: 20px;
		margin-bottom: 10px;
		text-align: right;
		margin-right: 5%;
	}

	.line {
		margin: 0 auto;
	}
</style>
