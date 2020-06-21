import service from "./base";

export const login = async (user) => {
  try {
    let response = await service.post("/users/sign-in", user);

    if (response.status !== 200) {
      return false;
    }

    return response.data.auth;
  } catch (error) {
      return false
  }
};
