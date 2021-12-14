enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface Options {
  method: METHOD;
  headers?: Record<string, string>;
  data?: any;
  timeout?: number;
}

type Data = { [key: string]: any };

function queryStringify(data: Data) {
  if (typeof data !== 'object') {
    throw new Error('Данные должны быть типа object');
  }

  const keys = Object.keys(data);

  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

class HTTPTransport {
  get = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHOD.GET },
      options.timeout
    );
  };

  post = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHOD.POST },
      options.timeout
    );
  };

  put = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHOD.PUT },
      options.timeout
    );
  };

  delete = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHOD.DELETE },
      options.timeout
    );
  };

  request = (url: string, options: Options, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('Нет метода');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
