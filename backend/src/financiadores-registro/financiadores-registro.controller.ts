import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { FinanciadoresRegistroService } from './financiadores-registro.service';
import { CreateFinanciadoresRegistroDto } from './dto/create-financiadores-registro.dto';
import { UpdateFinanciadoresRegistroDto } from './dto/update-financiadores-registro.dto';
import { ObjectId } from 'mongoose';
import { Public } from 'src/auth/decorators/public.decorator';


@Controller('financiadores')
export class FinanciadoresRegistroController {
  constructor(private readonly financiadoresRegistroService: FinanciadoresRegistroService) {}

  @Public()
  @Post('registro')
  create(@Body() createFinanciadoresRegistroDto: CreateFinanciadoresRegistroDto) {
    return this.financiadoresRegistroService.create(createFinanciadoresRegistroDto);
  }

  @Get()
  findAll() {
    return this.financiadoresRegistroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:ObjectId) {
    return this.financiadoresRegistroService.findOne(id);
  }

  @Patch('actualizar')
  update(@Body() updateFinanciadoresRegistroDto: UpdateFinanciadoresRegistroDto) {
    return this.financiadoresRegistroService.update(updateFinanciadoresRegistroDto);
  }

  @Delete('borrar')
  remove(@Body('id') id:ObjectId) {
    return this.financiadoresRegistroService.remove(id);
  }
}
