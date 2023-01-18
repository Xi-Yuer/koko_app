import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { delGoodsCar } from '@/service/car/index'
import { createOrder, getUserOrderByID, orderPayed, updateOrder } from '@/service/order'
import { pay } from '@/service/pay/index'
import { clearCar, clearTemOrder } from '@/store/index'
import styles from './index.module.scss'

const Submit = memo(() => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { id } = router.params

  const { temOrders } = useSelector<any, any>(state => state.order)
  const { detail, address } = useSelector<any, any>(state => state.user)

  const [orderId, setOrderId] = useState('')
  const [total_price, setTotal_price] = useState(0)

  let totalPrice = 0;
  temOrders.forEach(i => {
    totalPrice += Number(i.product.price * i.count)
  })

  // 页面加载创建订单
  useEffect(() => {
    if (!id) {
      createOrder(JSON.stringify(temOrders), totalPrice).then(res => {
        setOrderId(res.orderId)
        setTotal_price(res.total_price)
      })
    } else {
      getUserOrderByID(id).then(res => {
        setOrderId(res.data.id)
        setTotal_price(res.data.total_price)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 支付时更新订单状态
  const payHandle = async () => {
    if (!address) {
      Taro.showToast({
        title: "请先完成收货地址信息",
        icon: "error"
      })
      return
    }
    // 订单的备注信息可能会更新，这里需要更新一下订单备注信息
    await updateOrder(orderId, JSON.stringify(temOrders))
    pay(
      detail.openid, "龙山生态甲鱼的消费订单", Math.ceil(total_price * 100), orderId
    ).then(res => {
      Taro.requestPayment({
        timeStamp: res.timeStamp,
        nonceStr: res.nonceStr,
        package: res.package,
        signType: res.signType,
        paySign: res.paySign,
        success: function () {
          orderPayed(orderId).then(result => {
            // 删除购物车里的订单
            const ids = temOrders.map(i => i.id)
            delGoodsCar(ids).then(() => {
              // 清空临时保存的订单
              dispatch(clearTemOrder())
              dispatch(clearCar())
              Taro.navigateBack()
              Taro.showToast({
                title: result.message,
                icon: 'success'
              })
            })
          })
        },
        fail: function () {
          Taro.showToast({
            title: res.message || '支付失败',
            icon: 'error'
          })
        }
      })
    })
  }
  return (
    <View className={styles.wrapper}>
      <Text className={styles.totalCount}>共{temOrders.length}件</Text>
      <Text className={styles.totalPrice}>合计￥{totalPrice.toFixed(2)}</Text>
      <View className={styles.btn} onClick={payHandle}>立即支付</View>
    </View>
  )
})

export default Submit
