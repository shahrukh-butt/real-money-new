import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

export const coinSlice = createApi({
    reducerPath: 'coinSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({


        getMyCoins: builder.query({
            query: () => ({
                url: "/coins",
                method: "GET",
            }),
        }),





    }),
})

export const {
    useGetMyCoinsQuery
} = coinSlice
