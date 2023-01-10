import { View, Text } from '@tarojs/components'
import { FC, memo } from 'react'
import { AtIcon } from 'taro-ui'
import styles from './index.module.scss'

interface IProps {
  open: (isBuy: boolean) => void
}
const BuyControl: FC<IProps> = memo(({ open }) => {
  return (
    <View className={styles.wrapper}>
      <Text className={styles.into_car} onClick={() => open(false)}><AtIcon value='shopping-cart' size='15' color='#fff'></AtIcon>加入购物车</Text>
      <Text className={styles.buy} onClick={() => open(true)}>立即购买</Text>
    </View>
  )
})

export default BuyControl
