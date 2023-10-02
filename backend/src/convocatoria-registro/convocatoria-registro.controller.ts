import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles} from '@nestjs/common';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { ObjectId } from 'mongoose';
import { Public } from '../auth/decorators/public.decorator';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

const fs = require('fs');

@Controller('announcement')
export class ConvocatoriaRegistroController {
  constructor(private readonly convocatoriaRegistroService: ConvocatoriaRegistroService) {}

  @Public()
  @Post()
  @UseInterceptors(FileInterceptor('memoriaTecnica'))
  async createWithPDF(
    @Body() createConvocatoriaRegistroDto: CreateConvocatoriaRegistroDto,
    @UploadedFile() memoriaTecnica:  Express.Multer.File,
  ) {
    try {
      if (!memoriaTecnica) {
        throw new Error('No se proporcionó un archivo PDF');
      }
  
      const fileBuffer = memoriaTecnica.buffer
      const fileName = memoriaTecnica.originalname
      //y aqui lo guardo correctamente en mi carpeta
      const filePath = `./uploads/${fileName}`
      fs.writeFileSync(filePath,fileBuffer)
      createConvocatoriaRegistroDto.memoriaTecnica = `http://localhost:3000/${fileName}`
  //Aqui si me hace la referencia en la base de datos
      const result = await this.convocatoriaRegistroService.create(createConvocatoriaRegistroDto);
  
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Error en el manejo del archivo PDF');
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

/*  @Public()
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
}  */
}

