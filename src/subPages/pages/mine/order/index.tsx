import { AtTabs, AtTabsPane } from 'taro-ui'
import { View } from '@tarojs/components'
import { memo, useEffect, useState } from 'react'
import { getUserOrder } from '@/service/order/index'

import styles from './index.module.scss'
import ListItem from './components/list-item/index'

const Order = memo(() => {
  const tabList = [{ title: '代付款' }, { title: '代发货' }, { title: '运输中' }, { title: '已签收' }]

  const [current, setCurrent] = useState(0)
  const [list, setList] = useState<any>([])

  const handleClick = (value) => {
    setCurrent(value)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => initData(), [current])

  const initData = () => {
    getUserOrder(current + 1).then(res => {
      setList(res.data)
    })
  }
  return (
    <View className={styles.wrapper}>
      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        {
          tabList.map((_, index) => {
            return <AtTabsPane current={current} index={index} key={index}>
              {
                list?.map(i => {
                  return <ListItem key={i.id} data={i} status={current} />
                })
              }
            </AtTabsPane>
          })
        }

      </AtTabs>
    </View>
  )
})

export default Order
