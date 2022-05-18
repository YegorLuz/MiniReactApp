import axios, { AxiosResponse } from 'axios';
const CancelToken = axios.CancelToken;

const axiosInstance = axios.create({
  baseURL: 'localhost:3333',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const _requestsMap: any = {};

axiosInstance.interceptors.request.use((request: any) => {
  if (request.cancelKey) {
    const previousRequest = _requestsMap[request.cancelKey];
    if (previousRequest) {
      previousRequest.cancel();
    }
    if (!request.forced) {
      const source = CancelToken.source();
      _requestsMap[request.cancelKey] = source;
      request.cancelToken = source.token;
    }
  }
  if (request.data instanceof FormData) {
    request.headers['Content-Type'] = 'multipart/form-data';
  }
  request.url = encodeURI(request.url);
  return Promise.resolve(request);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onResponseSuccess = ({ data, config, request }: AxiosResponse<any>) => {
  const { cancelKey, wrapperData } = config as any;
  if (cancelKey) {
    delete _requestsMap[cancelKey];
  }
  const body = wrapperData ? data.data : data;

  return Promise.resolve(body);
};

const onResponseError = (event: any) => {
  const { response, request, message, config } = event;

  if (response) {
    console.log('<----- response.status ----->', response.status);
    console.log('<----- response.headers ----->', response.headers);
    console.log('<----- response.data ----->', response.data);
  } else if (request) {
    console.log('<----- request ----->', request);
  } else {
    console.log('<----- message ----->', message);
    console.log('<----- config ----->', config);
  }

  const err: any = {
    origin: response,
    hideAlert: axios.isCancel(event),
  };
  if (config && config.cancelKey) {
    delete _requestsMap[config.cancelKey];
  }
  if (!response) {
    return Promise.reject(err);
  }
  if (response.status === 401) {
    err.hideAlert = true;
    axiosInstance.defaults.headers.common.Authorization = '';
  }
  const errorsList = response.data && response.data.Errors;
  if (errorsList && errorsList.length) {
    const details: any = {};
    const messagesList: Array<any> = [];
    errorsList.forEach((error: any) => {
      const key = error.Source.toLowerCase();
      const msg = error.Message;
      messagesList.push(msg);
      if (details[key]) {
        details[key] = details[key] + `; ${msg}`;
      } else {
        details[key] = msg;
      }
    });
    err.message = messagesList.join('; ');
    err.details = details;
  }
  return Promise.reject(err);
};

axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);

export default axiosInstance;