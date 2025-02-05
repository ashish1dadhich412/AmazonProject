import apiSlice from "./apiSlice";


export const playListApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getTopFiftyIndia : builder.query({
            query : () => ({
                url : '/playlists/4SaPvMAaUjkbNTky16KjfD',
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }),
         getTrendingIndia : builder.query({
            query : () => ({
                url : '/playlists/4nqbYFYZOCospBb4miwHWy',
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }), 
        getTopGlobal : builder.query({
            query : () => ({
                url : '/playlists/1CHT1bqjeyYAF6VuA432nb',
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }),
        getBollyWoodMush : builder.query({
            query : () => ({
                url : '/playlists/1l6FVZYUqKH7OUXsKRVZBN',
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }),
    })
})



export const { useGetTopFiftyIndiaQuery, useGetTrendingIndiaQuery, useGetTopGlobalQuery, useGetBollyWoodMushQuery } = playListApiSlice