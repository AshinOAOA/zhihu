<template lang="html">
    <div class="detailheader">
        <h1 class="title">
            <a class="fa fa-arrow-left" href="javascript:history.back();"></a>
            知乎专栏
        </h1>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .detailheader{
        width: 100%;
        padding:.25rem 0;
        position: fixed;
        top: 0;
        background-color: rgba(255,255,255,.85);
        box-shadow: 0 0 .2667rem rgba(0, 0, 0, 0.5);
        .title{
            font-size: .48rem;
            text-align: center;
            position: relative;
            a{
                position: absolute;
                left: 0;
                top: -.2rem;
                padding: .34rem;
            }
        }
    }
</style>
