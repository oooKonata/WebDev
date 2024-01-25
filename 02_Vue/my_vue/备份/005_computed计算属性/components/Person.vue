<template>
    <div class="person">
        姓：<input type="text" v-model="firstName" /><br />
        名：<input type="text" v-model="lastName" /><br />
        全名：<span>{{ fullName }}</span>
        <div></div>
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, computed } from 'vue'
    let firstName = ref('zhang')
    let lastName = ref('san')
    // 计算属性 - 默认只读
    /* let fullName = computed(() => {
        return firstName.value + '-' + lastName.value
    }) */
    // 计算属性 -读写
    let fullName = computed({
        // 读 getter
        get() {
            return firstName.value + '-' + lastName.value
        },
        // 写 setter
        set(val) {
            firstName.value = val.split('-')[0]
            lastName.value = val.split('-')[1]
        },
    })
    function changeFullName() {
        fullName.value = 'li-si'
    }
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
