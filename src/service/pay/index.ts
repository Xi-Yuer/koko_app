import { request } from "../index";

export const pay = (openid, des, total, product_id) => {
  return request({
    url: "/pay",
    method: "POST",
    data: {
      openid,
      des,
      total,
      product_id,
    },
  });
};
