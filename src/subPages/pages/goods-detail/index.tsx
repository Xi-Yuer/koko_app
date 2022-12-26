import { View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { FC, memo, useEffect, useState } from 'react'
import { IGoodsDetailInfo } from 'src/service/shop/type'
import { getGoodsDetail } from '../../../service/shop/index'

const GoodsDetail: FC = memo(() => {

  const router = useRouter()
  const [detail, setDetail] = useState<IGoodsDetailInfo>()

  useEffect(() => {
    const goodsID = router.params.id
    getGoodsDetail(goodsID as string).then(res => {
      setDetail(res.data[0])
    })
  }, [router])

  return (
    <View>{detail?.product_name}</View>
  )
})

export default GoodsDetail
