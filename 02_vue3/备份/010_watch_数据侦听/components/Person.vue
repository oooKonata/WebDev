<template>
  <div class="person">
    <h2>侦听ref基本类型</h2>
    <div>数量: {{ sum }}</div>
    <button @click="addSum">数量+1</button>

    <h2>侦听ref对象类型</h2>
    <div>宝马: {{ car.bmw }}</div>
    <div>
      特斯拉: Model3 {{ car.tesla.model3 }} - ModelY {{ car.tesla.modelY }}
    </div>
    <button @click="changCar">换个车库和宝马</button>
    <button @click="changBmwPrice">宝马价格+1</button>
    <button @click="changModel3Price">Model3价格+1</button>
    <button @click="changModelYPrice">ModelY价格+2</button>

    <h2>侦听reactive对象类型</h2>
    <div>姓名: {{ person.name }}</div>
    <div>宠物: {{ person.pets.dog }} & {{ person.pets.cat }}</div>
    <button @click="changName">修改姓名</button>
    <button @click="changDogName">修改汪星人名字</button>
    <button @click="changCatName">修改喵星人名字</button>

    <h2>侦听ref或reactive对象类型里的某个属性</h2>
    <div>类型: {{ hobby.type }}</div>
    <div>
      游戏: Zelda {{ hobby.game.zelda }} year & lol {{ hobby.game.lol }} year
    </div>
    <button @click="changType">修改类型</button>
    <button @click="changGame">修改游戏</button>
    <button @click="changZelda">Zelda+1</button>
    <button @click="changLol">Lol+2</button>

    <h2>侦听上述多个数据</h2>
    <div>停止侦听</div>
    <button @click="stop">停止侦听多个数据</button>

    <h2>watchEffect</h2>
    <div>立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行</div>
  </div>
</template>

<script setup lang="ts" name="Person">
  /*
watch()默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数。
- 第1个参数是侦听器的源，来源可以是以下几种：
    1、一个函数，返回一个值
    2、一个 ref
    3、一个响应式对象
    4、...或是由以上类型的值组成的数组
- 第2个参数是在发生变化时要调用的回调函数。这个回调函数接受三个参数：新值、旧值，以及一个用于注册副作用清理的回调函数
- 第3个可选的参数是一个对象，支持以下这些选项：
    1、immediate：在侦听器创建时立即触发回调，第一次调用时旧值是undefined
    2、deep：如果源是对象，强制深度遍历，以便在深层级变更时触发回调
    3、once：回调函数只会运行一次，侦听器将在回调函数首次运行后自动停止
    4、flush：调整回调函数的刷新时机
    5、onTrack / onTrigger：调试侦听器的依赖
*/
  import { ref, reactive, watch, watchEffect } from 'vue'

  // 1、侦听ref基本类型
  let sum = ref(0)
  // 方法
  function addSum() {
    sum.value += 1
  }
  // 侦听
  watch(sum, (sum, preSum) => {
    console.log(sum, preSum)
  })

  // 2、侦听ref对象类型
  let car = ref({
    bmw: 32,
    tesla: {
      model3: 25,
      modelY: 32,
    },
  })
  let newCar = ref({
    cybertruck: 60,
  })
  // 方法
  function changCar() {
    car.value = {
      bmw: 60,
      tesla: {
        model3: 25,
        modelY: 32,
      },
    }
  }
  function changBmwPrice() {
    car.value.bmw += 1
  }
  function changModel3Price() {
    car.value.tesla.model3 += 1
  }
  function changModelYPrice() {
    car.value.tesla.modelY += 2
  }
  /*
侦听的是ref对象类型时，侦听的是该对象的地址，内部属性变化时，改地址不会改变
若想侦听内部属性变化，需手动开启深度侦听{ deep: true }
*/
  watch(car, (car, prevCar) => {
    console.log('未开启深度侦听', car, prevCar)
  })
  watch(
    car,
    (car, prevCar) => {
      console.log('开启深度侦听', car, prevCar)
    },
    {
      deep: true,
    }
  )

  // 3、侦听reactive对象类型
  let person = reactive({
    name: 'zhangsan',
    pets: {
      dog: 'Husky',
      cat: 'Siam',
    },
  })
  // 方法
  function changName() {
    person.name += '~'
  }
  function changDogName() {
    person.pets.dog += '~'
  }
  function changCatName() {
    person.pets.cat += '~'
  }
  // 默认开启深度监视
  watch(person, (person, prevPerson) => {
    console.log(person, prevPerson)
  })

  // 4、侦听ref或reactive对象类型里的某个属性
  let hobby = reactive({
    type: 'game',
    game: {
      zelda: 10,
      lol: 5,
    },
  })
  // 方法
  function changType() {
    hobby.type += '~'
  }
  function changGame() {
    Object.assign(hobby, {
      game: {
        zelda: 2,
        lol: 7,
      },
    })
  }
  function changZelda() {
    hobby.game.zelda += 1
  }
  function changLol() {
    hobby.game.lol += 2
  }
  /* 
1、侦听响应式对象中的某个基本类型属性时，必须写成函数式
2、侦听响应式对象中的某个对象类型属性时，可以直接写，也可以写成函数式，推荐写成函数式
*/
  watch(
    // 侦听hooby对象中的属性type
    () => hobby.type,
    (type, prevType) => {
      console.log(type, prevType)
    }
  )
  watch(
    // 侦听hooby对象中的属性：game对象
    // 也可以写成：hobby.game,
    // 推荐写成函数式
    () => hobby.game,
    (game, prevGame) => {
      console.log(game, prevGame)
    },
    {
      deep: true,
    }
  )

  // 5、侦听上述多个数据
  const stopWatch = watch(
    // 需要被侦听的数据，放在数组里即可
    [sum, () => person.pets.cat, () => hobby.game.zelda],
    (val, prevVal) => {
      console.log('侦听多数据：', val, prevVal)
    },
    {
      deep: true,
    }
  )
  // 停止侦听器
  function stop() {
    console.log('侦听多个数据的侦听器关闭了')
    stopWatch()
  }

  // 补充watchEffect
  /* 
    立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行
    watch与watchEffect对比
      1、都能侦听数据变化，侦听方式不同
      2、watch：需明确指明需要被侦听的数据
      3、watchEffect：不需明确指明需要被侦听的数据（函数中用到哪些属性，就会侦听哪些属性）
  */
  watchEffect(() => {
    if (sum.value >= 6 || hobby.game.lol >= 10) {
      console.log('111', sum.value, hobby.game.lol)
    }
  })
</script>

<style scoped lang="scss">
  .person {
    button {
      margin-top: 12px;
      margin-right: 10px;
    }
  }
</style>
