import { Text, View } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'
import { memo } from 'react'
import { AtAvatar } from 'taro-ui'
import { Login } from '../../service/user/index'
import { getHeight } from '../../utils/system'
import styles from './index.module.scss'

const Mine = memo(() => {
  const { menuButtonInfo, navHeight } = getHeight()

  const login = () => {
    Taro.login().then(({ code }) => {
      Login(code).then(res => {
        console.log(res)
      })
    })
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.navbg}>
        <View
          className={styles.nav_title}
          style={{
            'height': pxTransform((navHeight + menuButtonInfo.height / 2)),
            'top': (menuButtonInfo.top) + 'px'
          }}
        >
          <Text>个人中心</Text>
        </View>
        <View className={styles.login}>
          <AtAvatar circle text='凹凸'></AtAvatar>
          <Text onClick={login} className={styles.login_text}>点击登录</Text>
          {/* <Button openType='getPhoneNumber' onGetPhoneNumber={getPhoneNumber}>点击登录</Button> */}
        </View>
      </View>
      <View className={styles.bot_wrapper}></View>
    </View>
  )
})

export default Mine
