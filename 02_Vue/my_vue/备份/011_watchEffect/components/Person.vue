<template>
    <div class="person">
        <h1>水温达到100°C或水位达到80m时发出警报</h1>
        <h3>水温：{{ temp }}</h3>
        <h3>水位：{{ height }}</h3>
        <button @click="addTenmp">增加水温</button>
        <button @click="addHeight">增加水位</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, watch, watchEffect } from 'vue'
    // 数据
    let temp = ref(0)
    let height = ref(0)
    // 方法
    function addTenmp() {
        temp.value += 10
    }
    function addHeight() {
        height.value += 10
    }
    // watch监视
    /* watch([temp, height], newValue => {
        if (newValue[0] >= 100 || newValue[1] >= 80) {
            console.log('警报发出')
        }
    }) */

    // watchEffect监视
    // 接收监视函数的返回值（是个函数 stopWatchEffect ），调用该函数即可停止监视 stopWatchEffect()
    const stopWatchEffect = watchEffect(() => {
        if (temp.value >= 100 || height.value >= 80) {
            console.log('警报发出')
        }
        if (temp.value >= 110 || height.value >= 90) {
            stopWatchEffect()
        }
    })
</script>

<style scoped>
    .person {
        background-color: #f2f2f2;
        margin: 20px;
        padding: 20px;
        border-radius: 20px;
    }
    button {
        margin: 0 6px 0 0;
    }
</style>
