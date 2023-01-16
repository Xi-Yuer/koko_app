import { request } from "../index";

export const pay = (openid, des, total, product_id) => {
  return request({
    url: "/pay",
    method: "POST",
    isPermission: true,
    data: {
      openid,
      des,
      total,
      product_id,
    },
  });
};
