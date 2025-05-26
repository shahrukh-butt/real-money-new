import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

export const userSlice = createApi({
    reducerPath: 'userSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/user", credentials: 'include' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({


        getUser: builder.query({
            query: () => ({
                url: "/profile",
                method: "GET",
            }),
        }),

        updateUserProfile: builder.mutation({
            query: (body) => ({
              url: "/profile",
              method: "PATCH",
              body,
            }),
          }),

    
 


    }),
})

export const {
    useGetUserQuery,
    useUpdateUserProfileMutation

} = userSlice
