import { createWebHistory, createRouter } from 'vue-router'
import Inspections from '@/views/InspectionsContainer.vue'
import InspectionDetails from '@/views/InspectionDetailsContainer.vue'

const routes = [
  {
    path: '/',
    name: 'inspections',
    component: Inspections
  },
  {
    path: '/inspection-details',
    name: 'inspection-details',
    component: InspectionDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
