import { View } from '@tarojs/components'
import { FC, memo, PropsWithChildren } from 'react'


interface IProps extends PropsWithChildren {
  data: any
}
const Goods: FC<IProps> = memo((props: IProps) => {
  const { data } = props
  return (
    <View>{data.product_name}</View>
  )
})

export default Goods
