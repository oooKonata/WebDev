import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('count', () => {
  let sum = ref(1)
  const add = val => {
    sum.value += val
  }
  const minus = val => {
    sum.value -= val
  }
  return { sum, add, minus }
})
