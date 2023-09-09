import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import { CreateGestionConvocatoriaDto } from './dto/create-gestion-convocatoria.dto';
import { UpdateGestionConvocatoriaDto } from './dto/update-gestion-convocatoria.dto';

@Controller('gestion-convocatoria')
export class GestionConvocatoriaController {
  constructor(private readonly gestionConvocatoriaService: GestionConvocatoriaService) {}

  @Post()
  create(@Body() createGestionConvocatoriaDto: CreateGestionConvocatoriaDto) {
    return this.gestionConvocatoriaService.create(createGestionConvocatoriaDto);
  }

  @Get()
  findAll() {
    return this.gestionConvocatoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestionConvocatoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestionConvocatoriaDto: UpdateGestionConvocatoriaDto) {
    return this.gestionConvocatoriaService.update(+id, updateGestionConvocatoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestionConvocatoriaService.remove(+id);
  }
}
