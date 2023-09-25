import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';
import { ObjectId } from 'mongoose';
import { Public } from '../auth/decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConvocatoriaRegistro } from './schema/convocatoria-registro.schema';


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
  @UploadedFile()file: Express.Multer.File,
  
) {console.log(file)
 if(!file){
  return{error:'No se subio ningun archivo'}
 } 
 try{
  const newConvocatoria = new ConvocatoriaRegistro()
  newConvocatoria.memoriaTecnica ;
   file.buffer.toString('base64') 
  await newConvocatoria.save()
  return {message:'Convocatoria subida'}
 }catch(error){
  return{error:'Error al guardar archivos'}
 }
}
 
  
}
