import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { memo } from 'react'
import { AtIcon } from 'taro-ui'

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

const navToSuggestionPage = () => {
  Taro.navigateTo({
    url: '/subPages/pages/suggestion/index'
  })
}

const About = memo(() => {
  return (
    <View className={styles.wrapper}>
      <View className={styles.row_i} onClick={navToPrivacyPage}>
        <Text>隐私保护指引</Text>
        <AtIcon value='chevron-right' color='gray' size='15'></AtIcon>
      </View>
      <View className={styles.row_i} onClick={navToSuggestionPage}>
        <Text>意见反馈</Text>
        <AtIcon value='chevron-right' color='gray' size='15'></AtIcon>
      </View>
      <View className={styles.row_i} onClick={callPhone}>
        <Text>联系我们</Text>
        <AtIcon value='phone' color='gray' size='15'></AtIcon>
      </View>
    </View>
  )
})

export default About
