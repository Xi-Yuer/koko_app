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
import PopUp from './popup'

const GoodsDetail: FC = memo(() => {

  const router = useRouter()
  const [detail, setDetail] = useState<IGoodsDetailInfo>()
  const [openDialog, setOpenDialog] = useState(false)
  const [isBuy, setIsBuy] = useState(false)

  useEffect(() => {
    const goodsID = router.params.id
    getGoodsDetail(goodsID as string).then(res => {
      setDetail(res.data[0])
    })
  }, [router])

  const openDialogHandle = (bol: any) => {
    setOpenDialog(true)
    setIsBuy(bol)
  }


  return (
    <View>
      <AreaNav />
      <Banner data={detail?.banners} />
      <View className={styles.padding_}>
        <GoodsInfo data={detail} />
      </View>
      <BuyControl open={openDialogHandle} />
      <AtFloatLayout isOpened={openDialog} onClose={() => setOpenDialog(false)}>
        <PopUp data={detail} isBuy={isBuy} />
      </AtFloatLayout>
    </View>
  )
})

export default GoodsDetail
