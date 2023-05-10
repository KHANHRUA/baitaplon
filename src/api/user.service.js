import ApiService from "./api.service";

const UserSignup = {
  signupuser(params) {
    return ApiService.post("api/auth/register", params);
  },
};

export { UserSignup };

const UserLogin = {
  loginuser(params) {
    return ApiService.post("api/auth/login", params);
  },
};

export { UserLogin };

const GetInfor = {
  getinfor(params) {
    return ApiService.get(
      "profile/personal-page/" + sessionStorage["username"],params
    );
  },
};
export { GetInfor };
