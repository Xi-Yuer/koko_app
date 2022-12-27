import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { FC, memo } from 'react'

import styles from './index.module.scss'

import { getHeight } from '../../utils/system'
import { useNavHeight } from '../../hooks/useNavHeight'

const AreaNav: FC<any> = memo(() => {

  const [bgOpacity] = useNavHeight()
  const { menuButtonInfo, navHeight } = getHeight()

  const back = () => Taro.navigateBack()
  return (
    <View
      className={styles.wrapper}
      style={{
        'height': (navHeight + menuButtonInfo.height / 2) + 'px',
        'backgroundColor': `rgba(255, 255, 255, ${bgOpacity})`
      }}
    >
      <View className={styles.icon} style={{ 'top': (menuButtonInfo.top) + 'px' }}>
        <AtIcon value='chevron-left' size='25' color='black' onClick={back}></AtIcon>
      </View>
    </View>
  )
})

export default AreaNav
