<template>
    <div>
        <h1>User</h1>
        <div>我是User组件</div>
        <div>动态部分{{dynamicSegment}}</div>
        <textarea ref="text" style="margin:0;padding:0;overflow:hidden;word-warp:break-word;resize:none;width:300px;border:1px solid #6cf;border-radius:5px" @input="getChange" :style="{height: height + 'px'}"></textarea>
        <br>
        <div @click="addClass" :class="{close: active}" class="trans"></div>
        <br>
        <div style="height:300px;width:150px;position:relative;"><div class="ani" :class="{aniClose: close}" @click="addClose"></div></div>
    </div>
</template>
<script>
export default {
    // 就是动态路由在来回切换时，由于它们都是指向同一组件，vue不会销毁再创建这个组件，而是复用这个组件，
    // 就是当第一次点击（如：user123）的时候，vue 把对应的组件渲染出来，但在user123, user456点击来回切换的时候，
    // 这个组件就不会发生变化了，组件的生命周期不管用了。这时如果想要在组件来回切换的时候做点事情，那么只能在组件内部（user.vue中）
    // 利用watch 来监听$route 的变化。把上面的代码用监听$route 实现    
    methods: {
        getChange: function(){
            let scrollHeight = this.$refs.text.scrollHeight;
            console.log(scrollHeight);
            console.log(this.height);
            this.$refs.text.style.height = '';
            if(scrollHeight > this.height){
                this.height = scrollHeight
            }

        },
        addClass: function(){
            this.active = true;
        },
        addClose: function(){
            this.close = true;
        }
    },

    data: function(){
        return {
            height: 50,
            active: false,
            close: false
        }
    },

    computed: {
        dynamicSegment(){
            console.log(this.$route);
            return  this.$route.params.id
        }
    },
    watch: {
        '$route'(to, from){
            console.log('to',to);
            console.log('from',from);
        }
    },
    // 或者使用2.2中引入的beforeRouteUpdate守卫  这个方法比watch先执行
    beforeRouteUpdate(to, from, next){
        // from.matched[0].regexp  /^\/user\/((?:[^\/]+?))(?:\/(?=$))?$/i
        console.log(to);
        console.log(from);
        next();
        console.log(next);
    }
}
</script>
<style scoped>
    .trans{
        height: 100px;
        width: 50px;
        background-color: #6cf;
    }
    .close{
        height: 0;
        transition: all 1.5s;
    }
    .ani{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #6cf;
    }
    .aniClose{
        top: 100%;
        transition: all 1.5s;
    }
</style>

