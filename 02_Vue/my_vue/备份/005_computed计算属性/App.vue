<template>
    <div class="app">
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

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>
