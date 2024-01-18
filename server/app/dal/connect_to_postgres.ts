import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';


@Module({
  imports: [
    ConfigModule.forRoot() ,
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: 'postgres',
        password: process.env.POSTGRES_PASSWORD,
        database: 'postgres',
        entities: [User],
        synchronize: true,
    }),
  ],
})
export class PostgresModule {}
