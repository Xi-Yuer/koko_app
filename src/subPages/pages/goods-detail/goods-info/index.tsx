import Taro from '@tarojs/taro'
import { Image, Text, View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { FC, memo } from 'react'
import { IGoodsDetailInfo } from '@/service/shop/type'
import AreaTitle from '@/components/area-title/index'
import Divider from '@/components/divider/index'
import styles from './index.module.scss'

interface IProps {
  data?: IGoodsDetailInfo
}

const GoodsInfo: FC<IProps> = memo(({ data }) => {
  const contactPhone = () => {
    Taro.makePhoneCall({
      phoneNumber: '19960056759'
    })
  }
  return (
    <View>
      <View className={styles.wrapper}>
        <View>
          <Text className={styles.price_num}>￥{data?.price}</Text>
          <Text className={styles.unit}>/{data?.stock_unit}</Text>
        </View>
        <View>
          <Text className={styles.name}>{data?.product_name}</Text>
        </View>
        <View>
          <Text className={styles.description}>{data?.description}</Text>
        </View>
        <View className={styles.tip}>
          <AtIcon value='shopping-cart' size='15'></AtIcon>
          <Text>该商品从{data?.product_address}发货 够快够新鲜</Text>
        </View>
      </View>
      <Divider title='商品详情' />
      <View className={styles.wrapper}>
        <AreaTitle title='商品参数' />
        <View className={styles.row}>
          <Text className={styles.title}>计量单位</Text>
          <Text className={styles.desc}>{data?.price}/{data?.stock_unit}</Text>
        </View>
        <View className={styles.row}>
          <Text className={styles.title}>品牌</Text>
          <Text className={styles.desc}>自营</Text>
        </View>
        <View className={styles.row}>
          <Text className={styles.title}>产地</Text>
          <Text className={styles.desc}>{data?.product_address}</Text>
        </View>
        <View className={styles.row}>
          <Text className={styles.title}>库存</Text>
          <Text className={styles.desc}>{data?.stock}{data?.stock_unit}</Text>
        </View>
        <View className={styles.row}>
          <Text className={styles.title}>联系电话</Text>
          <Text className={styles.phone} onClick={contactPhone}>19960056759</Text>
        </View>
      </View>
      <Divider title='更多详情' />
      <View className={styles.wrapper}>
        <Image src={data?.picture as string} />
      </View>
    </View>
  )
})

export default GoodsInfo
