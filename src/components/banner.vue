<template>
    <ul>
        <li v-on:click="news" v-bind:style="{width: styleObj.w,height: styleObj.h,background: styleObj.backgroundColor}">
            this is a news
        </li>
        <div v-for="(i,index) in index" :key="index" :style="{color: styleObj.backgroundColor}" >
            {{i}}
        </div>
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
            }
        }
    },
    methods: {
        news: function(){
            console.log(this);
        }
    }
}

</script>

<style>

</style>