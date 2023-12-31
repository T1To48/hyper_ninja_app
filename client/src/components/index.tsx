//! exports FROM /components
import RegisterForm from "./forms/registerForm/RegisterForm.component";
import Sidebar from "./sidebar/Sidebar.component";
import DashboardComp from "./dashboard/Dashboard.component";
import LoginForm from "./forms/loginForm/LoginForm.component";
import UserProfile from "./userProfile/UserProf.component";
export { RegisterForm,Sidebar, DashboardComp, LoginForm, UserProfile };

// TYPE & Interfaces
import { SetState, OnInputChange,OnDivClick,OnDivClickHndlr,OnBtnClick,OnBtnClickHndlr, OnFormSubmit } from "../types/common.types";
import {
  IUserRegisterReq,
  IUserLoginReq,
  IChangePasswordReq,
  IUserPassword,
  IFieldsToUpdate,
} from "../types/user.types";
import { ErrorType, Status,IUrlDoc } from "../types/url.types";
export type {
  SetState,
  OnInputChange,
  OnFormSubmit,
  OnDivClick,
  OnDivClickHndlr,
  OnBtnClick,
  OnBtnClickHndlr,

  IUserRegisterReq,
  IUserLoginReq,
  IChangePasswordReq,
  IUserPassword,
  IFieldsToUpdate,
  
  ErrorType,
  Status,
  IUrlDoc,
};

//! import TO /components
