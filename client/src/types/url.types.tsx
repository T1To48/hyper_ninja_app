export type Status = "On" | "Off" | "Error" | "Loading" | "Pending";
export interface INewUrlReq {
  name: string;
  url: string;
}

export type ErrorType = Error | string | object;

export  interface IUrlDoc {
  id: string;
  userId: string;
  name: string;
  url: string;
  status: Status;
  error:ErrorType;
  updatedAt: string;
  createdAt: string;
}
export interface IUrlResponse {
  success: boolean;
  data: IUrlDoc;
}
export interface IUrlsListResponse {
  success: boolean;
  data: IUrlDoc[];
}
export interface UpdateUrlObj {
  id: string;
  data: {
    name?: string;
    url?: string;
    status?: Status;
    error?: ErrorType;
  };
}
export interface IQuickReviveRes{
    success:boolean,
    data:string
}
