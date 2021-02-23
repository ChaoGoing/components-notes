<template>
  <div class="container">
    <a-layout-sider>
      <div class="component-list" @dragstart="handleDragStart">
        <div v-for="(item, index) in componentList"
          class="sider-left-dragitem"
          draggable 
          :key="index"
          :data-index="index">
          <span draggable>{{ item.label }}</span>
        </div>  
      </div>  
    </a-layout-sider>
  </div>
  
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {

    const state = reactive({
      componentList:[
        {
          label: 'markDown'
        },
        {
          label: '富文本'
        },
        {
          label: '思维导图'
        }
      ]
    })

    const handleDragStart = (e) => {
      e.dataTransfer.setData('index', e.target.dataset.index)
      console.log("drag start")
    }

    return {
      ...toRefs(state),
      handleDragStart,
    }
  }
}
</script>

<style lang="scss">
.container{
  display: contents;
}
.container .ant-layout-sider{
  background: #fff;
}
.sider-left-dragitem{
  user-select: none;  
  padding: 4px;
  cursor: grab;
}
</style>>