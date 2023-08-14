 export interface IUserRegisterReq{
    email: string;
    name:string;
    password: string;
  }
  export interface IUserLoginReq {
    email: string;
    password: string;
  } 
   interface IUserDoc  {
    id: string;
    name:string;
    email: string;
  }
  export  interface IUserResponse {
    success: boolean;
    data:IUserDoc ;
  }
  export interface IFieldsToUpdate{
    email?:string;
    name?:string;
  }
  export interface IUserAuthResponse{
    success: boolean;
    data:string;
  }
  export type IUserPassword = string;

  export interface IChangePasswordReq {
    password: string;
    newPassword: string;
  }