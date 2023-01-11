
import { FC, memo, useEffect, useState } from 'react'
import { View } from '@tarojs/components'

import { IGoods } from 'src/service/shop/type'
import { getGoodsList } from '../../service/shop/index'

import AreaTitle from '../../components/area-title/index'
import Banner from './components/banner'
import Notify from './components/notify'
import Goods from './components/goods'

import styles from './index.module.scss'
import Empty from '../../components/empty/index'

const Shop: FC = memo(() => {
  const [goodsList, setGoodsList] = useState<IGoods[]>()

  useEffect(() => {
    getGoodsList().then(res => {
      setGoodsList(res.data)
    })
  }, [])

  return (
    <View className={styles.wrapper}>
      <Notify />
      <Banner />
      <AreaTitle title='商品列表' />
      <View className={styles.goods_wrapper}>
        {
          goodsList?.map(i => <Goods key={i.id} data={i} />
          )
        }
        {
          !goodsList?.length && <Empty />
        }
      </View>
    </View>
  )
})

export default Shop
