import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import { CreateGestionConvocatoriaDto } from './dto/create-gestion-convocatoria.dto';
import { UpdateGestionConvocatoriaDto } from './dto/update-gestion-convocatoria.dto';
import { Public } from '../auth/decorators/public.decorator';
import { ObjectId } from 'mongoose';
import { ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

const fs = require('fs');

@ApiTags('gestion-convocatorias')
@Controller('gestion')
export class GestionConvocatoriaController {
 
  constructor(private readonly gestionConvocatoriaService: GestionConvocatoriaService) {}

  @Public()
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      {name:'reciboOficial', maxCount:1},
      {name:'adjuntarResolucion', maxCount:1},
      {name:'adjuntarResolucionOtorgamiento', maxCount:1},
      {name:'documentoCierre',maxCount:1}
    ])
  )
 async createWithPdf(@Body() createGestionConvocatoriaDto: CreateGestionConvocatoriaDto,
       @UploadedFiles() files:{reciboOficial?:Express.Multer.File[], adjuntarResolucion?:Express.Multer.File[], adjuntarResolucionOtorgamiento:Express.Multer.File[], documentoCierre?:Express.Multer.File[]}
 
 ) {
  try {
    if(!files){
      throw new Error('No se proporciono un archivo en formato correcto')
    }
    if(files.reciboOficial && files.reciboOficial){
      const reciboBuffer = files.reciboOficial[0].buffer
      const reciboName = files.reciboOficial[0].originalname
      const reciboPath = `./uploads/${reciboName}`
      fs.writeFileSync(reciboPath,reciboBuffer)
      createGestionConvocatoriaDto.reciboOficial = `http://localhost:3000/${reciboName}`
    }
    if(files.adjuntarResolucion && files.adjuntarResolucion){
      const adjuntarBuffer = files.adjuntarResolucion[0].buffer
      const adjuntarName = files.adjuntarResolucion[0].originalname
      const adjuntarPath = `./uploads/${adjuntarName}`
      fs.writeFileSync(adjuntarPath,adjuntarBuffer)
      createGestionConvocatoriaDto.etapaResolucion.adjuntarResolucion = `http://localhost:3000/${adjuntarName}`
    }
   if(files.adjuntarResolucionOtorgamiento && files.adjuntarResolucionOtorgamiento){
    const otorgamientoBuffer = files.adjuntarResolucionOtorgamiento[0].buffer
    const otorgamientoName = files.adjuntarResolucionOtorgamiento[0].originalname
    const otorgamientoPath = `./uploads/${otorgamientoName}`
    fs.writeFileSync(otorgamientoPath,otorgamientoBuffer)
    createGestionConvocatoriaDto.etapaOtorgamiento.adjuntarResolucionOtorgamiento = `http://localhost:3000/${otorgamientoName}`
   }
 if(files.documentoCierre && files.documentoCierre){
  const documentoBuffer = files.documentoCierre[0].buffer
  const documentoName = files.documentoCierre[0].originalname
  const documentPath = `./uploads/${documentoName}`
  fs.writeFileSync(documentPath,documentoBuffer)
  createGestionConvocatoriaDto.etapaCierre.documentoCierre = `http://localhost:3000/${documentoName}`

 }
 const result = await this.gestionConvocatoriaService.create(createGestionConvocatoriaDto)
return result 
  }catch (error) {
    console.error('Error en el manejo del archivo PDF:', error);
    throw new Error('Error en el manejo del archivo PDF: ' + error.message);
  }  
  }
@Public()
  @Get()
  findAll() {
    return this.gestionConvocatoriaService.findAll();
  }
@Public()
  @Get(':id')
  findOne(@Param('id') id:ObjectId ) {
    return this.gestionConvocatoriaService.findOne(id);
  }
@Public()
  @Patch()
  update(@Body() updateGestionConvocatoriaDto: UpdateGestionConvocatoriaDto) {
    return this.gestionConvocatoriaService.update(updateGestionConvocatoriaDto);
  }
@Public()
  @Delete()
  remove(@Body('id') id:ObjectId) {
    return this.gestionConvocatoriaService.remove(id);
  }
  @Public()
  @Get("project/:proyectoNombre")
  async findConvocatoriasByProyecto(@Param("proyectoNombre") proyectoNombre: string) {
    try {
      const convocatoriasAsociadas = await this.gestionConvocatoriaService.findConvocatoriasByProyecto(
        proyectoNombre
      );
      return {
        message: "Este proyecto esta ascociado a estas convocatorias",
        status: 200,
        convocatorias: convocatoriasAsociadas,
      };
    } catch (error) {
      return {
        message: "Actualmente este proyecto no esta inscrito a ninguna convocatoria",
        status: 404,
        error: error.message,
      };
    }
  }

}
