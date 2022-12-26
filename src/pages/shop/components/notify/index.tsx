import { View } from '@tarojs/components'
import { FC, memo } from 'react'
import { AtNoticebar } from 'taro-ui'
import styles from './index.module.scss'

const Notify: FC = memo(() => {
  return (
    <View className={styles.notify}>
      <AtNoticebar marquee icon='volume-plus'>
        大促销
      </AtNoticebar>
    </View>
  )
})

export default Notify
