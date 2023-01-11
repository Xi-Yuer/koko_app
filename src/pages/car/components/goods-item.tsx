import { Image, View } from '@tarojs/components'
import { AtInputNumber } from 'taro-ui'
import { FC, memo, useState } from 'react'

import styles from './index.module.scss'

interface IProps {
  data: any
}
const GoodsItem: FC<IProps> = memo((props) => {
  const { data } = props

  const [count, setCount] = useState(data.count)
  const [price, setPrice] = useState(data.price)

  const handleChange = e => {
    setCount(e)
    setPrice(e * data.price)
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.check}></View>
      <View className={styles.img}>
        <Image src={data.product.picture} mode='aspectFill'></Image>
      </View>
      <View className={styles.info}>
        <View className={styles.title}>{data.product.product_name}</View>
        <View className={styles.sub_title}>{data.product.description}</View>
        <View className={styles.count}>
          <View className={styles.price}>￥{price}</View>
          <View className={styles.add}>
            <AtInputNumber
              min={1}
              step={1}
              value={count}
              type='number'
              onChange={handleChange}
            />
          </View>
        </View>
      </View>
    </View>
  )
})

export default GoodsItem
