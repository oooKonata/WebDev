<template>
    <div class="person">
        <h2>监视ref定义的【对象类型】数据</h2>
        <h3>姓名：{{ person.name }}</h3>
        <h3>年龄：{{ person.age }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changAge">修改年龄</button>
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, watch } from 'vue'
    // 数据
    let person = ref({
        name: 'oooKonata',
        age: 18,
    })
    // 方法
    // 修改对象属性值，对象地址不发生改变，想要监视，需开启深度监视
    function changeName() {
        person.value.name += '~'
    }
    // 修改对象属性值，对象地址不发生改变，想要监视，需开启深度监视
    function changAge() {
        person.value.age += 1
    }
    // 复制修改对象，对象地址发生改变，不用开启深度监视也能监视到变化
    function changeFullName() {
        person.value = {
            name: 'Tsukasa',
            age: 16,
        }
    }
    // 监视
    watch(
        person,
        (newValue, oldValue) => {
            console.log('修改了姓名', newValue, oldValue)
        },
        // 监视ref定义的对象类型数据时，监视的是对象的地址
        // 若想监视对象内部的数据，要开启深度监视
        { deep: true }
    )
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
