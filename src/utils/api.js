import { baseUrl } from "../constants/enviroment";

export default async function apiRequest(
  path,
  { method = "GET", body, headers = {}, needAuth = true } = {}
) {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  let accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (accessToken && needAuth) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  let response = await fetch(baseUrl + path, config);

  // If access token is invalid/expired, try to refresh
  if (response.status === 401 && refreshToken) {
    const refreshResponse = await fetch(baseUrl + "/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (refreshResponse.ok) {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        await refreshResponse.json();
      localStorage.setItem("accessToken", newAccessToken);
      if (newRefreshToken)
        localStorage.setItem("refreshToken", newRefreshToken);

      config.headers.Authorization = `Bearer ${newAccessToken}`;
      response = await fetch(baseUrl + path, config);
    } else {
      throw new Error("Session expired. Please log in again.");
    }
  }

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
