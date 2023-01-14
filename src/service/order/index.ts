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
export const createOrder = (products: string, total_price: number) => {
  return request({
    url: "/order/create",
    method: "POST",
    data: {
      products,
      total_price,
    },
  });
};

// 成功支付订单
export const orderPayed = (orderId): Promise<any> => {
  return request({
    url: "/pay/notify_url",
    method: "POST",
    data: {
      orderId,
    },
  });
};

//更新订单信息
export const updateOrder = (id: string, products: string) => {
  return request({
    url:"/order/update",
    method:'POST',
    data:{
      id,
      products
    }
  })
};
