import { View, Text } from '@tarojs/components'
// import Taro from '@tarojs/taro'
import { memo } from 'react'
import { useSelector } from 'react-redux'
// import { pay } from '../../../../../service/pay/index'
import styles from './index.module.scss'

const Submit = memo(() => {
  const { temOrders } = useSelector<any, any>(state => state.order)
  const { detail } = useSelector<any, any>(state => state.user)

  let totalPrice = 0;
  temOrders.forEach(i => {
    totalPrice += Number(i.price)
  })


  const payHandle = () => {
    // pay(
    //   detail.openid, "龙山生态甲鱼的消费订单", 1, '4444444444'
    // ).then(res => {
    //   Taro.requestPayment({
    //     timeStamp: res.timeStamp,
    //     nonceStr: res.nonceStr,
    //     package: res.package,
    //     signType: res.signType,
    //     paySign: res.paySign,
    //     success: function (result) {
    //       console.log("成功：", result)
    //     },
    //     fail: function (err) {
    //       console.log("失败：", err)
    //     }
    //   })
    // })
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
