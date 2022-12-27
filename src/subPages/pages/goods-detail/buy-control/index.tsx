import { View, Text } from '@tarojs/components'
import { FC, memo } from 'react'
import { AtIcon } from 'taro-ui'
import { IGoodsDetailInfo } from '../../../../service/shop/type'
import { updateOrderStatus } from '../../../../service/order/index'
import styles from './index.module.scss'

interface IProps {
  data?: IGoodsDetailInfo;
  open: (data: IGoodsDetailInfo) => void
}
const BuyControl: FC<IProps> = memo(({ open, data }) => {

  const intoCar = () => {
    updateOrderStatus(data?.id as string, 1).then(res => {
      console.log(res)
    })
  }
  return (
    <View className={styles.wrapper}>
      <Text className={styles.into_car} onClick={intoCar}><AtIcon value='shopping-cart' size='15' color='#fff'></AtIcon>加入购物车</Text>
      <Text className={styles.buy} onClick={() => open(data!)}>立即购买</Text>
    </View>
  )
})

export default BuyControl
