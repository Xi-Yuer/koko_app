import { View, Text } from '@tarojs/components'
import { memo } from 'react'
import { useSelector } from 'react-redux'

import styles from './index.module.scss'

const Submit = memo(() => {
  const { temOrders } = useSelector<any, any>(state => state.order)
  let totalPrice = 0;
  temOrders.forEach(i => {
    totalPrice += Number(i.price)
  })
  return (
    <View className={styles.wrapper}>
      <Text className={styles.totalCount}>共{temOrders.length}件</Text>
      <Text className={styles.totalPrice}>合计￥{totalPrice.toFixed(2)}</Text>
      <View className={styles.btn}>立即支付</View>
    </View>
  )
})

export default Submit
