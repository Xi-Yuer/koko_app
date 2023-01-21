import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { useDispatch } from 'react-redux'
import { memo } from 'react'
import cache from '@/utils/cache'
import Taro from '@tarojs/taro'
import { clearUserStore } from '@/store'

import styles from './index.module.scss'

const Setting = memo(() => {
  const dispatch = useDispatch()
  const loginoutHandel = () => {
    cache.clear()
    dispatch(clearUserStore())
    Taro.switchTab({
      url: '/pages/mine/index'
    })
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.login_out} onClick={loginoutHandel}>
        <AtIcon value='close-circle' size='20'></AtIcon>
        <View>退出登录</View>
      </View>
    </View >
  )
})

export default Setting
