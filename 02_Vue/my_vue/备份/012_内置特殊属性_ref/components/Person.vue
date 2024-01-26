<template>
    <div class="person">
        <h3 ref="name">oooKonata</h3>
        <input type="text" ref="inpt" />
        <div></div>
        <button @click="showLog">打印内容</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref } from 'vue'

    /* 
        内置属性ref
            - 用于注册模板引用
    */

    // 声明一个 ref 来存放该元素的引用
    // 必须和模板里的 ref 同名

    // 引用中获得的值是DOM元素
    let name = ref()
    let inpt = ref()

    function showLog() {
        console.log(name.value, inpt.value)
        // 修改内容
        name.value.innerText = 'Tsukasa'
        inpt.value.value = 'aaaa'
    }
    // 子组件Person.vue中要使用defineExpose暴露内容
    defineExpose({ name, inpt })
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
