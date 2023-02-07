import { request } from "../index";

export const postMessage = ({
  orderID,
  description,
  address,
  name,
  phone,
}: any) => {
  return request({
    url: "/message",
    method: "POST",
    data: {
      orderID,
      description,
      address,
      name,
      phone,
    },
  });
};
