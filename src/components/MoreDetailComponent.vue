<!--查看更多-->
<!--https://segmentfault.com/a/1190000040030723-->
<template>
    <div class="wrapper2">
        <input :id="id" class="exp" type="checkbox">
        <div class="more-detail-text" :line-clamp="line" :style="textStyle" >
            <label class="btn" :for="id" :style="btnStyle"></label>
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoreDetailComponent",
        props: {
            // 展示内容
            content: {
                type: String,
                default: ''
            },
            // 超过多少行数省略
            line: {
                type: Number,
                default: 2
            },
            // id名，注意同一页面id名不能相同
            id: {
                type: String ,
                default: ''
            },
            // 文本样式调整
            textStyle: {
                type: String ,
                default: ''
            },
            // 按钮样式调整
            btnStyle: {
                type: String ,
                default: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper2 {
        display: flex;
        overflow: hidden;
        .more-detail-text::before {
            content: '';
            float: right;
        }

        .more-detail-text {
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: justify;
            position: relative;
            line-height: 1.5;
            transition: .3s max-height;
        }

        .btn {
            position: relative;
            float: right;
            clear: both;
            margin-left: 20px;
            border-radius: 4px;
            color: #4293f4;
            cursor: pointer;
        }

        .more-detail-text::after {
            content: '';
            width: 999vw;
            height: 999vw;
            position: absolute;
            box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
            margin-left: -100px;
        }


        .btn::after {
            content: '查看更多'
        }

        .exp {
            display: none;
        }

        .exp:checked + .more-detail-text {
            max-height: none!important;
        }

        .exp:checked + .more-detail-text::after {
            visibility: hidden;
        }

        .exp:checked + .more-detail-text .btn::before {
            visibility: hidden;
        }

        .exp:checked + .more-detail-text .btn::after {
            display: none;
            content: '收起'
        }

        .btn::before {
            content: '...';
            position: absolute;
            left: -5px;
            color: #333;
            transform: translateX(-100%)
        }
    }


</style>
