import Taro from '@tarojs/taro'
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
  const { data } = props

  const dispatch = useDispatch()
  const [count, setCount] = useState(data.count)
  const [check, setCheck] = useState(false)

  const handleChange = e => {
    setCount(e)
  }

  useEffect(() => {
    if (check) {
      dispatch(delCar(data.id))
      dispatch(addCar({
        ...data,
        count
      }))
    } else {
      dispatch(delCar(data.id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check])

  const checkHandle = () => {
    setCheck(!check)
  }

  const navToDetailPage = () => {
    Taro.navigateTo({
      url: `/subPages/pages/goods-detail/index?id=${data.product.id}`
    })
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.check} style={!check ? { border: '1px solid #b3b3b3' } : ''} onClick={checkHandle}>
        {
          check ? <Image src={checkIMG} mode='aspectFill'></Image> : null
        }
      </View>
      <View className={styles.img} onClick={navToDetailPage}>
        <Image src={data.product.picture} mode='aspectFill'></Image>
      </View>
      <View className={styles.info}>
        <View className={styles.title} onClick={navToDetailPage}>{data.product.product_name}</View>
        <View className={styles.sub_title} onClick={navToDetailPage}>{data.product.description}</View>
        <View className={styles.count}>
          <View className={styles.price}>￥{data.product.price}</View>
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
