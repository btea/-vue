<template>
    <div>
        <h1>User</h1>
        <div>我是User组件</div>
        <div>动态部分{{dynamicSegment}}</div>
    </div>
</template>
<script>
export default {
    // 就是动态路由在来回切换时，由于它们都是指向同一组件，vue不会销毁再创建这个组件，而是复用这个组件，
    // 就是当第一次点击（如：user123）的时候，vue 把对应的组件渲染出来，但在user123, user456点击来回切换的时候，
    // 这个组件就不会发生变化了，组件的生命周期不管用了。这时如果想要在组件来回切换的时候做点事情，那么只能在组件内部（user.vue中）
    // 利用watch 来监听$route 的变化。把上面的代码用监听$route 实现
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
    }
}
</script>
