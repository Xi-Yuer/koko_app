import cache from '@/utils/cache';
import { View, Text, Button, ButtonProps } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { FC, memo } from 'react'
import { AtIcon } from 'taro-ui';

import styles from './index.module.scss'

interface IItem {
  icon: string;
  title: string;
  type?: ButtonProps.OpenType | undefined;
  isPermission?: boolean
  path: string | undefined;
}

interface IFnProps {
  data: IItem
}

const FnList: FC<IFnProps> = memo((props) => {
  const { data } = props

  const navGationTo = () => {
    const token = cache.get("USER_TOKEN")
    if (token || !data.isPermission) {
      if (data.path) {
        Taro.navigateTo({ url: data.path })
      }
    } else {
      Taro.showToast({
        title: "请先登录",
        icon: 'error'
      })
    }
  }
  return (
    <Button className={styles.wrapper} openType={data.type} onClick={navGationTo}>
      <View className={styles.left}>
        <AtIcon value={data.icon} size='20'></AtIcon>
        <Text className={styles.title}>
          {data.title}
        </Text>
      </View>
      <View>
        <AtIcon value='chevron-right' size='20'></AtIcon>
      </View>
    </Button>
  )
})

export default FnList
