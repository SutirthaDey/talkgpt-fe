import { baseUrl } from "../constants/enviroment";
// import { useLogOut } from "./useLogOut";

export function useApiRequest() {
  // const logOut = useLogOut();

  async function apiRequest(
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

    // Try to refresh token if unauthorized
    if (response.status === 401 && refreshToken) {
      const refreshResponse = await fetch(baseUrl + "auth/generate-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (refreshResponse.ok) {
        const { data } = await refreshResponse.json();
        localStorage.setItem("accessToken", data.accessToken);
        config.headers.Authorization = `Bearer ${data.accessToken}`;
        response = await fetch(baseUrl + path, config);
      }
    }

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return await response.json();
  }

  return apiRequest;
}
