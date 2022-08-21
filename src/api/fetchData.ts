import { AppException } from "../utilities/appException";

export interface FetchDataOptions {
  deleteWithResponse?: boolean;
}

export interface FetchDataReturnValue<T = unknown> {
  ok: Response["ok"];
  status: Response["status"];
  statusText: Response["statusText"];
  body: T;
}

export const fetchData = async (
  url: string | URL,
  method: "GET" | "POST" | "DELETE" | "PATCH",
  body?: RequestInit["body"],
  options?: FetchDataOptions,
  abortControllerSignal?: AbortSignal
): Promise<FetchDataReturnValue<unknown>> => {
  const fetchOptions: RequestInit = {
    method: method,
    headers: { Accept: "application/json" },
  };

  if (body) {
    fetchOptions.body = body;
    fetchOptions.headers = {
      ...fetchOptions.headers,
      "Content-Type": "application/json",
    };
  }

  if (abortControllerSignal) fetchOptions.signal = abortControllerSignal;

  try {
    const res = await fetch(url, fetchOptions);

    let data: unknown = null;

    if (
      method === "GET" ||
      method === "POST" ||
      method === "PATCH" ||
      (method === "DELETE" && options?.deleteWithResponse)
    ) {
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        throw new AppException("Response not in JSON format!");
      }
    }

    return {
      ok: res.ok,
      status: res.status,
      statusText: res.statusText,
      body: data,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};
