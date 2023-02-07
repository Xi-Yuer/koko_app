import { View } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import { memo } from 'react'
import cache from '@/utils/cache'
import Taro from '@tarojs/taro'
import { clearUserStore, clearTemOrder } from '@/store'

import styles from './index.module.scss'

const Setting = memo(() => {
  const dispatch = useDispatch()
  const loginoutHandel = () => {
    cache.clear()
    dispatch(clearUserStore())
    dispatch(clearTemOrder())
    Taro.reLaunch({
      url: '/pages/shop/index'
    })
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.login_out} onClick={loginoutHandel}>
        退出登录
      </View>
    </View >
  )
})

export default Setting
