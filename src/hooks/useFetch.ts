import {CLIENTID} from "@/common/const";

export type RequestModel = {
  params?: object;
  headers?: object;
  signal?: AbortSignal;
};

export type RequestWithBodyModel = RequestModel & {
  body?: object | FormData;
};

export const useFetch = () => {
  const handleFetch = async (
    url: string,
    request: any,
    signal?: AbortSignal,
  ) => {


    const requestUrl = request?.params ? `${url}${request.params}` : url;
    const userInfo = sessionStorage.getItem("userInfo");
    const access_token = sessionStorage.getItem("access_token");
    let  autho = '';
    if (userInfo){
      const userInfoEntity =JSON.parse(userInfo);
      autho= userInfoEntity.uuid+"|"+CLIENTID;
    }

    const requestBody = request?.body
      ? request.body instanceof FormData
        ? { ...request, body: request.body }
        : { ...request, body: JSON.stringify(request.body) }
      : request;
    const headers = {
      ...(request?.headers
        ? request.headers
        : request?.body && request.body instanceof FormData
        ? {}
        : {'Content-type': 'application/json','auth-info': autho,'access-token':access_token}),
    };

    return await fetch(requestUrl, { ...requestBody, headers, signal })
      .then((response) => {
        if (!response.ok) throw response;

        const contentType = response.headers.get('content-type');
        const contentDisposition = response.headers.get('content-disposition');

        const headers = response.headers;

        const result =
          contentType &&
          (contentType?.indexOf('application/json') !== -1 ||
            contentType?.indexOf('text/plain') !== -1)
            ? response.json()
            : contentDisposition?.indexOf('attachment') !== -1
            ? response.blob()
            : response;

        return result;
      })
      .catch(async (err) => {
        const contentType = err.headers.get('content-type');

        const errResult =
          contentType && contentType?.indexOf('application/problem+json') !== -1
            ? await err.json()
            : err;

        throw errResult;
      });
  };

  return {
    get: async <T>(url: string, request?: RequestModel): Promise<Blob | Response | void> => {
      return await handleFetch(url, { ...request, method: 'get' });
    },
    post: async <T>(
      url: string,
      request?: RequestWithBodyModel,
    ): Promise<Blob | Response | void> => {
      return await handleFetch(url, { ...request, method: 'post' });
    },
    put: async <T>(url: string, request?: RequestWithBodyModel): Promise<Blob | Response | void> => {
      return handleFetch(url, { ...request, method: 'put' });
    },
    patch: async <T>(
      url: string,
      request?: RequestWithBodyModel,
    ): Promise<Blob | Response | void> => {
      return handleFetch(url, { ...request, method: 'patch' });
    },
    delete: async <T>(url: string, request?: RequestModel): Promise<Blob | Response | void> => {
      return handleFetch(url, { ...request, method: 'delete' });
    },
  };
};
