import { suggestion } from '@/service/suggestion'
import { View, Input, Textarea } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { memo, useState } from 'react'
import styles from './index.module.scss'

const Suggestion = memo(() => {
  const [content, setContent] = useState<any>('')
  const [contact, setContact] = useState<any>('')

  const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  const phoneEeg = /^[1][3,4,5,7,8,9][0-9]{9}$/;

  const suggestionHandle = () => {
    // 边界判断
    if (!content) {
      Taro.showToast({
        title: '内容不能为空',
        icon: 'error',
      })
      return
    }
    const isEmail = emailReg.test(contact)
    const isPhone = phoneEeg.test(contact)

    if (isEmail || isPhone) {
      suggestion(content, contact).then(res => {
        Taro.showToast({
          title: res.message,
          icon: 'success'
        })
        setContent('')
      })
    } else {
      Taro.showToast({
        title: '联系方式不正确',
        icon: 'error',
      })
      return
    }
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.content}>
        <Textarea
          value={content}
          onInput={(e) => setContent(e.detail.value)}
          placeholder='请告诉我们你的想法，我们将不断改进!'
        />
      </View>
      <View className={styles.contact}>
        <Input
          value={contact}
          name='value'
          type='text'
          onInput={(e) => setContact(e.detail.value)}
          placeholder='手机号/邮箱（方便我们与您取得联系）'
        />
      </View>
      <View className={styles.btn} onClick={suggestionHandle}>提交反馈</View>
    </View>
  )
})

export default Suggestion
