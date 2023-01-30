import { useSelector, useDispatch } from 'react-redux'
import { Button, Image, Text, View } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'
import { memo } from 'react'
import { getUserAddress, Login } from '@/service/user/index'
import { getHeight } from '@/utils/system'
import { setUserAddressAction, setUser } from '@/store/index'
import { useSharePage } from '@/hooks/share'
import FnList from '@/components/fn-list/index'

import avatar from '@/assets/img/avatar/avatar.png'

import { fnList } from './constant'
import styles from './index.module.scss'

const Mine = memo(() => {
  const { menuButtonInfo, navHeight } = getHeight()
  const { user } = useSelector<any, any>(state => state)

  const dispatch = useDispatch()
  useSharePage()

  const getPhoneNumber = ({ detail }) => {
    Taro.login().then(({ code }) => {
      Login(detail.code, code).then(res => {
        dispatch(setUser(res))
        getUserAddress().then(address => {
          dispatch(setUserAddressAction(address.data[0]))
        })
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
          <Image src={user?.detail?.avatar || avatar} mode='aspectFill'></Image>
          <View className={styles.user_name}>
            {
              user.detail ? <Text>{user?.detail?.name}</Text> : <Button style={{ display: 'contents' }} openType='getPhoneNumber' onGetPhoneNumber={getPhoneNumber} hoverClass='none'><Text className={styles.login_btn}>点击登录</Text></Button>
            }
          </View>
        </View>
      </View>
      <View className={styles.bot_wrapper}>
        {fnList.map(i => {
          return <FnList key={i.icon} data={i} />
        })}
        <Text className={styles.version}>v:0.0.3</Text>
      </View>
    </View>
  )
})

export default Mine
