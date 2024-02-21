<template>
  <div class="person">
    <div>Firstname <input type="text" v-model="firstName" /></div>
    <div>Lastname <input type="text" v-model="lastName" /></div>
    <div>Fullname <input type="text" v-model="fullName" /></div>
  </div>
</template>

<script setup lang="ts" name="Person">
  /* 
    接受一个getter函数，返回一个只读的响应式ref对象
    该ref通过.value暴露getter函数的返回值
    它也可以接受一个带有get和set函数的对象来创建一个可写的ref对象
  */
  import { ref, computed } from 'vue'
  let firstName = ref('zhang')
  let lastName = ref('san')
  // 只读 - getter
  // let fullName = computed(() => {
  //   return firstName.value + '-' + lastName.value
  // })

  // 读改 - getter和setter
  let fullName = computed({
    get: () => {
      return firstName.value + '-' + lastName.value
    },
    set: val => {
      firstName.value = val.split('-')[0]
      lastName.value = val.split('-')[1]
    },
  })
</script>

<style scoped lang="scss"></style>
