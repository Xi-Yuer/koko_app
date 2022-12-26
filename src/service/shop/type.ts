export interface IBanner {
  filename: string;
  id: string;
  imgUrl: string;
  minetype: string;
  size: string;
  title: string;
}
export interface IData {
  data: IBanner[];
  message: string;
  status: string | number;
}
export interface IGoods {
  create_time: string;
  description: string;
  id: string;
  old_price: string;
  picture: string;
  price: string;
  product_address: string;
  product_name: string;
  publice_status: string | number;
  sale_count: string | number;
  stock: string | number;
  stock_unit: string;
  type: string | number;
  update_time: string;
  userId: string | number;
}
export interface IGoodsData {
  data: IGoods[];
  message: string;
  status: string | number;
  count: number;
}

export interface IBannerDetail {
  id: string | number | null;
  productid: string | number | null;
  title: string | null;
  url: string | null;
}
export interface IGoodsDetailInfo {
  banners: IBannerDetail[];
  create_time: string;
  description: string;
  id: string;
  old_price: string;
  picture: string;
  price: string;
  product_address: string;
  product_name: string;
  publice_status: number;
  sale_count: number;
  stock: number;
  stock_unit: string;
  update_time: string;
  userId: string | number;
}

export interface IGoodsDetail {
  data: IGoodsDetailInfo[];
}
