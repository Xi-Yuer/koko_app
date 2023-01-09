import { request } from "../index";

export const Login = (phoneCode: string, openidCode: string) => {
  return request({
    url: "/user/Login",
    method: "POST",
    data: { phoneCode, openidCode },
    showToast: true,
  });
};
