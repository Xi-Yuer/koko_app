import { View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { AtFloatLayout } from "taro-ui"
import { FC, memo, useEffect, useState } from 'react'
import AreaNav from '../../../components/area-nav/index'

import { IGoodsDetailInfo } from '../../../service/shop/type'
import { getGoodsDetail } from '../../../service/shop/index'
import Banner from './banner/index'
import GoodsInfo from './goods-info'
import styles from './index.module.scss'
import BuyControl from './buy-control'

const GoodsDetail: FC = memo(() => {

  const router = useRouter()
  const [detail, setDetail] = useState<IGoodsDetailInfo>()
  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    const goodsID = router.params.id
    getGoodsDetail(goodsID as string).then(res => {
      setDetail(res.data[0])
    })
  }, [router])


  return (
    <View>
      <AreaNav />
      <Banner data={detail?.banners} />
      <View className={styles.padding_}>
        <GoodsInfo data={detail} />
      </View>
      <BuyControl data={detail} open={() => setOpenDialog(true)} />
      <AtFloatLayout isOpened={openDialog} onClose={() => setOpenDialog(false)}>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
      </AtFloatLayout>
    </View>
  )
})

export default GoodsDetail
