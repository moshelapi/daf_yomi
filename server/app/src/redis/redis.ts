import { createClient } from "redis";
import { User } from "../utils/interfaces/user_interface.js";
import { RedisJSON } from "@redis/json/dist/commands/index.js";

export const client = createClient({
    socket: {
        host: 'redis', 
        port: 6379
    }
});

const getOrSetCache = async (cb: () => Promise<any>, key: string) => {
    try {
        const cachedData = await client.json.get(key);
        if (cachedData){ 
            return cachedData}
    

        const freshData = await cb();
        if (freshData !== undefined) {
            await client.json.set(key,"$",freshData);
            return freshData;
        }
    } catch (error) {
        console.error('Error in getOrSetCache:', error);
        throw error; 
    } 
}

const addUser = async (user: User, key: string) => {
    try {
        await client.json.arrAppend(key, '$', user as unknown as RedisJSON  );
        console.log(`User added to cache with key: ${key}`);
    } catch (error) {
        console.error('Error in addUser:', error);
        throw error;
    }
};


const redis = {
    getOrSetCache,
    addUser
}


export default redis
