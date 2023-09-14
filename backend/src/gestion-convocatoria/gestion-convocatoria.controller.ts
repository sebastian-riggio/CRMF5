import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import { CreateGestionConvocatoriaDto } from './dto/create-gestion-convocatoria.dto';
import { UpdateGestionConvocatoriaDto } from './dto/update-gestion-convocatoria.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { ObjectId } from 'mongoose';

@Controller('gestion')
export class GestionConvocatoriaController {
  constructor(private readonly gestionConvocatoriaService: GestionConvocatoriaService) {}

  @Public()
  @Post('new')
  create(@Body() createGestionConvocatoriaDto: CreateGestionConvocatoriaDto) {
    return this.gestionConvocatoriaService.create(createGestionConvocatoriaDto);
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
  @Patch('update')
  update(@Body() updateGestionConvocatoriaDto: UpdateGestionConvocatoriaDto) {
    return this.gestionConvocatoriaService.update(
      updateGestionConvocatoriaDto);
  }
@Public()
  @Delete('delete')
  remove(@Body('id') id:ObjectId) {
    return this.gestionConvocatoriaService.remove(id);
  }
}
