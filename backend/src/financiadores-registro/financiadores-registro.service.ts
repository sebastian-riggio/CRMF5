import { Injectable } from '@nestjs/common';
import { CreateFinanciadoresRegistroDto } from './dto/create-financiadores-registro.dto';
import { UpdateFinanciadoresRegistroDto } from './dto/update-financiadores-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FinanciadoresRegistro } from './schema/financiadores-registro.schema';
import { Model } from 'mongoose';

@Injectable()
export class FinanciadoresRegistroService {

  constructor(
    @InjectModel(FinanciadoresRegistro.name)
     private  FinanciadoresModel: Model<FinanciadoresRegistro>
  ){}


 async create(createFinanciadoresRegistroDto: CreateFinanciadoresRegistroDto): Promise <FinanciadoresRegistro> {
  try {
    const createdRegister = await this.FinanciadoresModel.create(createFinanciadoresRegistroDto)
    return createdRegister
  }catch(error){
    console.log(error)
    throw new Error("Error al crear el registro de financiadores");
  }

  }

  findAll() {
    return `This action returns all financiadoresRegistro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financiadoresRegistro`;
  }

  update(id: number, updateFinanciadoresRegistroDto: UpdateFinanciadoresRegistroDto) {
    return `This action updates a #${id} financiadoresRegistro`;
  }

  remove(id: number) {
    return `This action removes a #${id} financiadoresRegistro`;
  }
}
