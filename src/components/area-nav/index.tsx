import Taro, { pxTransform } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { FC, memo, useState, } from 'react'
import styles from './index.module.scss'
import { getHeight } from '../../utils/system'


const AreaNav: FC = memo(() => {
  const [height, setHeight] = useState(0)
  const [menuHeight, setMenuHeight] = useState(0)

  getHeight().then(({ navBarHeight, menuButtonHeight }) => {
    setHeight(navBarHeight)
    setMenuHeight(menuButtonHeight)
  })

  const back = () => Taro.navigateBack()
  return (
    <View className={styles.wrapper} style={{ top: pxTransform(height), height: menuHeight + 'px' }}>
      <AtIcon value='chevron-left' size='25' color='black' onClick={back}></AtIcon>
    </View>
  )
})

export default AreaNav
