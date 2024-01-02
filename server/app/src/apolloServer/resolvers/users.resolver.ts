import postgresQuery from "../../postgres/querys.js";
import redis from "../../redis/redis.js";

interface MyContext {
  token?: string;
}

const resolvers = {
  Query: {
    users: async () => {
      const users = redis.getOrSetCache(postgresQuery.getAllUsers,"users")    
      return users
    },
  },
  Mutation: {
    addUser: async (_:any, args:any, _context:MyContext) => {
      try {
          const user = await postgresQuery.addUser(args.user)
          console.log(user,'new user');
          if (user) {
              await  redis.addUser(args.user ,"users")
          return user}
      }catch (error:any) {
              console.error('Error adding user:', error.message);
              throw new Error('Internal server error');
      }
  },
  }
};

export default resolvers;
