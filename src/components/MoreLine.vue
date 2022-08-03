<!--查看更多-->
<!--https://segmentfault.com/a/1190000040030723-->
<template>
    <div class="wrapper">
        <input :id="id" class="exp" type="checkbox">
        <div class="more-detail-text" :line-clamp="line" :style="textStyle" >
            <label class="btn" :for="id" :style="btnStyle"></label>
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoreLine",
        props: {
            // 展示内容
            content: {
                type: String,
                default: ''
            },
            // 超过多少行数省略
            line: {
                type: Number,
                default: 5
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
            // 文本伪类字体大小样式调整
            textBeforeSize: {
                type: String ,
                default: ''
            },
            // 按钮样式调整
            btnStyle: {
                type: String ,
                default: ''
            }
        },
        created() {
            const style = document.createElement("style")
            style.innerHTML = `.more-detail-text::before { height: calc(100% - ${this.textBeforeSize}) }`
            document.body.appendChild(style)
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        overflow: hidden;
    }

    .more-detail-text::before {
        content: '';
        float: right;
    }
    .more-detail-text {
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        position: relative;
        line-height: 1.5;
        transition: .3s max-height;
    }
    .more-detail-text::after {
        content: '';
        width: 999vw;
        height: 999vw;
        position: absolute;
        box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
        margin-left: -100px;
    }

    .btn {
        font-size: 16px;
        line-height: 24px;
        position: relative;
        float: right;
        clear: both;
        margin-left: 20px;
        padding: 0 8px;
        background: #3F51B5;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
    }

    .btn::after {
        content: '查看更多'
    }
    .btn::before {
        content: '...';
        position: absolute;
        left: -5px;
        color: #333;
        transform: translateX(-100%)
    }

    [line-clamp="1"] {
        max-height: 1.5em;
    }

    [line-clamp="2"] {
        max-height: 3em;
    }

    [line-clamp="3"] {
        max-height: 4.5em;
    }

    [line-clamp="4"] {
        max-height: 6em;
    }

    [line-clamp="5"] {
        max-height: 7.5em;
    }

    .exp {
        display: none;
    }

    .exp:checked + .more-detail-text {
        max-height: none;
    }

    .exp:checked + .more-detail-text::after {
        visibility: hidden;
    }

    .exp:checked + .more-detail-text .btn::before {
        visibility: hidden;
    }

    .exp:checked + .more-detail-text .btn::after {
        content: '收起'
    }


</style>