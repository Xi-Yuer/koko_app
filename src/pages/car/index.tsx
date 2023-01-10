import { View } from '@tarojs/components'
import { memo, useEffect, useState } from 'react'
import { getCarGoods } from '../../service/car/index'

const Car = memo(() => {
  const [orderStatus] = useState(1)
  useEffect(() => {
    getCarGoods(orderStatus).then(res => {
      console.log(res)
    })
  }, [orderStatus])
  return (
    <View>Car</View>
  )
})

export default Car
