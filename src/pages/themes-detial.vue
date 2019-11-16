<template>
	<transition name="show">
		<div id="themes-detial">
			<detailheader></detailheader>
			<transition name="fadeIMG">
				<div class="bg-wrap" v-show="showBanner">
					<img :src="data.image"/>
				</div>
			</transition>
			<div class="content">
				<div class="info">
					<h2 class="name">{{data.name}}</h2>
					<p class="description">{{data.description}}</p>
					<div class="editor-wrap">
						<div class="title">主编：</div>
						<ul>
							<li class="editor" v-for="(editor,index) in data.editors">
								<a :href="editor.url">
									<span class="avatar"><img :src="editor.avatar"/></span>
									<!--<span class="name">{{editor.name}}</span>-->
								</a>
							</li>
						</ul>
					</div>
				</div>
				<ul class="list">
					<li class="stories" v-for="(k,index) in data.stories">
						<router-link :to="{name:'mainDetial',params:{id:k.id}}">
							<div class="item">
								<div class="img" v-show="k.images">
									<img :src="k.images"/>
								</div>
								<div class="title">
									<p>{{k.title}}</p>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
			<scrolltop></scrolltop>
		</div>
	</transition>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import scrolltop from '../components/scrolltop'
	import detailheader from '../components/detailheader'

	export default {
		name: 'themes-detial',
		components: {
			scrolltop,detailheader
		},
		data() {
			return {
				showBanner: false,
				data: {}
			}
		},
		activated() {
			Indicator.open();
			document.body.scrollTop = 0;
			let id = this.$route.params.id;
			this.$http.get('https://bird.ioliu.cn/v1/?url=https://news-at.zhihu.com/api/4/theme/'+id)
			.then(response=>{
				this.data = response.data
				if(response.data.image){
					this.showBanner = true
				}
				Indicator.close();
			})
		},
		deactivated() {
			this.showBanner = false
		}
	}
</script>

<style lang="scss" scoped>
	#themes-detial{
		padding-top: 1.1666rem;
		.bg-wrap{
			max-height: 10.6667rem;
			overflow: hidden;
			img{
				width: 100%;
			}
		}
		.content{
			margin: .4rem .8rem 0 .8rem;
			.info{
				.name{
					font-size: .5333rem;
				}
				.description{
					border-left: .08rem solid #efefef;
					margin: .2667rem;
					padding-left: .42667rem;
					font-size: .42267rem;
				}
				.editor-wrap{
					display: flex;
					align-items: center;
					border-bottom: .02667rem solid #EFEFEF;
					.title{
						flex-basis: 1.334rem;
						font-size: .3733rem;
						font-weight: 700;
						color: grey;
					}
					ul{
						flex: 1;
						.editor{
							display: inline-block;
							width: .9333rem;
							height:.9333rem;
							margin-right: .16rem;
							.avatar{
								display: block;
								width: 100%;
								height: 100%;
								overflow:hidden;
								border-radius: 50%;
								img{
									width: 100%;
									vertical-align: top;
								}
							}
						}
					}
				}
			}
			.list{
				.stories{
					.item{
						display: flex;
						align-items: center;
						padding: .26667rem 0;
						border-bottom: .02667rem solid #EFEFEF;
						.img{
							flex-basis: 1.333rem;
							height: 1.333rem;
							border-radius:.16rem;
							overflow:hidden;
							img{
								width: 100%;
								height: 100%;
							}
						}
						.title{
							flex: 1;
							padding-left: .4rem;
							font-size: .42667rem;
						}
					}
				}
			}
		}
	}
	@media only screen and (min-width: 800px) {
		.content{
			width: 1000px !important;
			margin: 0 auto !important;
		}
	}

	/* ==过度动画== */
	.fadeIMG-enter-active,
	.fadeIMG-leave-active {
		transition: all 1s ease-out;
	}
	.fadeIMG-enter,
	.fadeIMG-leave-active {
		opacity: 0;
		transform: scale(1.1,1.1);
	}

	.fadein-enter-active,
	.fadein-leave-active {
		transition: all .5s linear;
	}
	.fadein-enter,
	.fadein-leave-active {
		opacity: 0;
		// transform: translateX(100%);
	}
</style>
