// src/apiSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// Function to get the token
const getToken = async () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

  const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const { access_token, expires_in } = response.data;
  const expiryTime = Date.now() + expires_in * 1000;

  return { token: access_token, expiryTime };
};

// Slice to manage token state
const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: null,
    tokenExpiry: null
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.tokenExpiry = action.payload.expiryTime;
    }
  }
});

export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;

// Base query with token management
const baseQueryWithReauth = async (args, api, extraOptions) => {
  const { getState, dispatch } = api;
  let { token, tokenExpiry } = getState().token;

  // Check if token is expired or not available
  if (!token || Date.now() >= tokenExpiry) {
    const tokenData = await getToken();
    token = tokenData.token;
    tokenExpiry = tokenData.expiryTime;

    // Dispatch action to save token and expiry time in the state
    dispatch(setToken(tokenData));
    console.log(tokenData)
  }

  // Update headers with the new token
  args.headers = {
    ...args.headers,
    Authorization: `Bearer ${token}`,
  };

  return fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1',
  })(args, api, extraOptions);
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});

export default apiSlice;
