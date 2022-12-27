import { usePageScroll } from "@tarojs/taro";
import { useState } from "react";

export const useNavHeight = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  usePageScroll((e) => {
    const { scrollTop } = e;
    const threshold = 100; // 设置阈值
    if (scrollTop > threshold) {
      setBgOpacity((scrollTop - threshold) / threshold);
    } else {
      setBgOpacity(0);
    }
  });

  return [bgOpacity];
};
