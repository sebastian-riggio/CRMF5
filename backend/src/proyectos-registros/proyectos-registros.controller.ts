import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';

@Controller('proyectos')
export class ProyectosRegistrosController {
  constructor(private proyectosRegistrosService: ProyectosRegistrosService) {}

  @Post('registro')
  create(@Body() createProyectosRegistroDto: CreateProyectosRegistroDto) {
    return this.proyectosRegistrosService.create(createProyectosRegistroDto);
  }

  @Get()
  findAll() {
    return this.proyectosRegistrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectosRegistrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectosRegistroDto: UpdateProyectosRegistroDto) {
    return this.proyectosRegistrosService.update(+id, updateProyectosRegistroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectosRegistrosService.remove(+id);
  }
}
