import { View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { AtFloatLayout } from "taro-ui"
import { FC, Fragment, memo, useEffect, useState } from 'react'

import AreaNav from '@/components/area-nav/index'
import Empty from '@/components/empty'

import { IGoodsDetailInfo } from '@/service/shop/type'
import { useSharePage } from '@/hooks/share'
import { getGoodsDetail } from '@/service/shop/index'
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

  useSharePage()

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

  const closePopup = () => setOpenDialog(false)
  return (
    <View>
      <AreaNav />
      {
        detail?.id ?
          <Fragment>
            <Banner data={detail?.banners} />
            <View className={styles.padding_}>
              <GoodsInfo data={detail} />
            </View>
            <BuyControl open={openDialogHandle} />
            <AtFloatLayout isOpened={openDialog} onClose={() => setOpenDialog(false)}>
              <PopUp data={detail} isBuy={isBuy} closePopup={closePopup} />
            </AtFloatLayout>
          </Fragment> : <Empty />
      }

    </View>
  )
})

export default GoodsDetail
