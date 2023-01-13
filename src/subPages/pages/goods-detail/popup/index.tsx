import { Image, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { FC, memo, useState } from 'react'
import { AtInputNumber } from 'taro-ui'
import { IntoGoodsCar } from '../../../../service/car'
import { IGoodsDetailInfo } from '../../../../service/shop/type'
import styles from './index.module.scss'

interface IProps {
  data?: IGoodsDetailInfo;
  isBuy: boolean;
  closePopup: Function
}
const PopUp: FC<IProps> = memo((props) => {
  const { data, isBuy, closePopup } = props

  const [price = data?.price, setPrice] = useState<any>(data?.price)
  const [count, setCount] = useState<any>(1)


  const handleChange = e => {
    setCount(e)
    setPrice(e * (data?.price || 1))
  }

  const clikHandle = () => {
    if (!isBuy) {
      // 加入购物车
      IntoGoodsCar(count, data?.id!).then(() => {
        Taro.showToast({
          title: "已加入购物车",
          icon: 'success'
        })
        closePopup()
      })
    }
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
      <View className={styles.control} onClick={clikHandle}>{!isBuy ? '加入购物车' : '立即购买'}</View>
    </View>
  )
})

export default PopUp
