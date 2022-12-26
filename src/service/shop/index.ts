import { request } from "../index";
import { IData, IGoodsData, IGoodsDetail } from "./type";

export const getBannerList = (): Promise<IData> => {
  return request({
    url: "/banners/getAll",
  });
};

export const getGoodsList = (): Promise<IGoodsData> => {
  return request({
    url: "/product",
  });
};

export const getGoodsDetail = (id: string | number): Promise<IGoodsDetail> => {
  return request({
    url: `/product/goodsInfo/${id}`,
  });
};
