<template>
	<transition name="fadeIN">
		<div id="scroll-top" class="" @click="gotop()" v-show="showscroll">
			<span class="">TOP</span>
		</div>
	</transition>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'

	export default {
		name:'scroll-top',
		data(){
			return {
				showscroll:false,
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		},
		computed:{

		},
		methods:{
			handleScroll(){
				this.showscroll = window.scrollY > 350;
			},
			gotop(){
				let leave = document.body.scrollTop;
				let target = 0;
				let timer = null;

				timer = setInterval(function(){
					leave = parseInt(leave + (target - leave) / 10);
					document.body.scrollTop = leave;
					if(leave === target){
						clearInterval(timer)
					}
				},15)
			}
		}
	}
</script>

<style lang="scss">
	#scroll-top{
		position: fixed;
		bottom: .48rem;
		right: .48rem;
		line-height: .6rem;
		width: 1rem;
		height: 1rem;
		background: rgba(161,163,174,.6);
		border-radius: 50%;
		text-align: center;
		span{
			font-size: .4rem;
			color: rgba(255,255,255,.8);
		}
	}
	/* ==过度动画== */
	.fadeIN-enter-active,
	.fadeIN-leave-active {
		transition: all .8s ease;
	}
	.fadeIN-enter,
	.fadeIN-leave-active {
		opacity: 0;
		transform: translateX(40px);
	}
</style>
