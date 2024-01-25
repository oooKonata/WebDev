<template>
    <div class="app">
        <h2>Hello</h2>
        <!-- 使用组件 -->
        <Person />
    </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue'
    export default {
        // 组件名
        name: 'App',
        // 注册组件
        components: {
            Person,
        },
    }
</script>

<style scoped></style>
