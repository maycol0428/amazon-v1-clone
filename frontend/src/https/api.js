import api from "./axiosBase";

export const login = async (data) => {
  return api.post("/api/v1/user/login", data);
};
export const register = async (data) => {
  return api.post("/api/v1/user/register", data);
};
export const getClientSecret = async (data) => {
  return api.post(`/api/v1/order/payments/create?total=${data}`);
};
export const newOrder = async (data) => {
  return api.post(`/api/v1/order/newOrder`, data);
};
export const getUserOrders = async (user_id) => {
  return api.get(`/api/v1/order/${user_id}/orders`);
};
