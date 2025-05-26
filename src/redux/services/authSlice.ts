import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

export const authSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/auth", credentials: 'include' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/signin",
                method: "POST",
                body,
            }),
        }),
        register: builder.mutation({
            query: (body) => ({
                url: "/signUp",
                method: "POST",
                body,
            }),
        }),

        verifyOtp: builder.mutation({
            query: (body) => ({
                url: "/verify-otp",
                method: "POST",
                body,
            }),
        }),
        resendOtp: builder.mutation({
            query: (body) => ({
                url: "/send-otp",
                method: "POST",
                body,
            }),
        }),
        forgetPassword: builder.mutation({
            query: (body) => ({
                url: "/emailVerificationCode",
                method: "POST",
                body,
            }),
        }),

        verifyRecoverCode: builder.mutation({
            query: (body) => ({
                url: "/verifyRecoverCode",
                method: "POST",
                body,
            }),
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: "/resetPassword",
                method: "POST",
                body,
            }),
        }),


    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useVerifyOtpMutation,
    useResendOtpMutation,
    useForgetPasswordMutation,
    useVerifyRecoverCodeMutation,
    useResetPasswordMutation
} = authSlice
