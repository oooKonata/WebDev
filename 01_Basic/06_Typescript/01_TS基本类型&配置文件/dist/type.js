// number类型
let a = 8;
// string类型
let b = 'hello';
// boolean类型
let c = true;
// 联合类型
let abc;
abc = 1;
abc = '1';
abc = true;
// number类型数组
const d = [1, 2, 3];
// string类型数组
const e = ['1', '2', '3'];
// any类型，没有指定类型
// 设置为any类型之后相当于关闭了TS类型检查
// 不指定类型时，默认为any类型（隐式）
let obj1 = { x: 0 };
let obj2 = { name: 'swk' };
// any类型可以复制给任意bi
let obj3 = obj1;
// unknow类型 未知类型 实际是安全的any类型
let f;
f = 10;
f = true;
// 类型断言
let g = f;
// void表示空，函数为例，表示没有返回值
function fn1() {
    console.log('111');
}
// never表示永远不会返回结果
function fn2() {
    throw new Error('err');
}
