import { FC, memo, useEffect, useState } from 'react'
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'

import { getBannerList } from '@/service/shop/index'
import { IBanner } from '@/service/shop/type'
import styles from './index.module.scss'

const Banner: FC = memo(() => {
  const [bannerList, setBannerList] = useState<IBanner[]>([])

  useEffect(() => {
    getBannerList().then((res) => {
      setBannerList(res.data)
    })
  }, [])
  return (
    <View className={styles.banner}>
      <Swiper
        indicatorColor='#ffffff'
        indicatorActiveColor='#549bf7'
        circular
        indicatorDots
        autoplay
      >
        {
          bannerList?.map(i => (
            <SwiperItem key={i.id}>
              <Image src={i.imgUrl} mode='aspectFill' className={styles.image} />
            </SwiperItem>
          ))
        }
      </Swiper>
    </View>
  )
})

export default Banner
