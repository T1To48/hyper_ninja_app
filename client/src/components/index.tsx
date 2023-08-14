//! exports FROM /components
import Sidebar from "./sidebar/Sidebar.component";
import DashboardComp from "./dashboard/Dashboard.component";
import LoginForm from "./forms/loginForm/LoginForm.component";
import UserProfile from "./userProfile/UserProf.component";
export { Sidebar, DashboardComp, LoginForm, UserProfile };

// TYPE & Interfaces
import { SetState, OnInputChange,OnDivClick,OnDivClickHndlr,OnBtnClick,OnBtnClickHndlr, OnFormSubmit } from "../Types/common.types";
import {
  IUserRegisterReq,
  IUserLoginReq,
  IChangePasswordReq,
  IUserPassword,
  IFieldsToUpdate,
} from "../Types/user.types";
import { ErrorType, Status,IUrlDoc } from "../Types/url.types";
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
