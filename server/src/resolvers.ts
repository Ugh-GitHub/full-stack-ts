import queryTwitterResolvers from "./resolvers/Query"
import Db from "./db"
import { Resolvers } from "./resolvers-types.generated"

export interface TwitterResolverContext {
    db: Db
}

export function createResolvers(): Resolvers {
    const resolvers = {
        Query: queryTwitterResolvers,
    };
    return resolvers;
}