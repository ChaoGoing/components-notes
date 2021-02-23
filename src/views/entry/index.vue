<template>
  <a-layout>
    <sider-left />
    
    <a-layout-content>
      <main-content />
    </a-layout-content>
    <a-layout-sider>
      <sider-right />
    </a-layout-sider>
  </a-layout>
</template>

<script>
// import SiderLeft from '/@/layout/SiderLeft.vue'
// import SiderRight from '/@/layout/SiderRight.vue'
// import MainContent from '/@/layout/MainContent.vue'
import SiderLeft from '../../layout/SiderLeft.vue'
import SiderRight from '../../layout/SiderRight.vue'
import MainContent from '../../layout/MainContent.vue'

export default {
  components:{
    SiderLeft,
    SiderRight,
    MainContent
  }
}
</script>

<style>
.ant-layout{
  height: 100%;
}
</style>