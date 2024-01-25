<template>
    <div class="person">
        <h3>姓名：{{ name }}</h3>
        <h3>年龄：{{ age }}</h3>
        <h3>电话：{{ tel }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看电话</button>
        <h3>数量：{{ sum }}</h3>
        <button @click="addSum">增加数量</button>
    </div>
</template>

<script lang="ts">
    import { ref, reactive, toRefs, toRef } from 'vue'
    export default {
        setup() {
            // 数据
            const person = reactive({
                name: 'oooKonata',
                age: 18,
                tel: '18700000000',
            })
            let sum = ref(1)

            // 解构赋值并保留响应式
            // 将一个响应式对象中的每一个属性，批量取出转换为ref对象
            let { name, age } = toRefs(person)
            // 将一个响应式对象中的某个属性，单独取出转换为ref对象
            let tel = toRef(person, 'tel')

            // 修改姓名
            function changeName() {
                // person.name = 'swk'
                name.value = 'swk'
            }
            // 修改年龄
            function changeAge() {
                // person.age += 1
                age.value += 1
            }
            // 显示电话
            function showTel() {
                // alert(person.tel)
                alert(tel.value)
            }
            // 增加数量
            function addSum() {
                sum.value += 1
            }
            return {
                name,
                age,
                tel,
                sum,
                changeName,
                changeAge,
                showTel,
                addSum,
            }
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
