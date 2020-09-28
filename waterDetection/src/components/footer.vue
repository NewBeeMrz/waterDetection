<template>
	<van-tabbar route>
		<van-tabbar-item replace to="/" >
			<span class="iconfont home">&#xe609;</span><br/>
			<span>实时监测</span>
		</van-tabbar-item>
		<van-tabbar-item replace to="/historylist">
			<span class="iconfont order">&#xe608;</span><br/>
			<span>历史记录</span>
		</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	import Vue from 'vue';
	import {
		Tabbar,
		TabbarItem
	} from 'vant';
	Vue.use(Tabbar);
	Vue.use(TabbarItem);
	export default {
		name: 'App-footer',
		data() {
			return {
				tabnaeNum: 0
			}
		}
	}
</script>

<style scoped="scoped">
	.iconfont {
		font-size: 1.5rem;
	}
</style>
