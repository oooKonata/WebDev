<template>
    <div class="person">
        <h2>监视ref定义的【基本类型】数据</h2>
        <h3>姓名：{{ person }}</h3>
        <button @click="changeName">修改姓名</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, watch } from 'vue'
    // 数据
    let person = ref('oooKonata')
    // 方法
    function changeName() {
        person.value += '~'
    }
    // 监视
    watch(person, (newValue, oldValue) => {
        console.log('修改了姓名', newValue, oldValue)
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
