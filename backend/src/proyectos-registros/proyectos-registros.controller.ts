import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { ObjectId } from 'mongoose';

@Controller('projects')
export class ProyectosRegistrosController {
  constructor(private proyectosRegistrosService: ProyectosRegistrosService) {}

  @Public()
  @Post('register')
  create(@Body() createProyectosRegistroDto: CreateProyectosRegistroDto) {
    return this.proyectosRegistrosService.create(createProyectosRegistroDto);
  }
  
 @Public()
  @Get()
  findAll() {
    return this.proyectosRegistrosService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id:ObjectId) {
    return this.proyectosRegistrosService.findOne(id);
  }

  @Public()
  @Patch('update')
  update(@Body() updateProyectosRegistroDto: UpdateProyectosRegistroDto) {
    return this.proyectosRegistrosService.update(updateProyectosRegistroDto);
  }
  @Public()
  @Delete('delete')
  remove(@Body('id') id:ObjectId) {
    return this.proyectosRegistrosService.remove(id);
  }
}
