<template>
    <div id="app">
        <!--数字滚动展示-->
        <el-divider content-position="left">数字滚动展示</el-divider>
        <DataDisplay :endVal="100000.22" :decimals="2" :duration="1000" style="color: red"></DataDisplay>

        <!--查看更多-->
        <el-divider content-position="left">查看更多</el-divider>
        <div style="width: 800px;">
            <MoreDetailComponent
                    :content="msg"
                    :id="'introduction-detail'"
                    :line="3"
                    :btn-style="'font-size:14px'"
                    :text-style="'font-size:14px;line-height:1.5;max-height:4.5em'"></MoreDetailComponent>
        </div>

        <!--图片上传-->
        <el-divider content-position="left">图片上传</el-divider>
        <ImgCutter @cutDown="cutDown">
            <template #open>
                <button>上传图片</button>
            </template>
        </ImgCutter>

        <!--md文件渲染-->
        <el-divider content-position="left">md文件渲染</el-divider>
        <platform-md v-highlight class="markdown-body"></platform-md>

        <el-divider content-position="left">日期过滤器</el-divider>
        <div>{{date | textDateFormat('yyyy')}}</div>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>

    import DataDisplay from "@/components/DataDisplay";
    import MoreDetailComponent from "@/components/MoreDetailComponent";
    import ImgCutter from 'vue-img-cutter'
    import PlatformMd from '@/markdown/test.md'

    export default {
        name: 'App',
        components: {
            MoreDetailComponent,
            DataDisplay,
            ImgCutter,
            PlatformMd
        },
        data() {
            return {
                msg: 'After massive project practice and summaries, Ant Design, a design language for ' +
                    'background applicatioAfter massive project practice and summaries, Ant Design, ' +
                    'a design language for background applicatioAfter massive project practice and summaries, ' +
                    'Ant Design, a design language for background applicatio After massive project practice and s' +
                    'ummaries, Ant Design, a design language for background applications, is refined by Ant UED Team, w' +
                    'hich aims to uniform the user interface specs for internal background projects, lower the unnecessary c' +
                    'ost of design differences and implementation and liberate the resources of design and front-end development.',
                show: true,
                imgDataUrl: '', // the datebase64 url of created image
                date: '2018-10-1 07:08:03'
            }
        },
        methods: {
            cutDown(res) {
                console.log(res)
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
        text-align: left;
    }
</style>
<style lang="scss" scoped>
    .wrapper2 /deep/ .more-detail-text::before {
        height: calc(100% - 21px) !important;
    }
    .wrapper2 /deep/ .more-detail-text::after {
        box-shadow: inset calc(100px - 999vw) calc(21px - 999vw) 0 0 #fff;
        margin-left: -100px;
    }
</style>

