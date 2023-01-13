import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createOrder, orderPayed } from '../../../../../service/order'
import { pay } from '../../../../../service/pay/index'
import styles from './index.module.scss'

const Submit = memo(() => {
  const { temOrders } = useSelector<any, any>(state => state.order)
  const { detail } = useSelector<any, any>(state => state.user)

  const [orderId, setOrderId] = useState('')
  const [total_price, setTotal_price] = useState(0)

  let totalPrice = 0;
  temOrders.forEach(i => {
    totalPrice += Number(i.product.price * i.count)
  })


  // 页面加载就创建订单
  useEffect(() => {
    createOrder(JSON.stringify(temOrders), totalPrice).then(res => {
      setOrderId(res.orderId)
      setTotal_price(res.total_price)
    })
  }, [temOrders, totalPrice])


  const payHandle = () => {
    pay(
      detail.openid, "龙山生态甲鱼的消费订单", total_price * 100, orderId
    ).then(res => {
      Taro.requestPayment({
        timeStamp: res.timeStamp,
        nonceStr: res.nonceStr,
        package: res.package,
        signType: res.signType,
        paySign: res.paySign,
        success: function () {
          orderPayed(orderId).then(result => {
            Taro.showToast({
              title: result.message,
              icon: 'success'
            })
          })
        },
        fail: function () {
          Taro.showToast({
            title: '支付失败',
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
