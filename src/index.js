import Vue from 'vue';
import App from './components/app';

import router from './components/router' // import router 的router一定要小写，不要写成Router，否则会报can't match的错误

// var [a, z,path = ['../export','./z']];


// console.log(a);

// console.log(z);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})