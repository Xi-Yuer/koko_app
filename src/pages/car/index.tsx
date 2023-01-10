import { View } from '@tarojs/components'
import { memo, useEffect } from 'react'
import { getCarGoods } from '../../service/car/index'

const Car = memo(() => {
  useEffect(() => {
    getCarGoods().then(res => {
      console.log(res)
    })
  }, [])
  return (
    <View>Car</View>
  )
})

export default Car
