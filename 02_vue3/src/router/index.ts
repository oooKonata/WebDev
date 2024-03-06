import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/views/01_props/Parent.vue'
import Event from '@/views/02_custom-event/Parent.vue'
import Bus from '@/views/03_mitt/Parent.vue'
import Model from '@/views/04_v-model/Parent.vue'
import AttrsListeners from '@/views/05_$attrs/Parent.vue'
import RefChildrenParent from '@/views/06_$refs-$parent/Parent.vue'
import ProvideInject from '@/views/07_provide-inject/Parent.vue'
import Pinia from '@/views/08_pinia/Parent.vue'
import Slot from '@/views/09_slot/Parent.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/props',
      component: Props,
    },
    {
      path: '/event',
      component: Event,
    },
    {
      path: '/mitt',
      component: Bus,
    },
    {
      path: '/model',
      component: Model,
    },
    {
      path: '/attrs',
      component: AttrsListeners,
    },
    {
      path: '/ref-parent',
      component: RefChildrenParent,
    },
    {
      path: '/provide-inject',
      component: ProvideInject,
    },
    {
      path: '/pinia',
      component: Pinia,
    },
    {
      path: '/slot',
      component: Slot,
    },
    {
      path: '/',
      redirect: '/props',
    },
  ],
})
