<template>
	<div id="themes">
		<!-- <zhihuheader></zhihuheader> -->
		<transition name="homeTransition">
			<div class="item-content" v-show="response">
				<div class="others">
					<ul>
						<li v-for="(k,index) in others" class="">
							<router-link :to="{name: 'themesDetial', params: {id: k.id}}">
								<div class="item">
									<div class="thum">
										<img :src="k.thumbnail"/>
									</div>
									<div class="info">
										<p class="name">{{k.name}}</p>
										<p class="description">{{k.description}}</p>
									</div>
								</div>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import zhihuheader from '../components/zhihuheader'

	export default {
		name: 'themes',
		components: {
			zhihuheader
		},
		data() {
			return {
				response: false,
				others: []
			}
		},
		created() {
			this.$http.get('api/themes')
			.then((response)=>{
				this.response = true
				this.others = response.data.others
			})
		}
	}
</script>

<style scoped lang="scss">
	#themes{
		.item-content{
			margin:0 .8rem;
			.others{
				.item{
					display: flex;
					align-items: center;
					padding: .4rem 0;
					border-bottom: .0267rem  solid #efefef;
					.thum{
						flex: 0 0 1.0667rem;
						height: 1.0667rem;
						border-radius: 50%;
						overflow:hidden;
						margin-right:.4rem;
						img{
							width: 100%;
						}
					}
					.info{
						.name{
							font-size: .32rem;
							font-weight: 700;

						}
						.description{
							font-size: .32rem;
						}
					}
				}
			}
		}
		@media only screen and (min-width: 800px) {
			.item-content{
				width: 1000px !important;
				margin: 0 auto !important;
			}
		}
		/* ==过度动画== */
		.homeTransition-enter-active,
		.homeTransition-leave-active {
			transition: all .8s ease;
		}
		.homeTransition-enter,
		.homeTransition-leave-active {
			opacity: 0;
			transform: translateY(80px);
		}
	}
</style>
