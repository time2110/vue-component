<template>
    <div class="main">
        <input id="test" class="test" type="checkbox">
        <div class="contain">
            <P>
                阿萨德记录卡决定是否考虑房价拉水电费就看见阿弗莱克士大夫家看来是打发时间登飞来峰
                骄傲的看法杰卡斯两地分居卡斯柯老大哥工行卡里发生打架阿斯利康的积分卡拉斯激发开始代理费
            </P>
            <label class="open-btn" for="test">
                <span >查看更多</span>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoreBtnComponent"
    }
</script>

<style scoped>
    .main{
        width: 100%;
    }
    .contain{
        width: 20%;
        position: relative;
        margin: 0 auto;
        height: 200px;
        overflow: hidden;/*设置文案容器高度，超出部分隐藏*/
        text-align: center;
    }

    .test {
        display: none;
    }
    .test:checked + .contain {
        height: auto;
    }
    .test:checked + .contain .open-btn {
        display: none;
        color: green;
    }
    .open-btn{
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        height: 80px;
        background: linear-gradient(180deg,rgba(255,255,255,0),#fff);/*实现渐变效果，遮罩效果*/
    }
    .open-btn span{
        text-decoration: none;
        color: chocolate;
        display: inline-block;
        margin-top: 60px;
    }
</style>