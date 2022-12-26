import { Text, View } from '@tarojs/components'
import { FC, memo } from 'react'
import styles from './index.module.scss'

interface IProps {
  title: string
}

const AreaTitle: FC<IProps> = memo((props: IProps) => {
  const { title } = props
  return (
    <View className={styles.wrapper}>
      <Text>{title}</Text>
    </View>
  )
})

export default AreaTitle
