import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCar } from '../../../..//store'
import { delGoodsCar } from '../../../../service/car/index'
import styles from './inde.module.scss'

interface IProps {
  initData: Function
}
const Del: FC<IProps> = memo((props) => {

  const { initData } = props
  const dispatch = useDispatch()
  const { checked } = useSelector<any, any>((state => state.car))

  const delHandle = () => {
    const ids: string[] = []
    checked.forEach((i) => {
      ids.push(i.id)
    })
    delGoodsCar(ids).then(() => {
      Taro.showToast({
        title: '删除成功',
        icon: 'success'
      })
      dispatch(clearCar())
      initData()
    })
  }
  return (
    <View className={styles.wrapper}>
      <View
        className={styles.del_btn}
        style={!checked.length ? { backgroundColor: '#ff8255', pointerEvents: 'none' } : ''}
        onClick={delHandle}
      >
        删除({checked.length})
      </View>
    </View>
  )
})

export default Del
