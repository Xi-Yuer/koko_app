import { Image, Text, View } from '@tarojs/components'
import { FC, memo, useState } from 'react'
import { AtInputNumber } from 'taro-ui'
import { IGoodsDetailInfo } from '../../../../service/shop/type'
import styles from './index.module.scss'

interface IProps {
  data?: IGoodsDetailInfo
  isBuy: boolean
}
const PopUp: FC<IProps> = memo((props) => {
  const { data, isBuy } = props

  const [price = data?.price, setPrice] = useState<any>(data?.price)
  const [count, setCount] = useState<any>(1)


  const handleChange = e => {
    setCount(e)
    setPrice(e * (data?.price || 1))
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.top}>
        <View className={styles.img}>
          <Image src={data?.picture || ''} mode='aspectFill'></Image>
        </View>
        <View className={styles.price}>￥{price}</View>
      </View>
      <View className={styles.count}>
        <Text>购买数量</Text>
        <AtInputNumber
          min={1}
          step={1}
          value={count}
          onChange={handleChange} type='number'
        />
      </View>
      <View className={styles.control}>{!isBuy ? '加入购物车' : '立即购买'}</View>
    </View>
  )
})

export default PopUp
