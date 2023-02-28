import ApiService from "./api.service";

const UserSignup = {
  signupuser(params) {
    return ApiService.post("register", params);
  },
};

export { UserSignup };


const UserLogin = {
  loginuser(params) {
    return ApiService.post("login", params);
  },
};

export { UserLogin };
