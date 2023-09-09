import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { FinanciadoresRegistroModule } from "./financiadores-registro/financiadores-registro.module";
import { ConvocatoriaRegistroModule } from "./convocatoria-registro/convocatoria-registro.module";
import { ProyectosRegistrosModule } from "./proyectos-registros/proyectos-registros.module";
import { GestionConvocatoriaModule } from "./gestion-convocatoria/gestion-convocatoria.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get<string>(
          "DB_USER"
        )}:${configService.get<string>(
          "DB_PASSWORD"
        )}@${configService.get<string>("DB_HOST")}/${configService.get<string>(
          "DB_NAME"
        )}`,
      }),
      inject: [ConfigService],
    }),

    /*   UserModule,
    AuthModule, */
    FinanciadoresRegistroModule,
    ConvocatoriaRegistroModule,
    ProyectosRegistrosModule,
    GestionConvocatoriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
