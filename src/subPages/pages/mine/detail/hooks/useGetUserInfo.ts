import { getUserInfo } from "@/service/user";
import { setUser } from "@/store";
import { useDispatch } from "react-redux";

export const useGetUserInfo = () => {
  const dispatch = useDispatch();
  const get = (id: string) => {
    return new Promise((resolve, reject) => {
      getUserInfo(id)
        .then((res) => {
          dispatch(setUser(res));
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return {
    get,
    dispatch
  };
};
