import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './home.vue';
import about from './about.vue';
import user from './user.vue';

// 二级组件
import phone from './phone.vue';
import tablet from './tablet.vue';
import computer from './computer.vue';

// 命名组件
import z from './z';

console.log(z);

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        component: home,
        // 二级组件
        children: [
            {
                path: "phone",
                component: phone
            },
            {
                path: "tablet",
                component: tablet
            },
            {
                path: 'computer',
                component: computer
            },
            {
                // 当进入home组件的时候渲染下面组件
                path: '',
                component: phone
            }
        ]
    },
    {
        path: '/about',
        component: about

        // 命名视图
    },
    // 动态路由  动态路由共用的同一个组件 当第一次组件渲染完成之后，之后的是组件复用，生命周期不再生效
    {
        path: '/user/:id',
        component: user
    },
    // 这时点击页面上的home和about可以看到组价来回切换。但是有一个问题，当首次进入页面的时候，页面中并没有显示任何内容。这是因为首次进入页面时，它的路径是'/',我们并没有给这个路径做相应的配置。一般，
    // 页面一加载进来都会显示home页面，我们也要把这个路径指向home组件。但是如果我们写{path: '/',component: Home}，vue会报错，因为两条路径指向同一个方向。这时就需要重定向，所谓重定向，
    // 就是重新给它指定一个方向，它本来是访问 / 路径，我们重新指向'/home'，它就相当于访问'/home',相应地，home组件会显示到页面上。vueRouter中用redirect来定义重定向。
    // 重定向

    {
        path: '/',
        redirect: '/home'
    }
    
];

var router = new VueRouter({
    routes
})
export default router;