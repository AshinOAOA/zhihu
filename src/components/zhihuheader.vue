<template>
	<div id="zhihuheader">
		<div class="info-wrapper">
			<h1 class="title"><i class="" @click="showaside()">=</i></h1>
		</div>
		<div class="item-bar">
			<div class="item">
				<router-link to='/main'>首页</router-link>
			</div>
			<div class="item">
				<router-link to='/themes'>专题</router-link>
			</div>
			<div class="item">
				<router-link to='/description'>NEXT</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'

	export default {
		name: 'zhihuheader',
		methods: mapActions(['showaside'])
	}
</script>

<style scoped lang="scss">
	#zhihuheader{
		/*margin-top: 1.44rem;*/
		.info-wrapper{
			width: 100%;
			padding:0 0;
		    position: fixed;
		    z-index: 1;
		    top: 0;
		    background: linear-gradient(0deg,transparent,rgba(0,0,0,.33) 80%);
			.title{
				font-size: 1.2rem;
				text-indent: 0.3rem;
				color: #FFFFFF;
			}
		}
		.item-bar{
			display: flex;
			border-bottom:.05333rem solid #f5f4f4;
			display: none;
			.item{
				flex: 1;
				text-align: center;
				a{
					display: block;
					font-size: .48rem;
					padding-top:.53333rem;
					padding-bottom:.4rem;
					&.router-link-active{
						font-weight: 700;
					}
				}
			}
		}
	}

</style>
