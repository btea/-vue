<template>
    <P>{{greeting}} World!</P>
</template>

<script>
export default {
    data: function(){
        return {
            greeting: 'hello'
        }
    }
}
</script>
<style scoped>
    p{
        font-size: 2em;
        text-align: center;
    }
</style>


