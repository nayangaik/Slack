import { StreamChat } from 'stream-chat';
import { ENV } from './env.js';

export const streamClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET);

export const upsertStreamUser = async (user) => {

    try{

    await streamClient.upsertUser({ user});
    console.log(`Stream user upserted: ${user.id}`);
    }catch(err){
        console.error("Error upserting Stream user:", err);
    }   


};



export const deleteStreamUser = async (userId) => {
  try {
    await streamClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    const userIdString = userId.toString();
    return streamClient.createToken(userIdString);
  } catch (error) {
    console.log("Error generating Stream token:", error);
    return null;
  }
};