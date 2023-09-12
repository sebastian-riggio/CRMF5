import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateGestionConvocatoriaDto } from "./dto/create-gestion-convocatoria.dto";
import { UpdateGestionConvocatoriaDto } from "./dto/update-gestion-convocatoria.dto";
import { InjectModel } from "@nestjs/mongoose";
import { GestionConvocatoria } from "./schema/gestion-convocatoria.schema";
import { Model } from "mongoose";
import { ProyectosRegistro } from "src/proyectos-registros/schema/proyectos-registro.schema";

@Injectable()
export class GestionConvocatoriaService {
  constructor(
    @InjectModel(GestionConvocatoria.name)
    private GestionModel: Model<GestionConvocatoria>,
    @InjectModel(ProyectosRegistro.name)
    private ProyectoModel: Model<ProyectosRegistro>
  ) {}

  async create(
    createGestionConvocatoriaDto: CreateGestionConvocatoriaDto
  ): Promise<GestionConvocatoria> {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const etapaSolicitud = await this.GestionModel.countDocuments({}).exec();
    const codigoEtapa = `R${(etapaSolicitud + 1).toString().padStart(6, "0")}`;
    const codigoConFecha = `${codigoEtapa}-${year}${month}${day}`;
    const createdGestion = await this.ProyectoModel.findOne({"proyecto-nombre":createGestionConvocatoriaDto["proyecto"]}).exec()
    if(!createdGestion){
      throw new BadRequestException(`No hay proyectos disponibles para gestionar: ${createGestionConvocatoriaDto ['proyectos']}`)
    }

    const etapa = new this.GestionModel({
      proyecto: createGestionConvocatoriaDto.proyecto,
      "codigo-interno": codigoConFecha,
      "etapa-solicitud": createGestionConvocatoriaDto["etapa-solicitud"],
    });

    return etapa.save();
  }

  findAll() {
    return `This action returns all gestionConvocatoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gestionConvocatoria`;
  }

  update(
    id: number,
    updateGestionConvocatoriaDto: UpdateGestionConvocatoriaDto
  ) {
    return `This action updates a #${id} gestionConvocatoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestionConvocatoria`;
  }
}