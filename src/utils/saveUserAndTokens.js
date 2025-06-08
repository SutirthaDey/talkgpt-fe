export const saveUserAndTokens = (user, tokens) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accessToken", tokens.accessToken);
  localStorage.setItem("refreshToken", tokens.refreshToken);
};
