import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { memo, useState } from 'react'
import { AtIcon } from 'taro-ui'
import { useDispatch, useSelector } from 'react-redux'
import { edit } from '../../../../store/index'
import styles from './index.module.scss'

const Edit = memo(() => {
  const { isEdit } = useSelector<any, any>((state => state.car))
  const dispatch = useDispatch()

  const [address, setAddress] = useState('选择收货地址')
  const editHanldel = () => {
    dispatch(edit(false))
  }
  const outEdit = () => {
    dispatch(edit(true))
  }
  const getAddress = () => {
    Taro.chooseAddress().then(res => {
      const result = res.provinceName + res.cityName + res.countyName + res.detailInfo
      setAddress(result)
    })
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.location} onClick={getAddress}>
        <AtIcon value='map-pin' size='15' color='#747474'></AtIcon>
        <Text>{address}</Text>
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
