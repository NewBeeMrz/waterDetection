<template>
	<div class="homepage">
		<van-nav-bar style="background: deepskyblue;">
			<template #title>
				<span style="font-size: 1.5625rem;color: white;font-style: inherit;">水质监测</span>
			</template>
		</van-nav-bar>

		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="height: 480px;">
			<div class="container">
				<table style="margin-top: 20%;margin-left: 20%;">
					<tr>
						<th class="title">温度: </th>
						<th class="content">{{currentData.temperature}} ℃</th>
					</tr>
					<tr>
						<th class="title">浑浊度: </th>
						<th class="content">{{currentData.voltage}}</th>
					</tr>
					<tr>
						<th class="title">测量时间: </th>
						<th class="content">{{currentData.time}} 东八区</th>
					</tr>
				</table>
				<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
					实时监测数据
				</van-divider>
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
		PullRefresh
	} from 'vant';

	Vue.use(PullRefresh);

	import {
		Toast
	} from 'vant';

	Vue.use(Toast);

	import {
		Col,
		Row
	} from 'vant';

	Vue.use(Col);
	Vue.use(Row);

	import {
		Divider
	} from 'vant';

	Vue.use(Divider);

	export default {
		name: 'App-hompage',
		data() {
			return {
				count: 0,
				isLoading: false,
				currentData: []
			};
		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					var url = 'http://foryouweb.cn/temp/index.php';
					this.$axios.get(url).then(
						res => {
							this.currentData = res.data
							Toast('刷新成功');
							this.isLoading = false;
							this.count++;
						},
						err => {
							console.log(err)
							Toast.fail('请求失败请重试');
						}
					)
				}, 1000);
			},
		},
		created() {
			var url = 'http://foryouweb.cn/temp/index.php';
			this.$axios.get(url).then(
				res => {
					this.currentData = res.data
				},
				err => {
					console.log(err)
					Toast.fail('请求失败请重试');
				}
			)
		}
	}
</script>

<style scoped="scoped">
	.home {
		height: 40%
	}

	.title {
		text-align: right;
	}

	.content {
		text-align: left;
	}

	table tr {
		height: 40px;
	}
</style>
