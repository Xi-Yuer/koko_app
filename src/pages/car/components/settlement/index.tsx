import { memo } from 'react'
import { useSelector } from 'react-redux'
import { View } from '@tarojs/components'

import styles from './index.module.scss'

const Settlement = memo(() => {

  const { checked } = useSelector<any, any>((state => state.car))

  let totalPrice = 0
  checked.forEach(i => {
    totalPrice += Number(i.price)
  })

  const placeOrder = () => {
    console.log(checked)
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.select_text}>已选 ({checked.length})</View>
      <View className={styles.right}>
        <View className={styles.price}>合计￥{totalPrice}</View>
        <View className={styles.btn} onClick={placeOrder}>下单</View>
      </View>
    </View>
  )
})

export default Settlement
