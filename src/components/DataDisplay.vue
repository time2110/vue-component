<!--数据动态展示-->
<!--https://github.com/PanJiaChen/vue-countTo-->
<template>
    <CountTo :startVal="startVal"
             :endVal="endVal"
             :duration="duration"
             :autoplay="autoplay"
             :decimals="decimals"
             :decimal="decimal"
             :separator="separator"
             :prefix="prefix"
             :suffix="suffix"
             :useEasing="useEasing">
    </CountTo>
</template>

<script>
    import CountTo from 'vue-count-to'

    export default {
        name: "DataDisplay",
        components: {
            CountTo
        },
        props: {
            //起始值
            startVal: {
                type: Number,
                default: 0
            },
            //结束值
            endVal: {
                type: Number,
                default: 0
            },
            //持续时间（毫秒）
            duration: {
                type: Number,
                default: 3000
            },
            //挂载时自动播放
            autoplay: {
                type: Boolean,
                default: () => true
            },
            //要显示的小数位数
            decimals: {
                type: Number,
                default: 0
            },
            //拆分小数
            decimal: {
                type: String,
                default: '.'
            },
            //分隔符
            separator: {
                type: String,
                default: ','
            },
            //前缀
            prefix: {
                type: String,
                default: ''
            },
            //后缀
            suffix: {
                type: String,
                default: ''
            },
            useEasing: {
                type: Boolean,
                default: () => true
            }
        }
    }
</script>