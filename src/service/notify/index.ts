import { request } from "../index";

export const getNotify = (): Promise<any> => {
  return request({
    url: "/notify",
  });
};
