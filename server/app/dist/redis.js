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
export const getOrSetCache = (cb) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const banners = yield client.json.get("banner");
        if (banners) {
            return banners;
        }
        const freshData = yield cb();
        yield client.json.set("banner", "$", freshData);
        return freshData;
    }
    catch (error) {
        return error;
    }
});
//# sourceMappingURL=redis.js.map