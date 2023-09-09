import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConvocatoriaRegistroService } from './convocatoria-registro.service';
import { CreateConvocatoriaRegistroDto } from './dto/create-convocatoria-registro.dto';
import { UpdateConvocatoriaRegistroDto } from './dto/update-convocatoria-registro.dto';

@Controller('convocatoria-registro')
export class ConvocatoriaRegistroController {
  constructor(private readonly convocatoriaRegistroService: ConvocatoriaRegistroService) {}

  @Post()
  create(@Body() createConvocatoriaRegistroDto: CreateConvocatoriaRegistroDto) {
    return this.convocatoriaRegistroService.create(createConvocatoriaRegistroDto);
  }

  @Get()
  findAll() {
    return this.convocatoriaRegistroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convocatoriaRegistroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvocatoriaRegistroDto: UpdateConvocatoriaRegistroDto) {
    return this.convocatoriaRegistroService.update(+id, updateConvocatoriaRegistroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convocatoriaRegistroService.remove(+id);
  }
}
