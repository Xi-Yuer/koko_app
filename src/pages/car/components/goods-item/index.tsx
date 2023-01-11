import { Image, View } from '@tarojs/components'
import { AtInputNumber } from 'taro-ui'
import { FC, memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './index.module.scss'
import checkIMG from '../../../../assets/img/icon/check-circle-fill.png'
import { addCar, delCar } from '../../../../store/index'

interface IProps {
  data: any;
}
const GoodsItem: FC<IProps> = memo((props) => {
  const dispatch = useDispatch()
  const { data } = props

  const [count, setCount] = useState(data.count)
  const [price, setPrice] = useState(data.price)
  const [check, setCheck] = useState(false)

  const handleChange = e => {
    setCount(e)
  }

  useEffect(() => {
    setPrice(count * data.price)
  }, [count, data.price])

  useEffect(() => {
    if (check) {
      dispatch(delCar(data.id))
      dispatch(addCar({
        ...data,
        price,
        count
      }))
    } else {
      dispatch(delCar(data.id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check, price])

  const checkHandle = () => {
    setCheck(!check)
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.check} style={!check ? { border: '1px solid #b3b3b3' } : ''} onClick={checkHandle}>
        {
          check ? <Image src={checkIMG} mode='aspectFill'></Image> : null
        }
      </View>
      <View className={styles.img}>
        <Image src={data.product.picture} mode='aspectFill'></Image>
      </View>
      <View className={styles.info}>
        <View className={styles.title}>{data.product.product_name}</View>
        <View className={styles.sub_title}>{data.product.description}</View>
        <View className={styles.count}>
          <View className={styles.price}>￥{data.price}</View>
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
