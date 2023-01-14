import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import cache from '../../../utils/cache'
import { createAddress } from '../../../service/user/index'
import { getUserAddressAction } from '../../../store/index'
import OrderItem from './components/order-item'
import Submit from './components/submit'

import styles from './index.module.scss'

const PlaceOrder = memo(() => {
  const { temOrders } = useSelector<any, any>((state) => state.order)
  const { address } = useSelector<any, any>((state) => state.user)
  const storageAddress = cache.get("USER_ADDRESS")

  const [add, setAdd] = useState(address || storageAddress)

  const chooseAddressHandle = () => {
    Taro.chooseAddress().then(res => {
      createAddress({
        cityName: res.cityName,
        countyName: res.countyName,
        detailInfo: res.detailInfo,
        provinceName: res.provinceName,
        telNumber: res.telNumber,
        userName: res.userName
      }).then(() => {
        getUserAddressAction(res)
        setAdd(res)
      })
    })
  }
  return (
    <View className={styles.wrapper}>
      <View className={styles.address} onClick={chooseAddressHandle}>
        <View className={styles.left}>
          <View className={styles.address_text}>
            <AtIcon value='map-pin' size='20' color='#3a3a3a'></AtIcon>{add?.provinceName + add?.cityName + add?.countyName + add?.detailInfo || '点击选择收货地址'}
          </View>
          <View className={styles.user}>
            <Text className={styles.name}>{add?.userName}</Text>
            <Text className={styles.phone}>{add?.telNumber}</Text>
          </View>
        </View>
        <View>
          <AtIcon value='chevron-right' color='#3a3a3a'></AtIcon>
        </View>
      </View>
      <View className={styles.order_item}>
        {
          temOrders.map(i => {
            return <OrderItem data={i} key={i.id} />
          })
        }
      </View>
      <View className={styles.submit}>
        <Submit />
      </View>
    </View>
  )
})

export default PlaceOrder
