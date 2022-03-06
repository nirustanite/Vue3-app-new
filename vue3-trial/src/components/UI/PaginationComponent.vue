<template>
  <el-pagination
    layout="prev, pager, next"
    :total="inspectionsLength"
    @current-change="setPage">
   </el-pagination>
</template>

<script>
export default {
  props: {
    inspectionsLength: {
      type: Number
    },
    setPage: {
      type: Function
    }
  }
}
</script>
