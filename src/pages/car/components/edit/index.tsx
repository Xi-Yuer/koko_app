import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { memo, useState } from 'react'
import { AtIcon } from 'taro-ui'
import { useDispatch, useSelector } from 'react-redux'
import { edit, getUserAddressAction } from '../../../../store/index'
import { createAddress } from '../../../../service/user/index'

import styles from './index.module.scss'

const Edit = memo(() => {
  const { isEdit } = useSelector<any, any>((state => state.car))
  const { address } = useSelector<any, any>((state => state.user))
  const dispatch = useDispatch()

  const [add, setAdd] = useState(address?.provinceName + address?.cityName + address?.countyName + address?.detailInfo || '点击选择收货地址')
  const editHanldel = () => {
    dispatch(edit(false))
  }
  const outEdit = () => {
    dispatch(edit(true))
  }

  // 添加地址
  const getAddress = () => {
    Taro.chooseAddress().then(res => {
      createAddress({
        cityName: res.cityName,
        countyName: res.countyName,
        detailInfo: res.detailInfo,
        provinceName: res.provinceName,
        telNumber: res.telNumber,
        userName: res.userName
      }).then(() => {
        getUserAddressAction(res)
        setAdd(res.provinceName + res.cityName + res.countyName + res.detailInfo)
      })
    })
  }
  // realname
  return (
    <View className={styles.wrapper}>
      <View className={styles.location} onClick={getAddress}>
        <AtIcon value='map-pin' size='15' color='#747474'></AtIcon>
        <Text>{add}</Text>
      </View>
      <View className={styles.edit}>
        <View className={styles.line}></View>
        {
          isEdit ? <View className={styles.edit_text} onClick={editHanldel}>编辑</View> : <View className={styles.edit_text} onClick={outEdit}>完成</View>
        }
      </View>
    </View>
  )
})

export default Edit
