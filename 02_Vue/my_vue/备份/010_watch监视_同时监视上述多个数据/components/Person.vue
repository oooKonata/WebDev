<template>
    <div class="person">
        <h2>监视009_watch监视_ref或reactive定义的对象类型数据中的某个属性</h2>
        <h3>姓名：{{ person.name }}</h3>
        <h3>汽车：{{ person.car.c1 }} - {{ person.car.c2 }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changC1">修改第1个车</button>
        <button @click="changC2">修改第2个车</button>
        <button @click="changCar">修改整个车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive, watch } from 'vue'
    // 数据
    let person = reactive({
        name: 'oooKonata',
        car: {
            c1: '宝马',
            c2: '奔驰',
        },
    })
    // 方法
    function changeName() {
        person.name += '~'
    }
    function changC1() {
        person.car.c1 = '奥迪'
    }
    function changC2() {
        person.car.c2 = '大众'
    }
    function changCar() {
        person.car = { c1: '雅迪', c2: '爱玛' }
    }
    // 监视多个数据
    watch(
        // 要监视的对象写成数组
        [
            () => person.name,
            // person.car,
            () => person.car,
        ],
        (newValue, oldValue) => {
            console.log('person变化了', newValue, oldValue)
        },
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
