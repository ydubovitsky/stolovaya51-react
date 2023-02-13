import axios, { ResponseType } from 'axios';

interface FetchOptions {
  method: string,
  url: string,
  data?: any,
  headers?: any,
  responseType?: ResponseType
}

//TODO Улучшить это, сделать best practice
export const fetchData = async (options: FetchOptions): Promise<any> => {
  try {
    // response type = {data: {}, status: '', headers: {}, config ...}
    const response = await axios(options);
    return response.data;
  } catch (err : any) {
    throw new Error(err);
  }
};