import { ScrollView, View } from '@tarojs/components'
import { memo } from 'react'
import styles from './index.module.scss'

const Privacy = memo(() => {
  return (
    <ScrollView>
      <View className={styles.wrapper}>

        <View>本指引是小刚副业小程序开发者“兴文县龙山生态水产养殖专业合作社”（以下简称“开发者”）为处理你的个人信息而制定。</View>

        <View>开发者处理的信息</View>

        <View>
          · 为了提高用户产品使用体验，开发者将在获取你的明示同意后，访问你的地址信息。
        </View>
        <View>
          · 为了提高用户产品使用体验，开发者将在获取你的明示同意后，访问你的手机号码。
        </View>
        <View>
          你的权益
        </View>

        <View>
          关于你的个人信息，你可以通过以下方式与开发者联系，行使查阅、复制、更正、删除等法定权利。
        </View>

        <View>
          - 手机号: 18483128820
        </View>

        <View>
          开发者对信息的存储
        </View>
        <View>
          开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。
        </View>
        <View>
          信息的使用规则
        </View>
        <View>
          开发者将会在本指引所明示的用途内使用收集的信息
        </View>
        <View>
          如开发者使用你的信息超出本指引目的或合理范围，开发者必须在变更使用目的或范围前，再次以短信方式告知并征得你的明示同意。
        </View>
        <View>
          信息对外提供
        </View>
        <View>
          开发者承诺，不会主动共享或转让你的信息至任何第三方，如存在确需共享或转让时，开发者应当直接征得或确认第三方征得你的单独同意。
        </View>
        <View>
          开发者承诺，不会对外公开披露你的信息，如必须公开披露时，开发者应当向你告知公开披露的目的、披露信息的类型及可能涉及的信息，并征得你的单独同意。
        </View>
        <View>
          若你认为开发者未遵守上述约定，或有其他的投诉建议、或未成年人个人信息保护相关问题，可通过以下方式与开发者联系；或者向微信进行投诉。
        </View>
        <View>
          - 手机号: 18483128820
        </View>
        <View>
          更新日期：2023年1月15日
        </View>
        <View>
          生效日期：2023年1月15日
        </View>
      </View>
    </ScrollView>
  )
})

export default Privacy
