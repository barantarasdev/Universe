import axios, {AxiosResponse} from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 15000,
});

export const responseBody = <T>(response: AxiosResponse<T>): T => response.data;
