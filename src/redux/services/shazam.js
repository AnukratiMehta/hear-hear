import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    export const shazamApi = createApi({
        reducerPath: 'shazamApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '742d4d8c1bmshb4b7dd80fa58ab2p13fe76jsnea8d401b7f22')
                                                
                return headers;
            }
        }),
        endpoints: (builder) => ({
            getChartTracks: builder.query({ query: () => '/charts/track'}),
            getSongDetails: builder.query({ query: ({ songid }) => `/songs/v2/get-details?id=${songid}`}),
        }),

    });

    export const {
        useGetChartTracksQuery,
        useGetSongDetailsQuery,
        
    } = shazamApi;