import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { ConvocatoriaRegistroModule } from "./convocatoria-registro/convocatoria-registro.module";
import { ProyectosRegistrosModule } from "./proyectos-registros/proyectos-registros.module";
import { GestionConvocatoriaModule } from "./gestion-convocatoria/gestion-convocatoria.module";
import { MongooseModule } from "@nestjs/mongoose";
import { json } from "express";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

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
     
    MulterModule.register({
      storage: diskStorage({

        destination: `./uploads`, // Carpeta donde se almacenarán los archivos
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          cb(null, file.fieldname + '-' + uniqueSuffix);
        },
      }),
    }), 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    UserModule,
    AuthModule, 
    ConvocatoriaRegistroModule,
    ProyectosRegistrosModule,
    GestionConvocatoriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(json()) 
      .forRoutes({ path: '*', method: RequestMethod.ALL }); // Aplica el middleware a todas las rutas y métodos
  }
}
