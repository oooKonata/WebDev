<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {
        ref,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
    } from 'vue'

    // 数据
    let sum = ref(0)
    // 方法
    function add() {
        sum.value += 1
    }
    // 生命周期钩子
    onBeforeMount(() => {
        console.log('onBeforeMount')
    })
    onMounted(() => {
        console.log('onMounted')
    })
    onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
    })
    onUpdated(() => {
        console.log('onUpdated')
    })
    onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
        console.log('onUnmounted')
    })
</script>

<style scoped>
    .person {
        background-color: #f2f2f2;
        margin: 20px;
        padding: 20px;
        border-radius: 20px;
    }
</style>
