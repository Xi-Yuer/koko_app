import { Image, Text, View } from '@tarojs/components'
import { FC, memo, PropsWithChildren } from 'react'
import { IGoods } from 'src/service/shop/type'
import styles from './index.module.scss'

interface IProps extends PropsWithChildren {
  data: IGoods
}
const Goods: FC<IProps> = memo((props: IProps) => {
  const { data } = props
  return (
    <View className={styles.wrapper}>
      <View className={styles.left}>
        <Image src={data.picture} mode='aspectFill' />
      </View>
      <View className={styles.right}>
        <View className={styles.name}>
          <Text>{data.product_name}</Text>
        </View>
        <View className={styles.description}>
          <Text>{data.description}</Text>
        </View>
        <View className={styles.info}>
          <Text>剩余:{data.stock}{data.stock_unit}</Text>
          <Text>{data.product_address}</Text>
        </View>
        <View className={styles.price_info}>
          <View className={styles.control}>
            <View>
              <Text className={styles.price}>
                <Text className={styles.price_}>价格:￥</Text>
                {data.price}
              </Text>
              <Text className={styles.old_price}>
                <Text className={styles.oldPrice_}>原价:￥</Text>
                {data.old_price}
              </Text>
            </View>
            <View className={styles.buy_box}>
              <Text >立即购买</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
})

export default Goods
