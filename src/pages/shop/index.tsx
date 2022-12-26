
import { FC, memo, useEffect, useState } from 'react'
import { ScrollView, View } from '@tarojs/components'

import { getGoodsList } from '../../service/shop/index'

import AreaTitle from '../../components/area-title/index'
import Banner from './components/banner'
import Notify from './components/notify'
import Goods from './components/goods'

import styles from './index.module.scss'

const Shop: FC = memo(() => {
  const [goodsList, setGoodsList] = useState<any[]>()
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
      <ScrollView>
        {
          goodsList?.map(i => <Goods key={i.id} data={i} />
          )
        }
      </ScrollView>
    </View>
  )
})

export default Shop
