<template>
    <div class="person">
        <h3>姓名：{{ person.name }}</h3>
        <h3>年龄：{{ person.age }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看电话</button>
    </div>
</template>

<script lang="ts">
    export default {
        // 指定组件名
        // 默认vue的组件名就是文件名，所以组件名可以不配置，除特殊情况
        // setup语法糖不支持组件名，所以要单独写一个script标签
        name: 'Person',
    }
</script>

<!-- 
    指定组件名字，比较麻烦，可借助vite中的插件简化
        - npm i vite-plugin-vue-setup-extend -D
        - vite.config.ts 配置：

            import { defineConfig } from 'vite'
            import VueSetupExtend from 'vite-plugin-vue-setup-extend'

            export default defineConfig({
            plugins: [ VueSetupExtend() ]
            })
        
        - <script setup lang="ts" name="Person">
 -->

<!-- 
    setup语法糖：
    script标签中加入setup后，就可以直接在script标签中写setup(){}里面的代码了，并且不需要写export default{ return{} }
 -->
<script lang="ts" setup name="Person">
    import { ref, reactive, toRefs, toRef } from 'vue'
    // 数据
    const person = reactive({
        name: 'oooKonata',
        age: 18,
        tel: '18700000000',
    })

    // 修改姓名
    function changeName() {
        person.name = 'swk'
    }
    // 修改年龄
    function changeAge() {
        person.age += 1
    }
    // 显示电话
    function showTel() {
        alert(person.tel)
    }
</script>

<style scoped>
    .person {
        background-color: #f5f5f5;
        padding: 20px;
        border-radius: 20px;
    }
    button {
        margin: 0 6px 0 0;
    }
</style>
