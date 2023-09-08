import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'process';
// 'mongodb+srv://southcaribbean:Qx0sf2vmsknbTxgC@cluster0.v1ttqqq.mongodb.net/',

@Module({
  imports: [
  /*   UserModule,
    AuthModule, */
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        connectionName: 'CRMDB',
        useFactory: async (config, ConfigService) => ({
          uri: config.get('MONGO_URI'),
          // useNewUrlParser: true,
          // useUnifiedTopology: true,
        }),
        inject: [ConfigService]
      }
    ),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
