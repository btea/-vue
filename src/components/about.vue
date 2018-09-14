<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>

        <div class="carousel">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
        </div>
        <div class="trans">
            <div class="top">this is top</div>
            <div class="bottom">this is bottom</div>
        </div>
        <br>
        <br>
    </div>
</template>
<script>
export default {
    data(){
        return  {
            aboutMsg: '我是about组件'
        }
    },
    mounted: function(){
        var carousel = document.getElementsByClassName('carousel')[0];
        this.setInterval = setInterval(function(){
            var item = document.getElementsByClassName('item');
            item[1].style.left = 0;
            item[1].style.top = '25px';
            item[1].style.width = '200px';
            item[1].style.height = '100px';
            item[1].style.backgroundColor = '#99a9bf';
            item[1].style.lineHeight = '100px';
            item[1].style.zIndex = 0;


            item[2].style.left = '125px';
            item[2].style.top = 0;
            item[2].style.width = '250px';
            item[2].style.height = '150px';
            item[2].style.backgroundColor = '#d3dce6';
            item[2].style.lineHeight = '150px';
            item[2].style.zIndex = 1;

            item[3].style.left = '300px';
            item[4].style.left = '600px';
            item[5].style.left = '900px';
            item[0].style.left = '1200px';
            carousel.appendChild(carousel.firstChild);
        },1500)
    },
    destroyed: function(){
        clearInterval(this.setInterval);
    }
}
</script>
<style>
    .trans{
        width: 150px;
        height: 20px;
    }
    .top,.bottom{
        width: 100%;
        height: 100%;
        background: #6cf;
        text-align: center;
        line-height: 20px;
        vertical-align: middle;
        border: 1px solid #ffffff;
    }

    .carousel{
        width: 500px;
        height: 150px;
        overflow: hidden;
        position: relative;
    }
    .carousel .item{
        height: 100px;
        width: 200px;
        position: absolute;
        top: 25px;
        background-color: #99a9bf;
        text-align: center;
        line-height: 100px;
        vertical-align: middle;
        color: #fff;
    }
    .carousel .item:nth-child(1){
        left: 0;
        transition: all 1.5s;
    }
    .carousel .item:nth-child(2){
        left: 125px;
        top: 0;
        width: 250px;
        height: 150px;
        background-color: #d3dce6;
        line-height: 150px;
        z-index: 1;
        transition: all 0.8s;
    }
    .carousel .item:nth-child(3){
        left: 300px;
        transition: all 0.8s;
    }
    .carousel .item:nth-child(4){
        left: 600px;
    }
    .carousel .item:nth-child(5){
        left: 900px;
    }
    .carousel .item:nth-child(6){
        left: 1200px;
    }
</style>


