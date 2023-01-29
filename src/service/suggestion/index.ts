import { request } from "../index";

export const suggestion = (content: string, contact: string): Promise<any> => {
  return request({
    url: "/suggestion",
    method: "POST",
    data: {
      contact,
      content,
    },
  });
};
