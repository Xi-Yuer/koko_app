import { Button, Image, View } from '@tarojs/components'
import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { AtIcon, AtModal, AtModalContent, AtModalAction, AtTextarea } from 'taro-ui'
import { updateUserInfo } from '@/service/user'
import { useUploadAvatar, useGetUserInfo } from './hooks/index'

import styles from './index.module.scss'

const Detail = memo(() => {

  const [isEdit, setIsEdit] = useState(false)
  const [editValue, setEditValue] = useState('')
  const [placehoder, setPlacehoder] = useState('')
  const [type, setType] = useState(0)

  const { user } = useSelector<any, any>(state => state)
  const uploadAvatar = useUploadAvatar()
  const { get } = useGetUserInfo()

  const updateAvatarAction = () => {
    uploadAvatar().then(() => {
      get(user.detail.id)
    })
  }

  const confrimHandel = () => {
    setIsEdit(false)
    updateUserInfo({
      [type === 0 ? 'name' : 'asign']: editValue
    }).then(() => {
      get(user.detail.id).then(() => {
        setIsEdit(false)
        setEditValue('')
      })
    })
  }

  const editHandel = (types: number) => {
    setIsEdit(true)
    setType(types)
    types === 0 ? setPlacehoder('请输入您的昵称') : setPlacehoder('请输入个人简介')
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
      <View className={styles.row_i} onClick={() => editHandel(0)}>
        <View className={styles.left}>名字</View>
        <View className={styles.center}>{user.detail.name}</View>
        <View className={styles.right}>
          <AtIcon value='chevron-right' size='20' color='grey'></AtIcon>
        </View>
      </View>
      <View className={styles.row_i} onClick={() => editHandel(1)}>
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
      {/* 模态框 */}
      <AtModal isOpened={isEdit}>
        <AtModalContent>
          <AtTextarea
            count={false}
            value={editValue}
            onChange={(e) => setEditValue(e)}
            maxLength={200}
            placeholder={placehoder}
          />
        </AtModalContent>
        <AtModalAction> <Button onClick={() => setIsEdit(false)}>取消</Button> <Button onClick={confrimHandel}>确定</Button> </AtModalAction>
      </AtModal>
    </View>
  )
})

export default Detail
