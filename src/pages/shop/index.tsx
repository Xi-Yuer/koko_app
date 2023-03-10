import { FC, memo, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import Taro, { pxTransform, usePullDownRefresh } from '@tarojs/taro'

import { IGoods } from 'src/service/shop/type'
import { getGoodsList } from '@/service/shop/index'

import AreaTitle from '@/components/area-title/index'
import Empty from '@/components/empty/index'
import { useSharePage } from '@/hooks/share'
import Banner from './components/banner'
import Notify from './components/notify'
import Goods from './components/goods'

import styles from './index.module.scss'

const Shop: FC = memo(() => {
  const [goodsList, setGoodsList] = useState<IGoods[]>()
  useSharePage()

  useEffect(() => initData(), [])

  const initData = () => {
    getGoodsList().then(res => {
      setGoodsList(res.data)
      Taro.stopPullDownRefresh()
    })
  }

  usePullDownRefresh(() => initData())

  return (
    <View className={styles.wrapper}>
      <Notify />
      <Banner />
      <AreaTitle title='ๅๅๅ่กจ' />
      <View className={styles.goods_wrapper}>
        {
          goodsList?.map(i => <Goods key={i.id} data={i} />
          )
        }
        {
          (goodsList?.length as number) <= 0 && <View style={{ boxSizing: 'border-box', height: pxTransform(400), overflow: "hidden" }}><Empty /></View>
        }
      </View>
    </View>
  )
})

export default Shop
