import { View, Text } from '@tarojs/components'
import { FC, memo } from 'react'
import { AtIcon } from 'taro-ui';

import styles from './index.module.scss'

interface IItem {
  icon: string;
  title: string
}

interface IFnProps {
  data: IItem
}

const FnList: FC<IFnProps> = memo((props) => {
  const { data } = props
  return (
    <View className={styles.wrapper}>
      <View className={styles.left}>
        <AtIcon value={data.icon} size='20'></AtIcon>
        <Text className={styles.title}>
          {data.title}
        </Text>
      </View>
      <View>
        <AtIcon value='chevron-right' size='20'></AtIcon>
      </View>
    </View>
  )
})

export default FnList
