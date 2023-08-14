import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const genEndpoint: (id: string) => string = (id) => `url/${id}`;

export type Status = "On" | "Off" | "Error" | "Loading" | "Pending";
export interface UrlObj {
  id?: string;
  name: string;
  url: string;
  status: Status;
  error?: Error | string | object
}
interface NewUrlReq {
  name: string;
  url: string
}
export interface UrlResObj extends UrlObj {
  id: string;

  updatedAt: string;

}
export interface UrlResponse {
  success: boolean;
  data: UrlResObj;
}
interface UrlsListResponse {
  success: boolean;
  data: UrlResObj[]
}
export interface UpdateUrlObj {
  id: string
  data: {
    name?:string;
    url?:string;
    status?: Status;
    error?: Error | string | object
  }
}
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5555/hyper-ninja/v1",
    credentials:"include"
  }),
  tagTypes: ["UrlsList","User"],
  endpoints: (builder) => ({
    newUrl: builder.mutation<UrlResponse, NewUrlReq>({
      query: (urlObj: UrlObj) => ({
        url: genEndpoint("new"),
        method: "POST",
        body: urlObj,
      }),
      invalidatesTags: ["UrlsList"]
    }),
    getUrls: builder.query<UrlsListResponse, void>({
      query: () => genEndpoint(`urls-list`),
      providesTags: (result, error, arg) =>
        result?.success
          ? [...result.data.map(({ id }) => ({ type: "UrlsList" as const, id })), "UrlsList"]
          : ["UrlsList"],
    }),
    getUrlById: builder.query<UrlResponse, string>({
      query: (id: string) => genEndpoint(id),
      providesTags:(result,error,id)=>(result?.success?[{type:"UrlsList" as const,id}]:[])
    }),
    updateUrlById: builder.mutation<UrlResponse, UpdateUrlObj>({
      query: ({ id, data }) => ({
        url: genEndpoint(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, err, arg) => [{ type: "UrlsList", id: arg.id }]
    }),
    deleteUrlById: builder.mutation<UrlResponse, string>({
      query: (urlId: string) => ({
        url: genEndpoint(urlId),
        method: "DELETE",
      }),
      invalidatesTags: (result,err,urlId)=>[{type:"UrlsList",id:urlId}]

    }),
    quickReviveAll: builder.mutation<UrlResponse, void>({
      query: () => ({
        url: genEndpoint("/revive-all/on-login"),
        method: "POST",
      }),
      // invalidatesTags: ["UrlsList"]
    }),
    reviveUrlById: builder.mutation<UrlResponse, string>({
      query: (urlId: string) => ({
        url: genEndpoint(`revive/${urlId}`),
        method: "POST",
      }),
      invalidatesTags: (result,err,arg)=>[{type:"UrlsList",id:arg}]
    })
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
