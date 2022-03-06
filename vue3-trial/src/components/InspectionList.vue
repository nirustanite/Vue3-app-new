<template>
    <el-table :data="inspections" stripe border style="width: 100%" header-row-class-name='table-header'>
        <el-table-column prop="info.title" label="Title" />
        <el-table-column prop="info.manual_revision" label="Manual Revision" width="300" />
        <el-table-column prop="info.customer" label="Customer" width="500" />
        <el-table-column prop="engine.model" label="Engine Model" width="300" />
         <!-- <el-table-column prop="uuid" label="UUID" width="300" /> -->
        <el-table-column width="180" prop='uuid'>
          <template #default="row">
            <el-button type="primary" size="small" round style="background-color: #0291B6" @click="goToDetails(row)">Details</el-button>
            <el-button type="danger" size="small" round @click="deleteInspection(row)">Delete</el-button>
          </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    inspections: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions('inspections', ['deleteInspection']),
    goToDetails (row) {
      this.$router.push({ name: 'inspection-details', params: { id: row.row.uuid } })
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
