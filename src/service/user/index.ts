import { request } from "../index";

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
  realName: string;
}
export const createAddress = (data: IAddress): Promise<any> => {
  return request({
    url: "/user/address",
    method: "POST",
    data: {
      addressInfo: data,
    },
  });
};

export const getUserAddress = (): Promise<{
  status: number;
  message: string;
  data: IAddress[];
}> => {
  return request({
    url: "/user/address",
  });
};
