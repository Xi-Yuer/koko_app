import Taro from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import { FC, memo, useState } from 'react'
import { AtSwipeAction } from "taro-ui"
import { SwipeActionOption } from 'taro-ui/types/swipe-action'

import { addTemOrder } from '@/store/index'
import { delUserOrder } from '@/service/order'
import dayjs from 'dayjs'
import { Enum } from '@/enum/index'

import styles from './inddex.module.scss'


interface IType extends SwipeActionOption {
  type: number
}
const style = {
  backgroundColor: 'transparent',
  height: '25px',
  overflow: 'hidden',
  marginTop: 'none'
}
const options: IType[] = [
  {
    text: '删除',
    type: 0,
    style: {
      ...style,
      color: 'grey'
    }
  },
  {
    text: '支付',
    type: 1,
    style: {
      ...style,
      color: 'orangered'
    }
  }
]

interface IProps {
  data: any;
  initData: Function;
  status: number
}

const ListItem: FC<IProps> = memo((props) => {
  const { data, status, initData } = props

  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const clickHandle = ({ type }: IType) => {
    setIsOpen(false)
    if (type === 0) {
      // 删除
      delUserOrder(data.id).then(() => initData())
    } else {
      // 支付
      const tem: any = []
      data.products.forEach(i => {
        if (i) {
          tem.push(
            {
              ...data,
              count: i.count,
              product: {
                ...i,
                ...i.product
              }
            }
          )
        }
      })
      dispatch(addTemOrder(tem))
      Taro.navigateTo({
        url: '/subPages/pages/place-order/index'
      })
    }
  }
  return (
    <View className={styles.containner}>
      <View>
        <AtSwipeAction options={options}
          autoClose
          isOpened={isOpen}
          onClick={clickHandle}
        >
          <View className={styles.status}>
            <View>{Enum[status]}</View>
            {
              !isOpen && <View className={styles.btn} onClick={() => setIsOpen(!isOpen)}>· · ·</View>
            }
          </View>
        </AtSwipeAction>
      </View>
      {
        data?.products?.map(i => {
          return (
            <View key={i.id} className={styles.item}>
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
