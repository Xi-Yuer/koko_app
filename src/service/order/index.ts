import { request } from "../index";

export const updateOrderStatus = (
  id: string | number,
  orderStatus: number
): Promise<any> => {
  return request({
    url: "/order/pay",
    method: "POST",
    data: { id, orderStatus },
  });
};

// 创建订单
export const createOrder = (orders: any) => {};
