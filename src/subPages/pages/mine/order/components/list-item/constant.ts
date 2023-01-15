const style = {
  backgroundColor: "transparent",
  height: "25px",
  overflow: "hidden",
  marginTop: "none",
};
export const btn_text = {
  0: [
    {
      text: "删除",
      type: 0,
      style: {
        ...style,
        color: "red",
      },
    },
    {
      text: "去支付",
      type: 1,
      style: {
        ...style,
        color: "orangered",
      },
    },
  ],
  1: [
    {
      text: "催发货",
      type: 2,
      style: {
        ...style,
        color: "orangered",
      },
    },
  ],
  2: [
    {
      text: "确认签收",
      type: 3,
      style: {
        ...style,
        color: "orangered",
      },
    },
  ],
  3: [
    {
      text: "删除订单",
      type: 4,
      style: {
        ...style,
        color: "red",
      },
    },
  ],
};
