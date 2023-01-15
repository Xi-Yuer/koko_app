import { AtTabs, AtTabsPane } from 'taro-ui'
import { ScrollView, View } from '@tarojs/components'
import { memo, useEffect, useState } from 'react'
import { getUserOrder } from '@/service/order/index'

import Empty from '@/components/empty'
import ListItem from './components/list-item/index'

import styles from './index.module.scss'

const Order = memo(() => {
  const tabList = [{ title: '代付款' }, { title: '代发货' }, { title: '运输中' }, { title: '已签收' }]

  const [current, setCurrent] = useState(0)
  const [list, setList] = useState<any>([])
  const [refresherTriggered, setRefresherTriggered] = useState(false)

  const handleClick = (value) => {
    setCurrent(value)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => initData(), [current])

  const initData = () => {
    getUserOrder(current + 1).then(res => {
      setList(res.data)
    }).finally(() => {
      setRefresherTriggered(false)
    })
  }

  const onRefresherPulling = () => {
    setRefresherTriggered(true)
    initData()
  }
  return (
    <View className={styles.wrapper}>
      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        {
          tabList.map((_, index) => {
            return <AtTabsPane current={current} index={index} key={index}>
              <ScrollView
                scroll-y
                refresher-enabled
                style={{ height: "calc(100vh - 43px)" }}
                refresherTriggered={refresherTriggered}
                onRefresherRefresh={onRefresherPulling}
              >
                {
                  list?.map(i => {
                    return <ListItem key={i.id} data={i} status={current} />
                  })
                }
                {
                  list.length <= 0 && <Empty />
                }
              </ScrollView>
            </AtTabsPane>
          })
        }
      </AtTabs>
    </View >
  )
})

export default Order
