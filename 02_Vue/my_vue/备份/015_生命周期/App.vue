<template>
    <div class="app">
        <Person v-if="isShow" />
    </div>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import { ref, onMounted } from 'vue'

    let isShow = ref(true)

    // App组件要等子组件全部挂载了之后最后才挂载
    onMounted(() => {
        console.log('App组件挂载了')
    })
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>
