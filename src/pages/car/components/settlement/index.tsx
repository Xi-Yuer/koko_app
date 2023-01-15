import Taro from '@tarojs/taro'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View } from '@tarojs/components'
import { addTemOrder } from '@/store/index'

import styles from './index.module.scss'

const Settlement = memo(() => {
  const dispatch = useDispatch()

  const { checked } = useSelector<any, any>((state => state.car))

  let totalPrice = 0
  checked.forEach(i => {
    totalPrice += Number(i.product.price * i.count)
  })

  const placeOrder = () => {
    dispatch(addTemOrder(checked))
    Taro.navigateTo({
      url: '/subPages/pages/place-order/index'
    })
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.select_text}>已选 ({checked.length})</View>
      <View className={styles.right}>
        <View className={styles.price}>合计￥{totalPrice.toFixed(2)}</View>
        <View
          className={styles.btn}
          onClick={placeOrder}
          style={!checked.length ? { backgroundColor: '#ff8255', pointerEvents: 'none' } : ''}
        >
          下单
        </View>
      </View>
    </View>
  )
})

export default Settlement
