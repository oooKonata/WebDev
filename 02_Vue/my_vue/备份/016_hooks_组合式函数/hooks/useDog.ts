import { onMounted, reactive } from 'vue'
import axios from 'axios'

export default function () {
    /* 
        hook本质是一个函数(重点)，把setup函数中使用的Composition API进行了封装
            - 将数据和方法作为函数暴露（包装在一个函数里），外部引入之后，直接调用就能获取return设置的返回值
    */

    // 数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_6801.jpg',
    ])
    // 方法：获取图片地址
    // 方式1：async await
    /* async function getDog() {
        try {
            let result = await axios.get(
                'https://dog.ceo/api/breed/pembroke/images/random'
            )
            dogList.unshift(result.data.message)
        } catch (err) {
            alert(err)
        }
    } */
    // 方式2：Promise
    function getDog() {
        axios
            .get('https://dog.ceo/api/breed/pembroke/images/random')
            .then(res => dogList.unshift(res.data.message))
            .catch(err => alert(err))
    }
    // 提供给外部
    return { dogList, getDog }
}
