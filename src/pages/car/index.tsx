import { View } from '@tarojs/components'
import { memo, useEffect, useState } from 'react'
import { useDidShow } from '@tarojs/taro'
import { useSelector } from 'react-redux'

import { getCarGoods } from '../../service/car/index'
import Del from './components/del'
import Edit from './components/edit'
import Empty from '../../components/empty/index'
import GoodsItem from './components/goods-item/index'
import Settlement from './components/settlement'
import styles from './index.module.scss'

const Car = memo(() => {
  const [goods, setGoods] = useState<any>([])

  const { isEdit } = useSelector<any, any>((state) => state.car)

  useEffect(() => initData(), [])
  useDidShow(() => initData())

  const initData = () => {
    getCarGoods().then(({ data }) => {
      setGoods(data)
    })
  }
  return (
    <View className={styles.wrapper}>
      <Edit />
      {
        goods?.map(i => {
          return <GoodsItem data={i} key={i.id} />
        })
      }
      <View className={styles.settlement}>
        {
          isEdit ? <Settlement /> : <Del initData={initData} />
        }
      </View>
      {
        !goods.length && <Empty />
      }
    </View>
  )
})

export default Car
