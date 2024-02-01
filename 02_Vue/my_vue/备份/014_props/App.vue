<template>
    <div class="app">
        <Person x="test" :list="personList" />
    </div>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import { reactive } from 'vue'
    import { type Persons } from './types'

    let personList = reactive<Persons>([
        { id: 'qwer1', name: '张三', age: 18 },
        { id: 'qwer2', name: '李四', age: 19 },
        { id: 'qwer3', name: '王五', age: 20 },
    ])
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>
