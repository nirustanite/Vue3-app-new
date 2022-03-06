<template>
  <div>
    <h3>List of Inspections</h3>
    <p> <b>Total Number of Inspections</b> : {{ inspectionsLength }} </p>
    <div v-if='loading'>
        <p> Loading... </p>
    </div>
    <div v-else class='table-display'>
      <InspectionList :inspections="pagedInspectionData" />
      <div class='pagination-display'>
        <PaginationComponent :inspectionsLength="inspectionsLength" :setPage="setPage" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import InspectionList from '@/components/InspectionList.vue'
import PaginationComponent from '@/components/UI/PaginationComponent.vue'

export default {
  created () {
    this.getInspections()
  },
  data () {
    return {
      page: 1,
      pageSize: 10
    }
  },
  components: {
    InspectionList,
    PaginationComponent
  },
  methods: {
    ...mapActions('inspections', ['getInspections']),
    setPage (val) {
      this.page = val
    }
  },
  computed: {
    ...mapState('inspections', {
      inspections: state => state.inspections,
      loading: state => state.loading
    }),
    ...mapGetters('inspections', [
      'inspectionsLength'
    ]),
    pagedInspectionData () {
      return this.inspections.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
    }
  }
}
</script>

<style>
.pagination-display{
  display: flex;
justify-content: center;
margin-top:20px;
}
</style>
