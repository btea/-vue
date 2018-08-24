<template>
    <section class="main">
        <p>我来了{{name}}</p>
        <div class="one">
            this ia box
        </div>
        <div class="two" v-on:click="get">
            23333333
        </div>
        <input type="text" disabled>
        <Banner> </Banner>
        <div>
            <router-link to="/home">Home</router-link>
            <!-- <router-link to="/about">About</router-link> -->
            <!-- <span @click="pushRoute">About</span> -->
            <a href="/#/about">About</a>
            <!-- 模糊匹配，动态路由 -->
            <router-link to="/user/123">User123</router-link>
            <router-link to="/user/456">User456</router-link>
        </div>
        <router-view></router-view>
        <!-- <router-view></router-view> -->
        <!-- <router-view></router-view> -->
        <!-- 当有多个视图元素的时候，对应的组件内容渲染多次 -->


        <!-- 命名视图 -->
        <!-- <router-view name="z"></router-view> -->

        <div class="slide">一个滑动框</div><br>
        <div class="left">从左往右滑</div><br>
        <div class="right">从右往左滑</div>
    </section>
</template>
<script>
import Banner from './banner'

export default {
    data(){
        return {
            name: 'webpack + vue'
        }
    },
    methods: {
        get: function(){
            alert(123);
        },
        pushRoute: function(){
            this.$router.push('/about');
        }
    },
    components: {
        Banner
    }
}
</script>
<style scoped>
.main p{
    color: #6cf;
}
.slide,.left,.right{
    position: relative;
    width: 80px;
    text-align: center;
}
.slide::after{
    content: '';
    position: absolute;
    left: 51%;
    right: 51%;
    top: 0;
    height: 3px;
    background: #6cf;
    transition: all 0.5s;
}
.slide:hover::after{
    left: 0;
    right: 0;
}

.left::after{
    content: '';
    position: absolute;
    left: 0;
    right: 100%;
    top: 0;
    height: 3px;
    background: #6cf;
    transition: all 0.5s;
}
.left:hover::after{
    right: 0%;
}

.right::after{
    content: '';
    position: absolute;
    left: 100%;
    right: 0;
    top: 0;
    height: 3px;
    background: #6cf;
    transition: all 0.5s;
}
.right:hover::after{
    left: 0;
}
</style>
