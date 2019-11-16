<template>
  <div id="app">
      <leftAside class="aside" v-show="isshow"></leftAside>
	  <keep-alive>
			<router-view></router-view>
	  </keep-alive>
  </div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	import { Tabbar, TabItem } from 'mint-ui';
	import zhihuheader from './components/zhihuheader'
	import leftAside from './components/aside'
	export default {
	  name: 'app',
	  components: {
	  	zhihuheader,leftAside
	  },
	  deta() {
	  	return {
	  		themes : []
	  	}
	  },
		computed:mapGetters(['isshow']),
		methods: {
            
		}
	}
</script>

<style lang="scss">
	body,html{
		font-family: "Microsoft YaHei", "Arial Narrow", sans-serif;
	}
	*{
		margin: 0;
		padding: 0;
	}
	a{
		color: #333;
		text-decoration: none;
	}
	li{
		list-style: none;
	}
	#app {
		overflow: hidden;
	}
    // 过渡动画 - 淡入淡出
    .show-enter-active,
	.show-leave-active {
		transition: all .3s ease;
	}
	.show-enter,
	.show-leave-active {
		opacity: 0;
	}
</style>
