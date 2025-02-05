import apiSlice from "./apiSlice";


export const trackApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getTrack : builder.query({
            query : (id) => ({
                url : `/tracks/${id}`,
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }),
       
})

})



export const { useGetTrackQuery } = trackApiSlice