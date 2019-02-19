function getCurrentUser() {
  if (typeof sessionStorage.user === "undefined") {
    return null;
  }

  return JSON.parse(sessionStorage.user);
}

function isUserLoggedIn() {
  return getCurrentUser() !== null;
}

function setupSession(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

export {
  getCurrentUser,
  isUserLoggedIn,
  setupSession
};
