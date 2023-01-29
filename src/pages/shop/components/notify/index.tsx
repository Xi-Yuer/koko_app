import { getNotify } from '@/service/notify'
import { View } from '@tarojs/components'
import { FC, memo, useEffect, useState } from 'react'
import { AtNoticebar } from 'taro-ui'
import styles from './index.module.scss'

const Notify: FC = memo(() => {
  const [notify, setNotify] = useState('')
  useEffect(() => {
    getNotify().then(res => {
      const notifyResult = res.data[0].notify
      setNotify(notifyResult)
    })
  }, [])
  return (
    <View className={styles.notify}>
      {
        notify != '' && <AtNoticebar marquee icon='volume-plus'>
          {notify}
        </AtNoticebar>
      }

    </View>
  )
})

export default Notify
