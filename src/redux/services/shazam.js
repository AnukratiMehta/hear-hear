import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    export const shazamApi = createApi({
        reducerPath: 'shazamApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '742d4d8c1bmshb4b7dd80fa58ab2p13fe76jsnea8d401b7f22')
                headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com')
                return headers;
            }
            
        }),
        endpoints: (builder) => ({
            getChartTracks: builder.query({ query: () => '/charts/track'}),
            getShazamDetails: builder.query({ query: (songid) => `/shazam-songs/get-details?id=${songid}`}),
            getRelatedSongs: builder.query({ query: (songid) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`}),
            getArtistDetails: builder.query({ query: (artistId) => `/artists/get-summary?id=${artistId}`}),
            getSongDetails: builder.query({ query: (songid) => `songs/v2/get-details?id=${songid}`}),
            getSongBy: builder.query({ query: () => '/charts/list'}),
        }),

    });

    export const {
        useGetChartTracksQuery,
        useGetShazamDetailsQuery,
        useGetRelatedSongsQuery,
        useGetArtistDetailsQuery,
        useGetSongDetailsQuery,
        useGetSongByQuery
    } = shazamApi;