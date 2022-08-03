<template>
    <div class="container">
        <div @click="handleClick">
            ssssssss
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestComponent",
        data() {
            return {
                msg: '文字内容'
            }
        },
        methods: {
            handleClick() {
                console.log('test')
            }
        }
    }
</script>

<style scoped>

</style>