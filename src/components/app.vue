<template>
    <section class="main">
        <p>我来了{{name}}</p>
        <div class="one">
            this ia box
        </div>
        <div class="two" v-on:click="get">
            23333333
        </div>
        <Banner> </Banner>
        <div>
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
            <!-- 模糊匹配，动态路由 -->
            <router-link to="/user/123">User123</router-link>
            <router-link to="/user/456">User456</router-link>
        </div>
        <router-view></router-view>
    </section>
</template>
<script>
import Banner from './banner.vue'
export default {
    data(){
        return {
            name: 'webpack + vue'
        }
    },
    methods: {
        get: function(){
            alert(123);
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
</style>
