<template>
    <div class="person">
        <ul>
            <li v-for="(p, index) in list" :key="p.id">
                {{ index }} - {{ p.name }} - {{ p.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { type Persons } from '@/types'
    import { withDefaults } from 'vue'

    // defineProps: 接收list的props宏，不需要引入，直接使用

    // 方式1：只接收list，没做限制
    // defineProps(['list'])

    // 方式2：接收list + 限制类型
    // defineProps<{ list: Persons }>()

    // 方式3：接收list + 限制类型 + 限制必要性
    // defineProps<{ x: string; list?: Persons }>()

    // 补充：接收list + 限制类型 + 限制必要性 + 指定默认值（withDefaults）
    withDefaults(defineProps<{ x: string; list?: Persons }>(), {
        // list需写成函数
        list: () => [{ id: 'id-d', name: '张三-d', age: 18 }],
    })
</script>

<style scoped>
    .person {
        background-color: #f2f2f2;
        margin: 20px;
        padding: 20px;
        border-radius: 20px;
    }
    li {
        list-style: none;
    }
</style>
