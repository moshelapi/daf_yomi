import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostgresModule } from 'dal/connect_to_postgres';
import { GraphqlModule } from 'dal/graphql.config';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(
      {isGlobal: true}) ,
    PostgresModule,
    UsersModule,
    GraphqlModule,
    CacheModule.register({ 
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
