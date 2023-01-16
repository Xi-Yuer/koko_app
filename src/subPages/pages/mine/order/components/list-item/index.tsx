import Taro from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'
import { FC, memo } from 'react'
import { AtSwipeAction } from "taro-ui"
import { SwipeActionOption } from 'taro-ui/types/swipe-action'

import dayjs from 'dayjs'

import { Enum } from '@/enum/index'
import { btn_text } from './constant'

import styles from './inddex.module.scss'
import { useEditOrderStatus } from './useEditOrderStatus'

export interface IType extends SwipeActionOption {
  type: number
}
interface IProps {
  data: any;
  initData: () => void;
  status: number
}

const ListItem: FC<IProps> = memo((props) => {
  const { data, status, initData } = props

  const options: IType[] = [
    ...btn_text[status]
  ]

  const { isOpen, setIsOpen, clickHandle } = useEditOrderStatus(data, initData)

  const navToDetailPage = (id) => {
    Taro.navigateTo({
      url: `/subPages/pages/goods-detail/index?id=${id}`
    })
  }

  return (
    <View className={styles.containner}>
      <View>
        <AtSwipeAction options={options}
          autoClose
          isOpened={isOpen}
          onClick={clickHandle}
        >
          <View className={styles.status} onClick={() => setIsOpen(!isOpen)}>
            <View>{Enum[status]}</View>
            {
              !isOpen && <View className={styles.btn}>···</View>
            }
          </View>
        </AtSwipeAction>
      </View>
      {
        data?.products?.map(i => {
          return (
            <View key={i.id} className={styles.item}>
              <View className={styles.wrapper} onClick={() => navToDetailPage(i.product.id)}>
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
                <View>订单备注</View>
                <View>
                  <Text className={styles.remark_text}>{i.remark}</Text>
                </View>
              </View>
            </View>
          )
        })
      }
      <View className={styles.remark}>
        <View>创建时间</View>
        <View>
          <Text className={styles.remark_text}>{dayjs(data.create_time).format("YYYY-MM-DD HH:mm:ss")}</Text>
        </View>
      </View>
      <View className={styles.remark}>
        <View>合计</View>
        <View>
          <Text className={styles.price}>￥{data.total_price}</Text>
        </View>
      </View>
    </View>
  )
})

export default ListItem
