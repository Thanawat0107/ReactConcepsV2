import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/destination" }),
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    getAllDestination: builder.query({
      query: () => "destination",
    }),
  }),
});

//ชื่อที่ส่งออกขึ้นต้นด้วย use+ขึ้นต้นด้วยตัวใหญ่+Query
export const { useGetAllDestinationQuery } = destinationAPI;
