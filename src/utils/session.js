function getCurrentUser() {
  if (typeof sessionStorage.user === "undefined") {
    return null;
  }

  return JSON.parse(sessionStorage.user);
}

function getJWT() {
  const value = "; " + document.cookie;
  const parts = value.split("; jwt=");

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

function isUserLoggedIn() {
  return getJWT() !== null;
}

function setupSession(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

export {
  getCurrentUser,
  getJWT,
  isUserLoggedIn,
  setupSession
};
