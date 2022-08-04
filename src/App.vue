<template>
  <div id="app">
    <DataDisplay :endVal="100000.22" :decimals="2" :duration="1000" style="color: red"></DataDisplay>
    <!--查看更多-->
    <div style="width: 800px;">
      <MoreDetailComponent
              :content="msg"
              :id="'introduction-detail'"
              :line="3"
              :btn-style="'font-size:14px'"
              :text-style="'font-size:14px;line-height:1.7;max-height:5.1em'"></MoreDetailComponent>
    </div>
  </div>
</template>

<script>

import DataDisplay from "@/components/DataDisplay";
import MoreDetailComponent from "@/components/MoreDetailComponent";
export default {
  name: 'App',
  components: {
    MoreDetailComponent,
    DataDisplay
  },
  data() {
    return {
      msg: 'After massive project practice and summaries, Ant Design, a design language for ' +
              'background applicatioAfter massive project practice and summaries, Ant Design, ' +
              'a design language for background applicatioAfter massive project practice and summaries, ' +
              'Ant Design, a design language for background applicatio After massive project practice and s' +
              'ummaries, Ant Design, a design language for background applications, is refined by Ant UED Team, w' +
              'hich aims to uniform the user interface specs for internal background projects, lower the unnecessary c' +
              'ost of design differences and implementation and liberate the resources of design and front-end development.'
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
  .wrapper2 /deep/.more-detail-text::before {
    height: calc(100% - 23px) !important;
  }
</style>
