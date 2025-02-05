import axios from 'axios';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

let token = null;
let tokenExpiry = null;

const getToken = async () => {
  if (!token || Date.now() >= tokenExpiry) {
    const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    token = response.data.access_token;
    tokenExpiry = Date.now() + (response.data.expires_in * 1000);
  }
  return token;
};

export default getToken;
