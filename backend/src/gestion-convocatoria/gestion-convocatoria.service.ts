import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateGestionConvocatoriaDto } from "./dto/create-gestion-convocatoria.dto";
import { UpdateGestionConvocatoriaDto } from "./dto/update-gestion-convocatoria.dto";
import { InjectModel } from "@nestjs/mongoose";
import { GestionConvocatoria } from "./schema/gestion-convocatoria.schema";
import { Model, ObjectId } from "mongoose";
import { ProyectosRegistro } from "../proyectos-registros/schema/proyectos-registro.schema";
import { autoGenerateCode } from "../utils/autoGenerateCode";
import { ConvocatoriaRegistro } from "../convocatoria-registro/schema/convocatoria-registro.schema";


@Injectable()
export class GestionConvocatoriaService {
  constructor(
    @InjectModel(GestionConvocatoria.name)
    private GestionModel: Model<GestionConvocatoria>,
    @InjectModel(ProyectosRegistro.name)
    private ProyectoModel: Model<ProyectosRegistro>,
    @InjectModel(ConvocatoriaRegistro.name)
    private  ConvocatoriaModel : Model <ConvocatoriaRegistro>,

  ) {}

  async create(
    createGestionConvocatoriaDto: CreateGestionConvocatoriaDto
  ): Promise<GestionConvocatoria> {
    
    const etapaSolicitud = await this.GestionModel.countDocuments({}).exec();
    const codigoEtapa = `R${(etapaSolicitud + 1).toString().padStart(6, "0")}`;
    const codigoConFecha = `${codigoEtapa}${autoGenerateCode()}`;
    const createdGestion = await this.ProyectoModel.findOne({"proyecto-nombre":createGestionConvocatoriaDto["proyecto"]}).exec()
    if(!createdGestion){
      throw new BadRequestException(`No hay proyectos disponibles para gestionar: ${createGestionConvocatoriaDto ['proyectos']}`)
    }
    const createdConvocatoria = await this.ConvocatoriaModel.findOne({"entidad-convocante":createGestionConvocatoriaDto["financiador"]})
    if(!createdConvocatoria){
      throw new BadRequestException(`No hay finaciadores disponibles para gestionar:${createGestionConvocatoriaDto["financiador"]}`)
    }

    const etapa = new this.GestionModel({
      convocatoria:createGestionConvocatoriaDto.convocatoria,
      financiador:createGestionConvocatoriaDto.financiador,
      proyecto: createGestionConvocatoriaDto.proyecto,
      "codigo-interno": codigoConFecha,
      "etapa-solicitud": createGestionConvocatoriaDto["etapa-solicitud"],
      "etapa-resolucion":createGestionConvocatoriaDto["etapa-resolucion"],
      "etapa-otorgamiento":createGestionConvocatoriaDto["etapa-otorgamiento"],
      "etapa-justificacion":createGestionConvocatoriaDto["etapa-justificacion"],
      "etapa-cierre":createGestionConvocatoriaDto["etapa-cierre"]
    });

    return etapa.save();
  }

 async findAll() {
    try{
      const AllGestiones = await this.GestionModel.find().exec()
      return {
        message: 'Todas las gestiones de convocatorias se han recibido correctamente',
        status:200,
        gestiones:AllGestiones
       };
    }catch(error){
      throw error
    }
  }

 async findOne(id:ObjectId) {
    try{
      const gestion = await this.GestionModel.findOne({_id:id})
      return {
        message: 'Gestion de convocatoria recibida correctamente',
        status: 200,
        gestion:gestion
      };
    }catch(error){
      throw error
    }
  }

 async update(
    updateGestionConvocatoriaDto: UpdateGestionConvocatoriaDto
  ) {
   try {
    const updateGestion = await this.GestionModel.findOneAndUpdate({_id:updateGestionConvocatoriaDto},
      {
       ...updateGestionConvocatoriaDto
      });
      return {
        message: "gestion actualizada correctamente",
        status:200,
        gestion:updateGestion
      }
   }catch(error){
    throw error
   }
  }

 async remove(id:ObjectId) {
  try {
    const findAndDelete = await this.GestionModel.findByIdAndDelete(id);
    if(!findAndDelete) throw new HttpException('Gestion de convocatoria no encontrada',HttpStatus.NOT_FOUND)
    return {
  message:'Gestion de convocatoria eliminida correctamente',
  status:200,
  data:''
    }
  }catch(error){
    throw error
  }
   
  }
}
