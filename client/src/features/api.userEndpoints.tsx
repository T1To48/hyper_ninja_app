import { apiSlice } from "./api.slice";
import {
  IUserRegisterReq,
  IUserLoginReq,
  IUserResponse,
  IFieldsToUpdate,
  IUserAuthResponse,
  IUserPassword,
  IChangePasswordReq
} from "../Types/user.types";

export const userEndpoints = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    isAuthenticated: build.mutation<IUserAuthResponse, void>({
      query: () => ({
        url: "user/check-token-cookie",
        method: "POST",
      }),
      invalidatesTags: ["UrlsList", "User"],
    }),
    register: build.mutation<IUserResponse, IUserRegisterReq>({
      query: (userObj) => ({
        url: "user/register",
        method: "POST",
        body: userObj,
      }),
      invalidatesTags: ["User"],
    }),
    login: build.mutation<IUserResponse, IUserLoginReq>({
      query: (userData) => ({
        url: "user/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["UrlsList", "User"],
    }),
    logout: build.mutation<IUserAuthResponse, void>({
      query: () => ({
        url: "user/logout",
        method: "POST",
      }),
      invalidatesTags: ["UrlsList", "User"],
    }),
    getUserData: build.query<IUserResponse, void>({
      query: () => "user",
      providesTags: ["User"],
    }),
    updateUserData: build.mutation<IUserResponse, IFieldsToUpdate>({
      query: (toUpdate) => ({
        url: "user",
        method: "PATCH",
        body: { toUpdate: toUpdate },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation<IUserResponse, IUserPassword>({
      query: (password) => ({
        url: "user",
        method: "DELETE",
        body: { password },
      }),
    }),
    changePassword: build.mutation<IUserAuthResponse, IChangePasswordReq>({
      query: (passwords) => ({
        url: "user/change-password",
        method: "PATCH",
        body: passwords,
      }),
    }),
  }),
});

export const {
  useIsAuthenticatedMutation,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserDataQuery,
  useUpdateUserDataMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
  // useLazyGetUserDataQuery,
} = userEndpoints;
