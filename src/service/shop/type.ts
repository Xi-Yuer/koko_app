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

export interface IGoodsData {
  data: any[];
  message: string;
  status: string | number;
  count: number;
}
