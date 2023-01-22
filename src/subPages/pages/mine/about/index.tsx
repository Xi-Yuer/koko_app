import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { memo } from 'react'

import styles from './index.module.scss'

const callPhone = () => {
  Taro.makePhoneCall({
    phoneNumber: '19960056759'
  })
}

const navToPrivacyPage = () => {
  Taro.navigateTo({
    url: '/subPages/pages/privacy/index'
  })
}

const About = memo(() => {
  return (
    <View className={styles.wrapper}>
      <View className={styles.row_i} onClick={navToPrivacyPage}>隐私保护指引</View>
      <View className={styles.row_i} onClick={callPhone}>联系我们</View>
    </View>
  )
})

export default About
