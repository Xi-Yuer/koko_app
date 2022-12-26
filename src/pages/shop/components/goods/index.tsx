import { Image, View } from '@tarojs/components'
import { FC, memo, PropsWithChildren } from 'react'
import { IGoods } from 'src/service/shop/type'
import styles from './index.module.scss'

interface IProps extends PropsWithChildren {
  data: IGoods
}
const Goods: FC<IProps> = memo((props: IProps) => {
  const { data } = props
  return (
    <View className={styles.wrapper}>
      <View className={styles.left}>
        <Image src={data.picture} />
      </View>
      <View className={styles.rght}></View>
    </View>
  )
})

export default Goods
