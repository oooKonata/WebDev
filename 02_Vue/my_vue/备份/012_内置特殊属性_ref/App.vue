<template>
    <div class="app">
        <!-- 模板引用也可以被用在一个子组件上，这种情况下引用中获得的值是组件实例 -->
        <Person ref="person" />
        <button @click="test">测试</button>
    </div>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import { ref } from 'vue'

    // 引用中获得的值是组件实例
    let person = ref()

    function test() {
        console.log(person.value)
        console.log(
            'Person组件中暴漏的内容',
            person.value.name,
            person.value.inpt
        )
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>
