<template>
    <div class="person">
        <h2>监视reactive定义的【对象类型】数据</h2>
        <h3>姓名：{{ person.name }}</h3>
        <h3>年龄：{{ person.age }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changAge">修改年龄</button>
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive, watch } from 'vue'
    // 数据
    let person = reactive({
        name: 'oooKonata',
        age: 18,
    })
    // 方法
    // 监视reactive定义的对象类型数据时，默认开启了深度监视，且无法关闭
    function changeName() {
        person.name += '~'
    }
    function changAge() {
        person.age += 1
    }
    function changeFullName() {
        // 直接赋值修改的话可以修改person，但是失去了响应式，因为赋值修改了对象地址，响应式是设置在之前的地址上的person
        // 丢失了响应式，表现为，数据变化，但是页面不更新
        /* person = {
            name: 'Tsukasa',
            age: 16,
        }
        console.log(person) */

        // Object.assign是将对象内容替换了，对象地址没变，响应式不丢失
        Object.assign(person, { name: 'Tsukasa', age: 16 })
    }
    // 监视
    watch(
        person,
        (newValue, oldValue) => {
            console.log('修改了姓名', newValue, oldValue)
        }
        // 默认开启了深度监视，下面的代码无效
        // { deep: false }
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
