import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinanciadoresRegistroService } from './financiadores-registro.service';
import { CreateFinanciadoresRegistroDto } from './dto/create-financiadores-registro.dto';
import { UpdateFinanciadoresRegistroDto } from './dto/update-financiadores-registro.dto';

@Controller('financiadores')
export class FinanciadoresRegistroController {
  constructor(private readonly financiadoresRegistroService: FinanciadoresRegistroService) {}

  @Post('registro')
  create(@Body() createFinanciadoresRegistroDto: CreateFinanciadoresRegistroDto) {
    return this.financiadoresRegistroService.create(createFinanciadoresRegistroDto);
  }

  @Get()
  findAll() {
    return this.financiadoresRegistroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financiadoresRegistroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinanciadoresRegistroDto: UpdateFinanciadoresRegistroDto) {
    return this.financiadoresRegistroService.update(+id, updateFinanciadoresRegistroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financiadoresRegistroService.remove(+id);
  }
}
