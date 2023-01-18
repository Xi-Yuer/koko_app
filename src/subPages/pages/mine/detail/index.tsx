import { useUploadAvatar } from '@/hooks/useUploadAvatar'
import { Image, View } from '@tarojs/components'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AtIcon } from 'taro-ui'
import { getUserInfo } from '@/service/user'

import { setUser } from '@/store/index'

import styles from './index.module.scss'

const Detail = memo(() => {

  const dispath = useDispatch()
  const { user } = useSelector<any, any>(state => state)
  const uploadAvatar = useUploadAvatar()

  const updateAvatarAction = () => {
    uploadAvatar().then(() => {
      getUserInfo(user.detail.id).then(res => {
        dispath(setUser({
          data: res.data
        }))
      })
    })
  }

  return (
    <View className={styles.wrapper}>
      <View className={styles.avatar} onClick={updateAvatarAction}>
        <View className={styles.flex}>
          头像
        </View>
        <View className={styles.left}>
          <View className={styles.img}>
            <Image src={user.detail.avatar} mode='aspectFill'></Image>
            <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
          </View>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>名字</View>
        <View className={styles.center}>{user.detail.name}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>简介</View>
        <View className={styles.center}>{user.detail.asign}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>性别</View>
        <View className={styles.center}>{!user.detail.gender ? '女' : '男'}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>权限</View>
        <View className={styles.center}>{user.detail.is_admin ? '管理员' : '非管理员'}</View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>地址</View>
        <View className={styles.center}>{user.address.cityName + user.address.countyName + user.address.detailInfo}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
    </View>
  )
})

export default Detail
