//向外导出
export let a = 10
export const b = "孙悟空"
export const c = {name: "猪八戒"}

//设置默认导出，默认导出只能是一个值，一个模块只有一个默认导出
export default function sum(a, b) {
    return a + b
}