import ApiService from "./api.service";

const UserSignup = {
  signupuser(params) {
    return ApiService.post("signup", params);
  },
};

export { UserSignup };

const UserDonates = {
  userdonates(params) {
    return ApiService.post("checkuser", params);
  },
};

export { UserDonates };

