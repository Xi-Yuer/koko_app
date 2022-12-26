import { FC, memo, PropsWithChildren } from 'react'
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'
import { IBannerDetail } from 'src/service/shop/type'

import styles from './index.module.scss'

interface IProps extends PropsWithChildren {
  data?: IBannerDetail[]
}
const Banner: FC<IProps> = memo(({ data }) => {
  return (
    <View className={styles.banner}>
      <Swiper
        className={styles.swipper}
        indicatorColor='#ffffff'
        indicatorActiveColor='#549bf7'
        circular
        indicatorDots
        autoplay
      >
        {
          data?.map(i => (
            i.url ?
              <SwiperItem key={i.id as string}>
                <Image src={i.url} mode='aspectFill' className={styles.image} />
              </SwiperItem> : null
          ))
        }
      </Swiper>
    </View>
  )
})

export default Banner
