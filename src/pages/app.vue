<template>
    <section class="main">
        <p>我来了{{name}}</p>
        <div class="one">
            this ia box
        </div>
        <div class="two">
            this is another box
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return {
            name: 'webpack + vue'
        }
    }
}
</script>
<style scoped>
.main p{
    color: #6cf;
}
</style>


