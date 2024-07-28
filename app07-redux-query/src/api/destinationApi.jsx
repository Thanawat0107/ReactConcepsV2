import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    getAllDestination: builder.query({
      query: () => "destination",
      providesTags: ["Destinations"],
    }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
        invalidatesTags: ["Destinations"],
      }),
    }),

    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
        invalidatesTags: ["Destinations"],
      }),
    }),

    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
        invalidatesTags: ["Destinations"],
      }),
    }),
  }),
});

//ชื่อที่ส่งออกขึ้นต้นด้วย use+ขึ้นต้นด้วยตัวใหญ่+Query
export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationAPI;
