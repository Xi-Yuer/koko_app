import { View } from '@tarojs/components'
import { memo, useState } from 'react'

import { AtTabs, AtTabsPane } from 'taro-ui'

const Order = memo(() => {
  const [current, setCurrent] = useState(0)
  const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]

  const handleClick = (value) => {
    setCurrent(value)
  }
  return (
    <View>
      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        {
          tabList.map((_, index) => {
            return <AtTabsPane current={current} index={index} key={index}></AtTabsPane>
          })
        }

      </AtTabs>
    </View>
  )
})

export default Order
