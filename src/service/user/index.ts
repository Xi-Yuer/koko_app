import cache from "@/utils/cache";
import { request } from "../index";

// 登录
export const Login = (phoneCode: string, openidCode: string) => {
  return request({
    url: "/user/wxlogin",
    method: "POST",
    data: { phoneCode, openidCode },
    showToast: true,
  });
};

// 新增用户地址
interface IAddress {
  cityName: string;
  countyName: string;
  detailInfo: string;
  provinceName: string;
  telNumber: string;
  userName: string;
}
// 创建地址
export const createAddress = (data: IAddress): Promise<any> => {
  if (data) {
    cache.set("USER_ADDRESS", data);
  }
  return request({
    url: "/user/address",
    method: "POST",
    isPermission: true,
    data: {
      addressInfo: data,
    },
  });
};

// 获取用户收货地址
export const getUserAddress = (): Promise<{
  status: number;
  message: string;
  data: IAddress[];
}> => {
  return request({
    url: "/user/address",
    isPermission: true,
  });
};

// 更新用户信息
interface IUser {
  name?: string;
  phone_number?: string;
  password?: string;
  gender?: number;
  asign?: string;
  address?: string;
}
export const updateUserInfo = (data: IUser): Promise<any> => {
  return request({
    url: "/user/update",
    method: "POST",
    data: data,
  });
};

// 更新用户头像
export const updateUserAvatar = (data: any): Promise<any> => {
  return request({
    url: "/user/avatar",
    method: "POST",
    data: data,
  });
};

// 获取用户信息
export const getUserInfo = (id: string): Promise<any> => {
  return request({
    url: `/user/info/${id}`,
    showToast: true,
  });
};
