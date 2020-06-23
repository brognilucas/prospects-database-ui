import service from "./base";


const createAccount = async (user) => { 
    try {  
      let response = await service.post("/users/sign-up" , user)
      if (response.status === 201) { 
        return true; 
      }

      return false;
    } catch(error) { 
      throw error;
    }
}

const login = async (user) => {
  try {
    let response = await service.post("/users/sign-in", user);

    if (response.status !== 200) {
      return false;
    }

    return response.data.auth;
  } catch (error) {
    return false;
  }
};

const logout = async () => { 
  try { 
    await service.post("/users/logout");    
    return true ;  
  }catch(error){ 
    return false;
  }
}

const validateSession = async () => {
  try {
    let response = await service.post(
      "/users/validate-session",
    );

    if (response.status !== 200) {
      return false;
    }

    return response.data.auth;
  } catch (error) {
    return false;
  }
};

export default {createAccount, login, validateSession , logout };
