import Taro from "@tarojs/taro";

export const getHeight = () => {
  const { statusBarHeight } = Taro.getSystemInfoSync();
  // 获取胶囊按钮信息（width、height、top等）
  const { width, height, top } = Taro.getMenuButtonBoundingClientRect();
  const menuButtonInfo = { width, height, top };
  // 胶囊按钮相对于离导航栏的上边距
  const topDistance = menuButtonInfo.top - statusBarHeight!;
  // 计算导航栏高度
  const navHeight = menuButtonInfo.height + topDistance * 2;

  return { menuButtonInfo, navHeight };
};
