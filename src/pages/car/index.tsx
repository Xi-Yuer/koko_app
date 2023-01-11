import { View } from '@tarojs/components'
import { memo, useEffect, useState } from 'react'

import { getCarGoods } from '../../service/car/index'
import GoodsItem from './components/goods-item/index'
import Settlement from './components/settlement'
import styles from './index.module.scss'

const Car = memo(() => {
  const [goods, setGoods] = useState<any>([])
  useEffect(() => {
    getCarGoods().then(({ data }) => {
      setGoods(data)
    })
  }, [])
  return (
    <View>
      {
        goods?.map(i => {
          return <GoodsItem data={i} key={i.id} />
        })
      }
      <View className={styles.settlement}>
        <Settlement />
      </View>
    </View>
  )
})

export default Car
