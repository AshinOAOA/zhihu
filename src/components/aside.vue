<template>
	<transition name="fadeaside">
		<div id="m-aside">
			<div class="content">
				<h1 class="title">
					<router-link to='/description'>
						<span @click="showaside">
							简介
						</span>
					</router-link>
				</h1>
				<ul>
					<li @click="showaside">
						<router-link to='/main'>
							<span class="title">日报首页</span>
							<div class="avatar"></div>
						</router-link>
					</li>
					<li v-for="(theme,index) in themes" @click="showaside" :key="index">
						<router-link :to="{name: 'themesDetial', params: {id: theme.id}}">
							<span class="title">{{theme.name}}</span>
							<div class="avatar"><img :src="theme.thumbnail" alt="" /></div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="bg" @click="showaside"></div>
	  	</div>
	</transition>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'

	export default {
		name: 'm-aside',
		data(){
			return {
				themes: []
			}
		},
		computed:mapGetters(['isshow']),
		created() {
			this.$http.get('https://bird.ioliu.cn/v1/?url=https://news-at.zhihu.com/api/4/themes')
			.then((response)=>{
				this.themes = response.data.others
			})
		},
		methods: mapActions(['showaside'])
	}
</script>

<style lang="scss">
	#m-aside{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
		display: flex;
		.content{
			overflow-y: auto;
			width: 7rem;
			min-height: 100%;
			flex-basis: 7rem;
			background: rgba(100,126,162,.9);
			position: relative;
			&>.title{
				font-size: .54rem;
				padding: 1rem .5rem;
				font-weight: normal;
				background: url(http://img.ivsky.com/img/tupian/pre/201704/10/dahai-005.jpg);
				background-size: 100%;
				span{
					color: #FFFFFF;
				}
				&:after{
		    	    content: "";
				    width: 5rem;
				    position: relative;
				    bottom: -.3rem;
				    display: block;
				    border: 2px solid #ffd300;
			    }
			}
			.about{
				height: 1.333rem;
				line-height: 1.333rem;
				.title{
					font-size: .44rem;
					color: #FFFFFF;
				}
			}
			ul{
				width: 100%;
				position: absolute;
				padding: 0rem 1rem;
				box-sizing: border-box;
				li{
					height: .8rem;
					line-height: .8rem;
					font-size: .44rem;
					margin-bottom: .4rem;
					background: transparent;
					a{
						.title{
							color: #FFFFFF;
							padding-right: 1.47rem;
						}
						.avatar{
							display: inline-block;
							width: .8rem;
							height: .8rem;
							float: right;
							img{
								width: 100%;
							}
						}
						&.router-link-active{
							.title{
								color: rgb(255,211,0);
							}
						}
					}
				}
			}
		}
		.bg{
			flex:1;
		}
	}
	/* ==过度动画== */
	.fadeaside-enter-active,
	.fadeaside-leave-active {
		transition: all .8s ease;
	}
	.fadeaside-enter,
	.fadeaside-leave-active {
		/*opacity: 0;*/
		transform: translateX(-100%);
	}
</style>
