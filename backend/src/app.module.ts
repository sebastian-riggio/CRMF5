import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
  /*   UserModule,
    AuthModule, */
    ConfigModule.forRoot({ isGlobal: true }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
