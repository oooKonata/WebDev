<template>
    <div class="person">
        <!-- 求和 -->
        <h2>当前求和：{{ sum }}</h2>
        <button @click="add">点我+1</button>
        <br />
        <!-- 修勾 -->
        <img v-for="(dog, index) in dogList" :key="index" :src="dog" />
        <br />
        <button @click="getDog">增加1只修勾</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    // 引入hooks
    import useDog from '@/hooks/useDog'
    import useSum from '@/hooks/useSum'

    // 直接调用 + 解构赋值

    // 求和
    const { dogList, getDog } = useDog()
    // 修勾
    const { sum, add } = useSum()
</script>

<style scoped>
    .person {
        background-color: #f2f2f2;
        margin: 20px;
        padding: 20px;
        border-radius: 20px;
    }
    img {
        width: 100px;
        margin: 20px 10px 0 0;
    }
</style>
