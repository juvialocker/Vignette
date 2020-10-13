import axiosInstance from './instance';

// tslint:disable-next-line:no-namespace
declare namespace code {
  // tslint:disable-next-line:class-name
  interface codeReq {
    phone: string;
  }
}

export const searchTable= (data: any)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};
export const saveTable= (data: any)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};
export const removeTable= (data: any)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};
export const startTable= (data: any)=> {
  return axiosInstance.post(`/api/public/sendMessage`,data);
};

