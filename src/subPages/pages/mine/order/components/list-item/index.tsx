import { Image, View, Text } from '@tarojs/components'
import { FC, memo } from 'react'
import dayjs from 'dayjs'
import { Enum } from '@/enum/index'


import styles from './inddex.module.scss'

interface IProps {
  data: any;
  status: number
}

const ListItem: FC<IProps> = memo((props) => {
  const { data, status } = props
  return (
    <View className={styles.containner}>
      {
        data?.products?.map(i => {
          return (
            <View key={i.id} className={styles.item}>
              <View className={styles.status}>{Enum[status]}</View>
              <View className={styles.wrapper}>
                <View className={styles.img}>
                  <Image src={i.product.picture} mode='aspectFill'></Image>
                </View>
                <View className={styles.info}>
                  <View className={styles.title} >{i.product.product_name}</View>
                  <View className={styles.sub_title} >{i.product.description}</View>
                  <View className={styles.count}>
                    <View className={styles.price}>￥{i.product.price}/{i.product.stock_unit}</View>
                    <View className={styles.add}>x{i.count}</View>
                  </View>
                </View>
              </View>
              <View className={styles.remark}>
                <View>合计</View>
                <View>
                  <Text className={styles.price}>￥{data.total_price}</Text>
                </View>
              </View>
              <View className={styles.remark}>
                <View>订单备注</View>
                <View>
                  <Text className={styles.remark_text}>{i.remark}</Text>
                </View>
              </View>
              <View className={styles.remark}>
                <View>创建时间</View>
                <View>
                  <Text className={styles.remark_text}>{dayjs(data.create_time).format("YYYY-MM-DD HH:mm:ss")}</Text>
                </View>
              </View>
            </View>
          )
        })
      }

    </View>
  )
})

export default ListItem
