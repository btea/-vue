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


