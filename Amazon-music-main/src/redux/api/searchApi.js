import apiSlice from "./apiSlice";


export const searchApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        search : builder.query({
            query : (query) => ({
                url : `/search?q=${query}&type=track&market=US&limit=10&offset=0&include_external=audio`,
                method : 'GET'
            }),
            
            keepUnusedDataFor: 60 * 60, // Cache data for 1 hour
        }),
       
})

})



export const { useSearchQuery } = searchApiSlice