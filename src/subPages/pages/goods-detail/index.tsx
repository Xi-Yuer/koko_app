import { View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { FC, memo, useEffect, useState } from 'react'
import AreaNav from '../../../components/area-nav/index'

import { IGoodsDetailInfo } from '../../../service/shop/type'
import { getGoodsDetail } from '../../../service/shop/index'
import Banner from './banner/index'

const GoodsDetail: FC = memo(() => {

  const router = useRouter()
  const [detail, setDetail] = useState<IGoodsDetailInfo>()

  useEffect(() => {
    const goodsID = router.params.id
    getGoodsDetail(goodsID as string).then(res => {
      setDetail(res.data[0])
    })
  }, [router])

  const arr = Array(100).fill("哈哈哈")

  return (
    <View>
      <AreaNav />
      <Banner data={detail?.banners} />
      {
        arr.map(i => <View key={i}>哈哈哈</View>)
      }
    </View>
  )
})

export default GoodsDetail
