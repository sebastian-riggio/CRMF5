import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { ObjectId } from 'mongoose';
import { Public } from '../auth/decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('announcement')
export class ConvocatoriaRegistroController {
  constructor(private readonly convocatoriaRegistroService: ConvocatoriaRegistroService) {}

 @Public()
  @Post('register')
  create(@Body() createConvocatoriaRegistroDto: CreateConvocatoriaRegistroDto) {
    return this.convocatoriaRegistroService.create(createConvocatoriaRegistroDto);
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
  @Patch('update')
  update(@Body() updateConvocatoriaRegistroDto: UpdateConvocatoriaRegistroDto) {
    return this.convocatoriaRegistroService.update(updateConvocatoriaRegistroDto);
  }
  
 @Public()
  @Delete('delete')
  remove(@Body('id') id:ObjectId) {
    return this.convocatoriaRegistroService.remove(id);
  }

@Public()
@UseInterceptors(FileInterceptor('file'))
@Post('upload')
async uploadFileAndPassValidation(
  @Body() body: CreateConvocatoriaRegistroDto,
@UploadedFile() file,
) {
  if(!file){
    return { error: 'No se ha proporcionado un archivo PDF' };
  }
  const fileBuffer = file.buffer
  const fileName = file.originalname;
  try {
    const fs = require('fs');
    const filePath = `./uploads/${fileName}`
    fs.writeFileSync(filePath,fileBuffer)
    return {
      message:'Archivo cargado y guardado correctamente',
      filePath,
      body,
    };
  }catch(error){
    return { error: 'Error al guardar el archivo PDF' };
  }
}
}

