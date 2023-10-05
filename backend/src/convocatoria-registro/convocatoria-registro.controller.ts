import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles} from '@nestjs/common';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { ObjectId } from 'mongoose';
import { Public } from '../auth/decorators/public.decorator';
import { FileFieldsInterceptor} from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

const fs = require('fs');
@ApiTags('convocatoria-registro')
@Controller('announcement')
export class ConvocatoriaRegistroController {
  constructor(private readonly convocatoriaRegistroService: ConvocatoriaRegistroService) {}

  @Public()
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'memoriaTecnica', maxCount: 1 },
      { name: 'modeloPresupuesto', maxCount: 1 },
      { name: 'formularioSolicitud', maxCount: 1 },
      { name: 'otraDocumentacion', maxCount: 1 },
    ])
  )
  async createWithPDF(
    @Body() createConvocatoriaRegistroDto: CreateConvocatoriaRegistroDto,
    @UploadedFiles() files:{memoriaTecnica?:Express.Multer.File[],modeloPresupuesto?:Express.Multer.File[],formularioSolicitud?:Express.Multer.File[],otraDocumentacion?:Express.Multer.File[]}
  ) {
    console.log(files)
  try {
      if (!files) {
        throw new Error('No se proporcionó un archivo en formato correcto');
      }
     if (files.memoriaTecnica && files.memoriaTecnica) {
        const memoriaTecnicaBuffer = files.memoriaTecnica[0].buffer;
        const memoriaTecnicaFileName = files.memoriaTecnica[0].originalname
        const memoriaTecnicaFilePath = `./uploads/${memoriaTecnicaFileName}`;
        fs.writeFileSync(memoriaTecnicaFilePath, memoriaTecnicaBuffer);
        createConvocatoriaRegistroDto.memoriaTecnica = `http://localhost:3000/${memoriaTecnicaFileName}`;
      }
      if(files.modeloPresupuesto && files.modeloPresupuesto){
        const modeloBuffer = files.modeloPresupuesto[0].buffer
        const modeloFileName = files.modeloPresupuesto[0].originalname
        const modeloFilePath = `./uploads/${modeloFileName}`
        fs.writeFileSync(modeloFilePath, modeloBuffer)
        createConvocatoriaRegistroDto.modeloPresupuesto =  `http://localhost:3000/${modeloFileName}`;
      }
    if(files.formularioSolicitud && files.formularioSolicitud){
      const formBuffer = files.formularioSolicitud[0].buffer
      const formFileName = files.formularioSolicitud[0].originalname
      const formFilePath =  `./uploads/${formFileName}`
      fs.writeFileSync(formFilePath, formBuffer)
      createConvocatoriaRegistroDto.formularioSolicitud = `http://localhost:3000/${formFileName}`;
    }

if(files.otraDocumentacion && files.otraDocumentacion){
  const docuBuffer = files.otraDocumentacion[0].buffer
  const docuFileName = files.otraDocumentacion[0].originalname
  const docuPath =  `./uploads/${docuFileName}`
  fs.writeFileSync(docuPath, docuBuffer)
  createConvocatoriaRegistroDto.otraDocumentacion = `http://localhost:3000/${docuFileName}`;
}
      
      const result = await this.convocatoriaRegistroService.create(createConvocatoriaRegistroDto);
  
      return result; 
    } catch (error) {
      console.error('Error en el manejo del archivo PDF:', error);
      throw new Error('Error en el manejo del archivo PDF: ' + error.message);
    }  
  }

  @Public()
  @Get()
  findAll() {
    return this.convocatoriaRegistroService.findAll();
  }
 @Public()
  @Get(':id')
  findOne(@Param('id') id:ObjectId) {
    return this.convocatoriaRegistroService.findOne(id);
  }
 @Public()
  @Patch()
  update(@Body() updateConvocatoriaRegistroDto: UpdateConvocatoriaRegistroDto) {
    return this.convocatoriaRegistroService.update(updateConvocatoriaRegistroDto);
  }
  
 @Public()
  @Delete()
  remove(@Body('id') id:ObjectId) {
    return this.convocatoriaRegistroService.remove(id);
  }
}

