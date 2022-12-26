import { View } from '@tarojs/components'
import { useLaunch } from '@tarojs/taro'
import { memo } from 'react'

const GoodsDetail = memo(() => {

  useLaunch((options) => {
    console.log('dd')
    console.log(options)
  })
  return (
    <View>GoodsDetail</View>
  )
})

export default GoodsDetail
