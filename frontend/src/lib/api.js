import {axiosInstance} from './axios';


export async function getStreamToken() {
  try {
    const response = await axiosInstance.get('/chat/token');
    return response.data.token;
  } catch (error) {
    console.error('Error fetching stream token:', error);
    throw error;
  }
}