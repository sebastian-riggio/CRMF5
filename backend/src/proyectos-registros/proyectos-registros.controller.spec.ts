import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosRegistrosController } from './proyectos-registros.controller';
import { ProyectosRegistrosService } from './proyectos-registros.service';
import mongoose, { ObjectId, Schema, Types } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
import { CreateProyectosRegistroDto } from './dto/create-proyectos-registro.dto';
import { UpdateProyectosRegistroDto } from './dto/update-proyectos-registro.dto';


const proyectos = {
  _id:"65044504c7d7b5d92dce9b4e",
  'proyecto-nombre': 'P8 Mixta',
  'centro-gestor': 'Factoria F5 - Dirección general ',
  'responsable': 'Jesús Rivera',
  'proyecto-duracion':'6 meses',
  'proyecto-presupuesto': 23000,
  'factoria-presupuesto': 15000
}


describe('ProyectosRegistrosController', () => {
  let controller: ProyectosRegistrosController;
  const mockProyectoService = {
    findAll:
    jest.fn().mockImplementation(()=>{
      return Promise.resolve({
        message: 'Todas las proyectos se han recibido correctamente',
        status:200,
       proyectos:proyectos
      })
    }),

    findOne:
    jest.fn().mockImplementation(() => {
      return Promise.resolve({
        message: 'Proyecto recibido correctamente',
        status: 200,
        proyecto:proyectos
      })
    }),
    update:
    jest.fn().mockImplementation((id:ObjectId) => {
      return Promise.resolve({
        message: "Proyecto actualizado correctamente",
        status:200,
        proyectos:proyectos
      })
    }),

    remove:
    jest.fn().mockResolvedValue({
      message: 'Proyecto eliminado correctamente',
    status:HttpStatus.OK,
    data:""
    }),

    create:jest.fn().mockImplementation((registroProyecto:CreateProyectosRegistroDto) => {
    return Promise.resolve({
      proyectos:{
        _id:"65044504c7d7b5d92dce9b4e",
        ...registroProyecto
      }
    })
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProyectosRegistrosController],
      providers: [ProyectosRegistrosService],
    })
    .overrideProvider(ProyectosRegistrosService)
    .useValue(mockProyectoService)
    .compile();

    controller = module.get<ProyectosRegistrosController>(ProyectosRegistrosController);
  });

  it('should be defined',  () => {
    expect(controller).toBeDefined();
  });

  it('findAll:Todos los proyectos se han recibido correctamente',async () => {
    expect((await controller.findAll()))
  });

  it('findOne: Proyecto recibido correctamente', async () => {
    const id = new Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e')
    expect((await controller.findOne(id)))
  });

  it('update: Proyecto actualizado correctamente',async () => {
    const id = new mongoose.Schema.Types.ObjectId('65044504c7d7b5d92dce9b4e');
    const updateProyecto:UpdateProyectosRegistroDto = {
      _id:id,
      'proyecto-nombre': 'P8 Mixta',
  'centro-gestor': 'Factoria F5 - Dirección general ',
  'responsable': 'Jesús Rivera',
  'proyecto-duracion':'6 meses',
  'proyecto-presupuesto': 23000,
  'factoria-presupuesto': 15000
    };
    expect(await controller.update(updateProyecto))
  });

  it('remove: Proyecto eliminado correctamente',async () => {
    expect(await controller.remove(expect.any(Types.ObjectId))).toMatchObject({
      message: 'Proyecto eliminado correctamente',
      status:HttpStatus.OK,
      data:""
    })
  }),

  it('create : Proyecto creado con exito',async () => {
    const newProyecto: CreateProyectosRegistroDto = {
      'proyecto-nombre': 'P8 Mixta',
      'centro-gestor': 'Factoria F5 - Dirección general ',
      'responsable': 'Jesús Rivera',
      'proyecto-duracion':'6 meses',
      'proyecto-presupuesto': 23000,
      'factoria-presupuesto': 15000
    };
    expect(await controller.create(newProyecto))
    
  })
  
});
