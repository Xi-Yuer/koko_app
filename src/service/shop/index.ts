import { request } from "../index";
import { IData, IGoodsData } from "./type";

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
