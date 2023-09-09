import Request from "./request";

class Users {
  static getCurrentUser() { //Unsupported
    return new Request("/users/current");
  }

  static login(kerberos) { //Unsupported
    return new Request("/users/login", {
      data: {
        kerberos: kerberos,
      },
      method: "post"
    });
  }

  static logout() { //Unsupported
    sessionStorage.clear();

    return new Request("/users/current", {
      method: "delete"
    });
  }

  static updateCurrentUser(data) { //Unsupported
    return new Request("/users/current", {
      data: data,
      method: "put"
    });
  }

  static verify(code, kerberos) { //Unsupported
    return new Request("/users/verify", {
      data: {
        code: code,
        kerberos: kerberos
      },
      method: "post"
    });
  }
}

export default Users;
