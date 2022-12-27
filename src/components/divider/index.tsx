import { Text, View } from '@tarojs/components'
import { memo, FC } from 'react'
import styles from './index.module.scss'

interface IProps {
  title: string
}
const Divider: FC<IProps> = memo(({ title }) => {
  return (
    <View className={styles.wrapper}>
      <Text className={styles.line}></Text>
      <Text>{title}</Text>
      <Text className={styles.line}></Text>
    </View>
  )
})

export default Divider
