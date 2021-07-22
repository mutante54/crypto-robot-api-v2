import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { KnexModule } from './database/knex.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    KnexModule.register({
      debug: false,
      client: 'mysql2',
      connection: {
        host : 'localhost',
        user : 'crobot',
        password : 'crobot',
        database : 'crypto_robot'
      }
    }),   
    AuthModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
