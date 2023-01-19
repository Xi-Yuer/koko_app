import env from "@/utils/env";
import Taro from "@tarojs/taro";
import { useSelector } from "react-redux";

export const useUploadAvatar = () => {
  const { token } = useSelector<any, any>((state) => state.user);
  return () => {
    return new Promise((resolve, reject) => {
      Taro.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          const [tempFilePaths] = res.tempFilePaths;
          Taro.uploadFile({
            url: env.baseUrl + "/user/avatar",
            filePath: tempFilePaths,
            name: "avatar",
            header: {
              Authorization: token,
            },
            success() {
              resolve(tempFilePaths);
            },
            fail(err) {
              reject(err);
            },
          });
        },
      });
    });
  };
};
