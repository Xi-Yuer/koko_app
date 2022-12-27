import { View, Text } from '@tarojs/components'
import { FC, memo } from 'react'
import { AtIcon } from 'taro-ui'
import { IGoodsDetailInfo } from 'src/service/shop/type'
import styles from './index.module.scss'

interface IProps {
  data?: IGoodsDetailInfo;
  open: (data: IGoodsDetailInfo) => void
}
const BuyControl: FC<IProps> = memo(({ open, data }) => {
  return (
    <View className={styles.wrapper}>
      <Text className={styles.into_car}><AtIcon value='shopping-cart' size='15' color='#fff'></AtIcon>加入购物车</Text>
      <Text className={styles.buy} onClick={() => open(data!)}>立即购买</Text>
    </View>
  )
})

export default BuyControl
