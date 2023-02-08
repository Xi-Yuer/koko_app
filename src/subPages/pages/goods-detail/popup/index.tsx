import { Image, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { FC, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AtInputNumber } from 'taro-ui'
import { addTemOrder } from '@/store/index'
import { IntoGoodsCar } from '@/service/car'
import { IGoodsDetailInfo } from '@/service/shop/type'
import cache from '@/utils/cache'
import styles from './index.module.scss'

interface IProps {
  data?: IGoodsDetailInfo;
  isBuy: boolean;
  closePopup: Function
}
const PopUp: FC<IProps> = memo((props) => {
  const { data, isBuy, closePopup } = props

  const dispatch = useDispatch()
  const [price = data?.price, setPrice] = useState<any>(data?.price)
  const [count, setCount] = useState<any>(1)
  const { detail } = useSelector<any, any>(state => state.user)


  const handleChange = e => {
    setCount(e)
    setPrice(e * (data?.price || 1))
  }

  const clikHandle = () => {
    const token = cache.get("USER_TOKEN");
    if (!token) {
      if (!token) {
        Taro.showToast({
          title: "请先登录",
          icon: "error",
        });
        setTimeout(() => {
          Taro.switchTab({
            url: '/pages/mine/index'
          })
        }, 1000)
        return;
      }
    }
    if (!isBuy) {
      // 加入购物车
      IntoGoodsCar(count, data?.id!).then(() => {
        closePopup()
        Taro.showToast({
          title: "已加入购物车",
          icon: 'success'
        })
      })
    } else {
      // 立即购买
      dispatch(addTemOrder([{
        product: data,
        count,
        user_id: detail.id
      }]))
      Taro.navigateTo({
        url: '/subPages/pages/place-order/index'
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
