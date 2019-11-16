<template>
    <div class="article hasheader">
        <div class="banner">12121212</div>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
            <div class="content">
                <div class="item" v-for="(item,i) in artData" :key="i" @click="navto(1111)">
                    <div class="img">
                        <img src="http://www.17wgd.com/uploads/article/s/5995328d6b5f8.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title txtof">百年大展之后 广东美术如何再创…</p>
                        <div class="txt">若论当下投资热点，只有收藏。俗话说，盛世藏古董，乱世买黄金。如今，…</div>
                        <p class="time">2017-08-17</p>
                    </div>
                </div>
            </div>
        </mt-loadmore>
        <!-- <shopfooter></shopfooter> -->
    </div>
</template>

<script>
    import { Indicator,Loadmore} from 'mint-ui'
    export default {
        components: {
            Loadmore
        },
        data() {
            return {
                artData:[
                    1,1,1,1,1,1,1
                ]
            }
        },
        methods:{
            navto(id){
                this.$router.push({name:'articleDetail',params:{artid:id}})
            },
            loadTop() {  //刷新
                // this.artData.push(1);
                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom() {  //加载
                Indicator.open('加载中...');
                setTimeout(()=>{
                    this.artData.push(1);
                    if(this.artData.length>10){this.artData.pop()}
                    this.$refs.loadmore.onBottomLoaded();
                    Indicator.close();
                },1000)
            },
            // loadMore() {
            //     this.loading = true;
            //     setTimeout(() => {
            //         let last = this.artData[this.artData.length - 1];
            //         for (let i = 1; i <= 10; i++) {
            //         this.artData.push(last + i);
            //         }
            //         this.loading = false;
            //     }, 2500);
            // }
        },
        created() {
            // Indicator.open('加载中...');
        }
    }
</script>

<style lang="scss" scoped>
.banner{
    height: 300px;
    background: #000;
}
    .article{
        font-size: 16px;
        .content{
            min-height: 500px;
        }
        .item{
            display: flex;
            border-bottom: 0.0267rem dotted #e6e6e6;
            align-items: center;
            padding: 0.2667rem;
            background: #fff;
            .img{
                width: 2.5333rem;
                flex-basis: 2.5333rem;
                height: 2.5333rem;
                margin-right: 0.2667rem;
                img{
                    width: 2.5333rem;
                    height: 2.5333rem;
                }
            }
            .info {
                width: 6.6667rem;
                flex-basis: 6.6667rem;
                height: 2.5333rem;
                position: relative;
                .title{
                    margin-bottom: 0.2667rem;
                }
                .txt{
                    height: 1.3333rem;
                    font-size: 0.32rem;
                    color: #ccc;
                    line-height: 0.5867rem;
                }
                .time{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
    }
</style>
