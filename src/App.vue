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
                    :text-style="'font-size:14px;line-height:1.7;max-height:5.1em'"></MoreDetailComponent>
        </div>

        <!--图片上传-->
        <el-divider content-position="left">图片上传</el-divider>
        <ImgCutter @cutDown="cutDown">
            <template #open>
                <button>上传图片</button>
            </template>
        </ImgCutter>
    </div>
</template>

<script>

    import DataDisplay from "@/components/DataDisplay";
    import MoreDetailComponent from "@/components/MoreDetailComponent";
    import ImgCutter from 'vue-img-cutter'

    export default {
        name: 'App',
        components: {
            MoreDetailComponent,
            DataDisplay,
            ImgCutter
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
                imgDataUrl: '' // the datebase64 url of created image
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
        height: calc(100% - 23px) !important;
    }
</style>

