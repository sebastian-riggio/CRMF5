import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  /*   UserModule,
    AuthModule, */
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://southcaribbean:Qx0sf2vmsknbTxgC@cluster0.v1ttqqq.mongodb.net/',
    ),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
