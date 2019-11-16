<template>
    <div id="main">
        <zhihuheader></zhihuheader>
        <transition name="homeTransition">
            <div class="item-content" v-show="response">
                <div class="swiper-box">
                    <swiper :tops="top_stories">
                    </swiper>
                </div>
                <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
                    <div class="storiesList">
                        <div v-for="(data,index) in storiesList" class="stories" :key="index">
                            <p class="time">{{data.date | formatDate}}</p>
                            <ul>
                                <li v-for="(k,index) in data.stories" class="" :key="index">
                                    <router-link :to="{name:'mainDetial',params:{id:k.id}}">
                                        <div class="item">
                                            <div class="thum">
                                                <img :src="k.images"/>
                                            </div>
                                            <div class="info">
                                                <p>{{k.title}}</p>
                                            </div>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </mt-loadmore>
            </div>
        </transition>
        <scrolltop></scrolltop>
    </div>
</template>

<script>
	import { Loadmore,Indicator } from 'mint-ui';
	import zhihuheader from '../components/zhihuheader'
	import scrolltop from '../components/scrolltop'
	import swiper from '../components/swiper'

	export default {
		name: 'main',
		components: {
			zhihuheader,swiper,scrolltop
		},
		data() {
			return {
				response: false,
				storiesList: [],
				stories: {},
				top_stories: {},
				day: null,
				t:0
			}
		},
		created() {
			Indicator.open();

//			this.$http.get('api/news/latest')
			this.$http.get(`${this.HOST}https://news-at.zhihu.com/api/4/news/latest`)
			.then((response)=>{
				Indicator.close();
				this.response = true
				this.top_stories = response.data.top_stories
				this.storiesList.unshift(response.data)
			})
			+function(){
				Date.prototype.Format = function (fmt) {
				    var o = {
				        "M+": this.getMonth() + 1, //月份
				        "d+": this.getDate(), //日
				        "h+": this.getHours(), //小时
				        "m+": this.getMinutes(), //分
				        "s+": this.getSeconds(), //秒
				        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
				        "S": this.getMilliseconds() //毫秒
				    };
				    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
				    for (var k in o)
				    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				    return fmt;
				}
				var date= new Date().Format("yyyy-MM-dd");//Format("输入你想要的时间格式:yyyy-MM-dd,yyyyMMdd")
			}()
		},
		filters: {
			formatDate(time) {
				let yy = time.slice(0,4)
				let mm = time.slice(4,6)
				let dd = time.slice(6)

				return `${yy}-${mm}-${dd}`
			}
		},
		methods: {
			loadTop() {
				Indicator.open();
				this.$http.get(`${this.HOST}https://news-at.zhihu.com/api/4/news/latest`)
				.then((response)=>{
					this.storiesList.shift()
					this.storiesList.unshift(response.data)
					this.$refs.loadmore.onTopLoaded();
					Indicator.close();
				})
			},
			loadBottom() {
				let now = new Date();
				now.setDate(now.getDate()-this.t)
				let time = now.Format("yyyyMMdd");

				Indicator.open();
				this.$http.get('https://news-at.zhihu.com/api/4/news/before/'+time)
				.then((response)=>{
					this.storiesList.push(response.data)
					this.t = this.t+1;
					this.$refs.loadmore.onBottomLoaded();
					Indicator.close();
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../assets/css/mixin";

	.mint-loadmore-text{
		font-size: $f10px !important;
	}
	#main{
		.item-content{
			opacity: 1;
			.swiper-box{
				height: $f318px;
			}
			.storiesList{
				margin: $f27px;
				margin-bottom: 0;
				.stories{
					.time{
						font-size: $f18px;
						font-weight: 700;
						color: grey;
						text-indent: $f20px;
						margin: $f20px 0;
						border-left: $f5px solid #efefef ;
					}
					.item{
						display: flex;
						align-items: center;
						border-bottom: $f1px solid #efefef;
						padding: $f12_5px;
						.thum{
							flex: 0 0 $f60px;
							height: $f60px;
							border-radius: $f5px;
							overflow:hidden;
							margin-right:$f16_5px;
							img{
								width: 100%;
								vertical-align: bottom;
							}
						}
						.info{
							flex: 1;
							p{
								font-size: $f14px;

							}
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
