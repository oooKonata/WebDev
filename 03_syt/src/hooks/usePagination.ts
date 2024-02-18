/* 
  分页函数，传入相应的参数，返回“每页实际条目数”和“每页数组对象”
    - 传参：

    - 返回值：

*/
export default function (
  currentPage: number,
  pageSize: number,
  total: number,
  catUrlArr: any
) {
  let orderNum = currentPage * pageSize
  // 分页起始位数，考虑到有从0开始的情况，用末尾减去pageSize
  let orderStart: number = orderNum - pageSize
  let orderEnd: number
  let pageNum: number
  let pageUrlArr: any
  // 分页结束位数，考虑到最后一页条目数小于pageSize
  if (orderNum < total) {
    // 非最后一页时，结束为止等与起始位置 + pageSize
    orderEnd = orderStart + pageSize
  } else {
    // 最后一页，结束位置是总数
    orderEnd = total
  }
  pageNum = orderEnd - orderStart
  // 浅拷贝，取出url数组中指定的片段
  pageUrlArr = catUrlArr.slice(orderStart, orderEnd)

  // 返回值
  return { pageNum, pageUrlArr }
}
