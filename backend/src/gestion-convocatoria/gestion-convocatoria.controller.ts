import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestionConvocatoriaService } from './gestion-convocatoria.service';
import { CreateGestionConvocatoriaDto } from './dto/create-gestion-convocatoria.dto';
import { UpdateGestionConvocatoriaDto } from './dto/update-gestion-convocatoria.dto';
import { Public } from '../auth/decorators/public.decorator';
import { ObjectId } from 'mongoose';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('gestion-convocatorias')
@Controller('gestion')
export class GestionConvocatoriaController {
 
  constructor(private readonly gestionConvocatoriaService: GestionConvocatoriaService) {}

  @Public()
  @Post()
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
