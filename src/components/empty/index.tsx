import { Image, View, Text } from '@tarojs/components'
import { memo } from 'react'

import styles from './index.module.scss'

import emptyImg from '../../assets/img/icon/empty.png'

const Empty = memo(() => {
  return (
    <View className={styles.wrapper}>
      <Image src={emptyImg} mode='aspectFill'></Image>
      <Text>暂无数据</Text>
    </View>
  )
})

export default Empty
