import { Image, View, Text } from '@tarojs/components'
import { memo } from 'react'
import emptyImg from '@/assets/img/icon/empty.png'

import styles from './index.module.scss'


const Empty = memo(() => {
  return (
    <View className={styles.wrapper}>
      <Image src={emptyImg} mode='aspectFill'></Image>
      <Text>暂无数据</Text>
    </View>
  )
})

export default Empty
