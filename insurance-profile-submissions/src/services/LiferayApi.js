import axios from "axios";
const { REACT_APP_LIFERAY_API = window.location.origin } = process.env;


export const getLiferayAuthenticationToken = () => {
  try {
    // eslint-disable-next-line no-undef
    const token = Liferay.authToken;

    return token;
  } catch (error) {
    console.warn("Not able to find Liferay auth token\n", error);

    return "";
  }
};

const baseFetch = async (
  url,
  { body, method = "GET", contentType = "application/json" } = {}
) => {
  let headers = new Headers({
    "x-csrf-token": getLiferayAuthenticationToken(),
  });
  let apiPath = REACT_APP_LIFERAY_API;
  // Basic Auth for local development testing only
  // Auth token is the best method for live use and
  // is available when acting as a Web Component (Custom Element)
  if (getLiferayAuthenticationToken() === "") {
    headers = new Headers({
      Authorization: "Basic " + btoa("test@liferay.com:1"),
    });
    apiPath = "http://localhost:8080";
  }
  if (contentType === "application/json") {
    headers.append("Content-Type", "application/json");
    body = body && JSON.stringify(body);
  }
  const response = axios.post(apiPath + "/" + url, {
    body,
    headers: headers,
    method,
  });
  const data = await response.json();
  return { data };
};

const LiferayFetchAPI = {
  delete: (url) => baseFetch(url, { method: "DELETE" }),
  get: (url) => baseFetch(url),
  patch: (url, options) => baseFetch(url, { ...options, method: "PATCH" }),
  post: (url, options) => baseFetch(url, { ...options, method: "POST" }),
  put: (url, options) => baseFetch(url, { ...options, method: "PUT" }),
};

export { REACT_APP_LIFERAY_API };

export default LiferayFetchAPI;
