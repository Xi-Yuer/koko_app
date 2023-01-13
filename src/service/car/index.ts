import { request } from "../index";

// 获取购物车商品
export const getCarGoods = () => {
  return request({
    url: "/order/car",
    isPermission: true,
  });
};

// 加入购物车
export const IntoGoodsCar = (
  count: number,
  productID: string | number
) => {
  return request({
    url: "/order/intoCar",
    method: "POST",
    isPermission: true,
    data: {
      count,
      productID,
    },
  });
};

// 移除购物车
export const delGoodsCar = (ids: string[]) => {
  return request({
    url: "/order/car",
    method: "DELETE",
    isPermission: true,
    data: {
      ids,
    },
  });
};
