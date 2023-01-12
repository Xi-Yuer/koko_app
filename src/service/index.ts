import Taro from "@tarojs/taro";
import cache from "../utils/cache";
import env from "../utils/env";
import { IConfig } from "./types";

export const request = ({
  url,
  method = "GET",
  showToast = false,
  isPermission = false,
  data,
}: IConfig): Promise<any> => {
  const token = cache.get("USER_TOKEN");
  if (isPermission && !token) {
    Taro.showToast({
      title: "请先登录",
      icon: "error",
    });
    return Promise.reject("请先登录");
  }
  if (showToast) {
    Taro.showLoading({
      title: "加载中",
    });
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: env.baseUrl + url,
      data,
      method,
      timeout: env.timeOut,
      header: {
        "content-type": "application/json",
        Authorization: token ? token : "",
      },
    })
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        Taro.showToast({
          title: "请求失败",
          icon: "error",
        });
        reject(err);
      })
      .finally(() => {
        Taro.hideLoading();
      });
  });
};
