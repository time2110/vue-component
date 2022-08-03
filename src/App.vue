<template>
  <div id="app">
    <DataDisplay :endVal="100000.22" :decimals="2" :duration="1000" style="color: red"></DataDisplay>
    <MoreLine  style="width: 800px;"
               :content="msg"
               :line="2"
               :id="'id1'"
               text-before-size="12px"
               text-style="font-size:12px"
               btn-style="line-height: 10px;font-size:10px"></MoreLine>
    <TestComponent></TestComponent>
    <MoreBtnComponent></MoreBtnComponent>
  </div>
</template>

<script>

import DataDisplay from "@/components/DataDisplay";
import MoreLine from "@/components/MoreLine";
import TestComponent from "@/components/TestComponent";
import MoreBtnComponent from "@/components/MoreBtnComponent";
export default {
  name: 'App',
  components: {
    MoreBtnComponent,
    TestComponent,
    MoreLine,
    DataDisplay
  },
  data() {
    return {
      msg: 'After massive project practice and summaries, Ant Design, a design language for background applicatioAfter massive project practice and summaries, Ant Design, a design language for background applicatioAfter massive project practice and summaries, Ant Design, a design language for background applicatio After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development.'
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
  text-align: center;
}
</style>
