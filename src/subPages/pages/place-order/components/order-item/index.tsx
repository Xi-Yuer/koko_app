import { Image, View, Text } from '@tarojs/components'
import { FC, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AtIcon, AtFloatLayout, AtTextarea } from 'taro-ui'
import { addTemOrder } from '@/store/index'

import styles from './inddex.module.scss'

interface IProps {
  data: any
}
const OrderItem: FC<IProps> = memo((props) => {
  const { temOrders } = useSelector<any, any>(state => state.order)

  const dispatch = useDispatch()
  const { data } = props
  const [remark, setRemark] = useState('')
  const [openRemark, setOpenRemark] = useState(false)

  const remarkHandle = (e: string) => {
    setRemark(e)
    let tem: any[] = []
    for (const order of temOrders) {
      if (order.id == data.id) {
        tem.push({
          ...order,
          remark: e,
        })
      } else {
        tem.push(order)
      }
    }
    dispatch(addTemOrder(tem))
  }
  return (
    <View className={styles.containner}>
      <View className={styles.wrapper}>
        <View className={styles.img}>
          <Image src={data.product.picture} mode='aspectFill'></Image>
        </View>
        <View className={styles.info}>
          <View className={styles.title} >{data.product.product_name}</View>
          <View className={styles.sub_title} >{data.product.description}</View>
          <View className={styles.count}>
            <View className={styles.price}>￥{data.product.price}</View>
            <View className={styles.add}>x{data.count}</View>
          </View>
        </View>
      </View>
      <View className={styles.remark} onClick={() => setOpenRemark(true)}>
        <View>订单备注</View>
        <View>
          <Text className={styles.remark_text}>{remark}</Text>
          <AtIcon value='chevron-right' color='#3a3a3a' size='20'></AtIcon>
        </View>
      </View>
      <AtFloatLayout isOpened={openRemark} onClose={() => setOpenRemark(false)}>
        <View className={styles.remark_area}>
          <AtTextarea
            value={remark}
            maxLength={200}
            count={false}
            placeholder='请输入您的备注...'
            onChange={e => remarkHandle(e)}
          />
          <View className={styles.confirm_btn} onClick={() => setOpenRemark(false)}>确定</View>
        </View>
      </AtFloatLayout>
    </View>
  )
})

export default OrderItem
