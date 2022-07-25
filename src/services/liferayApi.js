import axios from "axios";
const REACT_APP_LIFERAY_API = window.location.origin;

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
  { body, method = "get", contentType = "application/json" } = {}
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
  const response = await axios({
    method,
    url: apiPath + "/" + url,
    data: body,
    headers: headers,
  });
  const data = await response.json();
  return { data };
};

const LiferayFetchAPI = {
  delete: (url) => baseFetch(url, { method: "delete" }),
  get: (url) => baseFetch(url),
  patch: (url, options) => baseFetch(url, { ...options, method: "patch" }),
  post: (url, options) => baseFetch(url, { ...options, method: "post" }),
  put: (url, options) => baseFetch(url, { ...options, method: "put" }),
};

export { REACT_APP_LIFERAY_API };

export default LiferayFetchAPI;
