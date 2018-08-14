<template>
    <ul>
        <li v-on:click="news" v-bind:style="{width: styleObj.w,height: styleObj.h,background: styleObj.backgroundColor}">
            this is a news
        </li>
        <div v-for="(i,index) in index" :key="index" :style="{color: styleObj.backgroundColor}" >
            {{i}}
        </div>
        <input type="checkbox" id="z" value="z" v-model="list" @click="get">
        <label for="z">zz</label>
        <input type="checkbox" id="y" value="y" v-model="list" @click="get">
        <label for="y">yy</label>
        <div :class="{active: tab === 'tab'}">233333</div>
        <div :class="tab==='tab' ? 'active' : ''">233333</div>
    </ul>
</template>

<script>
export default {
    data: function(){
        return {
            index: ['z','y','s'],
            styleObj: {
                w: '200px',
                h: '30px',
                backgroundColor: '#6cf'
            },
            list: [],
            tab: 'tab'
        }
    },
    methods: {
        news: function(){
            console.log(this);
        },
        get: function(e){
            console.log(e.target);
        }
    },
    updated: function(){
        console.log(this.list);
    }
}

</script>

<style>
    .active{
        color: #6cf;
    }
</style>