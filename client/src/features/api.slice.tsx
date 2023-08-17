import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const genEndpoint: (id: string) => string = (id) => `url/${id}`;
import {
  INewUrlReq,
  IUrlsListResponse,
  UpdateUrlObj,
  IQuickReviveRes,
  IUrlResponse,
} from "../Types/url.types";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hyper-ninja-server.onrender.com/hyper-ninja/v1",
    credentials: "include",
  }),
  tagTypes: ["UrlsList", "User"],
  endpoints: (builder) => ({
    newUrl: builder.mutation<IUrlResponse, INewUrlReq>({
      query: (urlObj) => ({
        url: genEndpoint("new"),
        method: "POST",
        body: urlObj,
      }),
      invalidatesTags: ["UrlsList"],
    }),
    getUrls: builder.query<IUrlsListResponse, void>({
      query: () => genEndpoint(`urls-list`),
      providesTags: (result) =>
        result?.success
          ? [
              ...result.data.map(({ id }) => ({
                type: "UrlsList" as const,
                id,
              })),
              "UrlsList",
            ]
          : ["UrlsList"],
    }),
    getUrlById: builder.query<IUrlResponse, string>({
      query: (id) => genEndpoint(id),
      providesTags: (result, _, id) =>
        result?.success ? [{ type: "UrlsList" as const, id }] : [],
    }),
    updateUrlById: builder.mutation<IUrlResponse, UpdateUrlObj>({
      query: ({ id, data }) => ({
        url: genEndpoint(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_, __, arg) => [{ type: "UrlsList", id: arg.id }],
    }),
    deleteUrlById: builder.mutation<IUrlResponse, string>({
      query: (urlId) => ({
        url: genEndpoint(urlId),
        method: "DELETE",
      }),
      invalidatesTags: (_, __, urlId) => [
        { type: "UrlsList", id: urlId },
      ],
    }),
    quickReviveAll: builder.mutation<IQuickReviveRes, void>({
      query: () => ({
        url: genEndpoint("/revive-all/on-login"),
        method: "POST",
      }),
    }),
    reviveUrlById: builder.mutation<IUrlResponse, string>({
      query: (urlId) => ({
        url: genEndpoint(`revive/${urlId}`),
        method: "POST",
      }),
      invalidatesTags: (_, __, arg) => [{ type: "UrlsList", id: arg }],
    }),
  }),
});

export const {
  useNewUrlMutation,
  useGetUrlsQuery,
  useLazyGetUrlsQuery,
  useGetUrlByIdQuery,
  useUpdateUrlByIdMutation,
  useDeleteUrlByIdMutation,
  useQuickReviveAllMutation,
  useReviveUrlByIdMutation,
} = apiSlice;
