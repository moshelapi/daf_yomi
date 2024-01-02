var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import postgresQuery from "../../postgres/querys.js";
import redis from "../../redis/redis.js";
const resolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            const users = redis.getOrSetCache(postgresQuery.getAllUsers, "users");
            return users;
        }),
    },
    Mutation: {
        addUser: (_, args, _context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const user = yield postgresQuery.addUser(args.user);
                console.log(user, 'new user');
                if (user) {
                    yield redis.addUser(args.user, "users");
                    return user;
                }
            }
            catch (error) {
                console.error('Error adding user:', error.message);
                throw new Error('Internal server error');
            }
        }),
    }
};
export default resolvers;
//# sourceMappingURL=users.resolver.js.map