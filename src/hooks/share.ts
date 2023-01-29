import { useShareAppMessage } from "@tarojs/taro";

export const useSharePage = () => {
  useShareAppMessage(() => {
    return {
      title: "小刚副业，生鲜食品的搬运工",
      imageUrl:
        "https://koko-img-oss.oss-cn-chengdu.aliyuncs.com/static/logo_bg.jpg",
    };
  });
};
