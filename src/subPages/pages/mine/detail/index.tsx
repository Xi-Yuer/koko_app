import { Image, View } from '@tarojs/components'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { AtIcon } from 'taro-ui'

import styles from './index.module.scss'

const Detail = memo(() => {

  const { detail, address } = useSelector<any, any>(state => state.user)

  console.log(detail)
  return (
    <View className={styles.wrapper}>
      <View className={styles.avatar}>
        <View className={styles.left}>
          <View className={styles.img}>
            <Image src={detail.avatar} mode='aspectFill'></Image>
          </View>
        </View>
        <View className={styles.flex}>
          修改头像<AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>名字</View>
        <View className={styles.center}>{detail.name}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>简介</View>
        <View className={styles.center}>{detail.asign}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>性别</View>
        <View className={styles.center}>{!detail.gender ? '女' : '男'}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>权限</View>
        <View className={styles.center}>{detail.is_admin ? '管理员' : '非管理员'}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i}>
        <View className={styles.left}>地址</View>
        <View className={styles.center}>{address.cityName + address.countyName + address.detailInfo}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
    </View>
  )
})

export default Detail
