import { View } from '@tarojs/components'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit } from '../../../../store/index'
import styles from './index.module.scss'

const Edit = memo(() => {
  const { isEdit } = useSelector<any, any>((state => state.car))
  const dispatch = useDispatch()
  const editHanldel = () => {
    dispatch(edit(false))
  }
  const outEdit = () => {
    dispatch(edit(true))
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.location}></View>
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
