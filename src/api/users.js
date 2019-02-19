import Request from "./request";

class Users {
  static getCurrentUser() {
    return new Request("/users/current");
  }

  static login(kerberos) {
    return new Request("/users/login", {
      data: {
        kerberos: kerberos,
      },
      method: "post"
    });
  }

  static logout() {
    sessionStorage.clear();

    return new Request("/users/current", {
      method: "delete"
    });
  }

  static updateCurrentUser(data) {
    return new Request("/users/current", {
      data: data,
      method: "put"
    });
  }

  static verify(code, kerberos) {
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
