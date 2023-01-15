import { delUserOrder, updateOrderStatus } from "@/service/order";
import { addTemOrder } from "@/store/index";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IType } from ".";

export const useEditOrderStatus = (data: any, initData: () => void) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const clickHandle = ({ type }: IType) => {
    setIsOpen(false);
    switch (type) {
      case 0:
        // 删除
        delUserOrder(data.id).then(() => initData());
        break;
      case 1:
        // 支付
        pay();
        break;
      case 2:
        //催发货
        Taro.showToast({
          title: "已催商家发货",
        });
        break;
      case 3:
        // 确认签收
        updateOrderStatus(data.id, 4).then(() => initData());
        break;
      case 4:
        // 删除订单
        delUserOrder(data.id).then(() => initData());
        break;
      default:
        return false;
    }
  };
  const pay = () => {
    // 支付
    const tem: any = [];
    data.products.forEach((i) => {
      if (i) {
        tem.push({
          ...data,
          count: i.count,
          product: {
            ...i,
            ...i.product,
          },
        });
      }
    });
    dispatch(addTemOrder(tem));
    Taro.navigateTo({
      url: "/subPages/pages/place-order/index",
    });
  };
  return {
    isOpen,
    setIsOpen,
    clickHandle,
  };
};
