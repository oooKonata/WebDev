<template>
    <div class="person">???</div>
</template>

<script lang="ts" setup name="Person">
    import { type PersonInter, type Persons } from '@/types'

    // 接口
    let person: PersonInter = {
        id: '1',
        name: '张三',
        age: 18,
    }

    // 泛型
    let personList1: Array<PersonInter> = [
        { id: '1', name: '张三', age: 18 },
        { id: '2', name: '李四', age: 19 },
        { id: '3', name: '王五', age: 20 },
    ]

    // 自定义类型
    let personList2: Persons = [
        { id: '1', name: '张三', age: 18 },
        { id: '2', name: '李四', age: 19 },
        { id: '3', name: '王五', age: 20 },
    ]
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
