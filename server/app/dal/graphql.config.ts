import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        installSubscriptionHandlers: true,
        subscriptions: {
          'graphql-ws': true
        },
        include: [UsersModule],
        autoSchemaFile: join(process.cwd(), 'src/users/schema.gql'),
        playground: false,
        plugins:[ApolloServerPluginLandingPageLocalDefault()]
      })
  ],
  
})
export class GraphqlModule {}
