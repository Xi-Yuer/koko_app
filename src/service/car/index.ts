import cache from "../../utils/cache";
import { request } from "../index";

export const getCarGoods = (orderStatus: number | string) => {
  const user = cache.get("USER_DETAIL");
  return request({
    url: "/order/orderList",
    showToast: true,
    data: {
      orderStatus,
      userId: user.id,
    },
  });
};
