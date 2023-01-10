import { request } from "../index";

export const Login = (phoneCode: string, openidCode: string) => {
  return request({
    url: "/user/wxlogin",
    method: "POST",
    data: { phoneCode, openidCode },
    showToast: true,
  });
};
