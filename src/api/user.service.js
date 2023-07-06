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

const GetPost = {
  getpost(params) {
    return ApiService.get(
      "home",params
    );
  },
};
export { GetPost };

const PutIntro = {
  putintro(params){
    let user = JSON.parse(sessionStorage["response"]);
    return ApiService.put(
      "profile/"+ user.id +"/update/intro",params);
  }
}

export { PutIntro };

const PutMain = {
  putmain(params){
    let user = JSON.parse(sessionStorage["response"]);
    return ApiService.put(
      "profile/"+ user.id +"/update/main-inf",params);
  }
}

export { PutMain };

const PutAva = {
  putava(params){
    let user = JSON.parse(sessionStorage["response"]);
    return ApiService.put(
      "profile/"+ user.id +"/update/avatar",params);
  }
}

export { PutAva };


const LikePost = {
  likepost(params,index) {
    let user = JSON.parse(sessionStorage["post"]);
    return ApiService.get("post/"+ user.news[index].id +"/like", params);
  },
};

export { LikePost };