var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createClient } from "redis";
export const client = createClient({
    socket: {
        host: 'redis',
        port: 6379
    }
});
const getOrSetCache = (cb, key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cachedData = yield client.json.get(key);
        if (cachedData) {
            return cachedData;
        }
        const freshData = yield cb();
        if (freshData !== undefined) {
            yield client.json.set(key, "$", freshData);
            return freshData;
        }
    }
    catch (error) {
        console.error('Error in getOrSetCache:', error);
        throw error;
    }
});
const addUser = (user, key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.json.arrAppend(key, '$', user);
        console.log(`User added to cache with key: ${key}`);
    }
    catch (error) {
        console.error('Error in addUser:', error);
        throw error;
    }
});
const redis = {
    getOrSetCache,
    addUser
};
export default redis;
//# sourceMappingURL=redis.js.map