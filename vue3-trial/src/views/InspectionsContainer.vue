<template>
  <div>
    <h3>List of Inspections</h3>
    <p> <b>Total Number of Inspections</b> : {{ inspectionsLength }} </p>
    <div v-if='loading'>
        <p> Loading... </p>
    </div>
    <div v-else class='table-display'>
      <el-table :data="inspections" stripe border style="width: 100%" header-row-class-name='table-header'>
        <el-table-column prop="info.title" label="Title" />
        <el-table-column prop="info.manual_revision" label="Manual Revision" width="300" />
        <el-table-column prop="info.customer" label="Customer" width="500" />
        <el-table-column prop="engine.model" label="Engine Model" width="300" />
        <el-table-column width="400">
          <template #default>
            <el-button type="primary" size="small" round style="background-color: #0291B6">Detail</el-button>
            <el-button type="danger" size="small" round>Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  created () {
    this.getInspections()
  },
  methods: {
    ...mapActions('inspections', ['getInspections'])
  },
  computed: {
    ...mapState('inspections', {
      inspections: state => state.inspections,
      loading: state => state.loading
    }),
    ...mapGetters('inspections', [
      'inspectionsLength'
    ])
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
