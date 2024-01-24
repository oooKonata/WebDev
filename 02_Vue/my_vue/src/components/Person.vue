<template>
    <div class="person">
        <h3>姓名{{ name }}</h3>
        <h3>年龄{{ age }}</h3>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看电话</button>
    </div>
</template>

<script lang="ts">
export default {
    // 组件名
    name: "Person",
    // 数据
    data() {
        return {
            name: "oooKonata",
            age: 18,
            tel: 18700000000,
        };
    },
    // 方法
    methods: {
        // 修改姓名
        changeName() {
            this.name = "swk";
        },
        // 修改年龄
        changeAge() {
            this.age += 1;
        },
        // 展示电话
        showTel() {
            alert(this.tel);
        },
    },
};
</script>

<style scoped>
.person {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 20px;
}
</style>