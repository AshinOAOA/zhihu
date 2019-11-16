<template>
	<div class="swiper-container">
		<!--<div class="swiper-wrapper">
			<div v-for="(top,index) in tops" class="swiper-slide">
				<router-link :to="{name:'mainDetial',params:{id:top.id}}">
					<img :src="top.image">
					<div></div>
					<h3>{{top.title}}</h3>
				</router-link>
			</div>
		</div>-->
		<!-- 分页器 -->
		<!--<div class="swiper-pagination"></div>-->
		<mt-swipe :auto="4000" class="swiper-wrapper">
			<mt-swipe-item  v-for="(top,index) in tops" :key="index" >
				<router-link :to="{name:'mainDetial',params:{id:top.id}}">
					<img :src="top.image">
					<div></div>
					<h3>{{top.title}}</h3>
				</router-link>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		name: "m-swipe",
		props: {
			tops: {}
		},
		computed: {
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	
	.swiper-pagination-bullet-active {
		background: #fff;
	}
	.swiper-container{
		height: 100%;
		.swiper-wrapper{
			height: 100%;
			img{
				width: 100%;
				height: 100%;
			}
			h3{
				width: 70%;
			    color: #fff;
			    margin: 0;
			    font-size: .5rem;
			    line-height: 1rem;
			    right: 5%;
			    bottom: 2.6rem;
			    text-align: right;
			    position: absolute;
			    text-shadow: 1px 1px 10px rgba(0,0,0,.5);
			    &:before{
		    	    content: "";
				    width: 3rem;
				    bottom: -.6rem;
				    right: 0;
				    display: block;
				    position: absolute;
				    border: 2px solid #ffd300;
			    }
			}
		}
		.mint-swipe-indicators{
		    bottom: .1333rem;
    		left: 47%;
		    width: 95%;
		    text-align: right
		}
		.mint-swipe-indicator{
			width: .26667rem;
			height: .26667rem;
			opacity: .4;
			&.is-active{
			}
		}
	}
</style>