import { View } from '@tarojs/components'
import { FC, memo } from 'react'
import { AtNoticebar } from 'taro-ui'
import styles from './index.module.scss'

const Notify: FC = memo(() => {
  return (
    <View className={styles.notify}>
      <AtNoticebar marquee icon='volume-plus'>
        迎新春，拜新年！欢迎各位新老顾客光临，全部商品均支持同城配送。
      </AtNoticebar>
    </View>
  )
})

export default Notify
