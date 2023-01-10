import { request } from "../index";

export const getCarGoods = () => {
  return request({
    url: "/order/car",
    showToast: true,
  });
};

export const IntoGoodsCar = (
  price: number,
  count: number,
  productID: string | number
) => {
  return request({
    url: "/order/intoCar",
    method: "POST",
    data: {
      price,
      count,
      productID,
    },
  });
};
