import { request } from "../index";

export const updateOrderStatus = (
  id: string | number,
  orderStatus: number
): Promise<any> => {
  return request({
    url: "/order/pay",
    method: "POST",
    isPermission: true,
    data: { id, orderStatus },
  });
};

// 创建订单
interface IOder {
  product_id: string;
  amount: number;
  total_price: number;
  userName: string;
  mobile: string;
  address: string;
  note: string;
}
export const createOrder = (orders: IOder[]) => {
  return request({
    url: "/order/create",
    method: "POST",
    data: {
      orders,
    },
  });
};
