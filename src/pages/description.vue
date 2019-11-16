<template>
	<div id="description">
		<div class="header">
			<zhihuheader></zhihuheader>
		</div>
		<div class="wrapper">
			<div class="info-box">
				<p class="title">声明</p>
				<p class="text">
					本项目api来自知乎日报，版权归©知乎所有，项目中所有内容的一切权利属于知乎。
				</p>
			</div>
			<div class="info-box">
				<p class="title">技术栈</p>
				<p class="text">
					本项目基于vue2.0，使用vue-cli构建、webpack打包, 配合vue全家桶（vue、vuex、vue-router、axios）进行编码。
				</p>
				<!-- <p class="text">
					使用axios进行资源请求，使用JsonBird做跨域接口代理，使用meta:referer解决图片防盗链，使用sass进行预处理，使用饿了么ui组件mint-ui，使用flex+rem布局。
				</p> -->
				<p class="text">

				</p>
			</div>
			<!-- <div class="info-box">
				<p class="title">关于我</p>
				<p class="text">
					web前端（广州），wechat：846593490
				</p>
			</div> -->
			<div id="container"></div>
		</div>
	</div>
</template>

<script>
	import zhihuheader from '../components/zhihuheader'

	export default {
		name: 'description',
		components: {
			zhihuheader
		},
		data() {
			return {

			}
		},
		watch: {

		},
		created() {

		}
	}
</script>

<style scoped lang="scss">
	#description{
		.wrapper{
			margin: .8rem;
			margin-top:1.6rem;
			.info-box{
				margin-bottom: .6rem;
				.title{
					border-left: .08rem solid #ffd300;
					font-size: .42667rem;
					font-weight: 700;
					padding-left: .1333rem;
				}
				.text{
					text-indent: .8rem;
					font-size: .3733rem;
					line-height: .6667rem;
				}
			}
		}
	}
</style>
