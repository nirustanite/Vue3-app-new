<template>
    <el-table :data="inspections" stripe border style="width: 100%" header-row-class-name='table-header'>
        <el-table-column prop="info.title" label="Title" />
        <el-table-column prop="info.manual_revision" label="Manual Revision" width="300" />
        <el-table-column prop="info.customer" label="Customer" width="500" />
        <el-table-column prop="engine.model" label="Engine Model" width="300" />
        <el-table-column width="180">
          <template #default>
            <el-button type="primary" size="small" round style="background-color: #0291B6">Details</el-button>
            <el-button type="danger" size="small" round>Delete</el-button>
          </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
  props: {
    inspections: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .table-display{
    margin-left: 30px;
    margin-right: 30px;
  }
  .table-header{
    font-weight: bold !important;
    font-size: 15px;
    color: #0291B6 !important;
  }
</style>
