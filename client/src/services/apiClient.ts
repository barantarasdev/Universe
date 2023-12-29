import {instance, responseBody} from './apiCall';

const requests = {
  get: <T>(url: string): Promise<T> => instance.get<T>(url).then(responseBody),
  // post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  // put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  // delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
