<template>
    <div class="person">
        <h3>姓名：{{ person.name }}</h3>
        <h3>年龄：{{ person.age }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看电话</button>
        <h3>数量：{{ sum }}</h3>
        <button @click="addSum">增加数量</button>
    </div>
</template>

<script lang="ts">
    import { ref, reactive } from 'vue'
    export default {
        /* 
        - setup函数返回的对象中的内容，可直接在模板中使用
        - setup中访问this是undefined
        - setup函数会在beforeCreate之前调用，它是“领先”所有钩子执行的
     */
        setup() {
            // 数据
            const person = reactive({
                name: 'oooKonata',
                age: 18,
                tel: '18700000000',
            })
            let sum = ref(1)
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
            // 增加数量
            function addSum() {
                sum.value += 1
            }
            /*  
            - setup的返回值
            - 若返回一个对象，则对象中的：属性、方法等，在模板中均可以直接使用
            - 若返回一个函数，则可以自定义渲染内容
        */
            return { person, sum, changeName, changeAge, showTel, addSum }
        },
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
