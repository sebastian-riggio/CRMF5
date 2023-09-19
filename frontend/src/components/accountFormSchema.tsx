import { z } from 'zod';

const accountFormSchema = z.object({
    titulo: z.string().min(2, {
        message: 'Debe completar este campo',
    }),
    periodomaximo: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    tematica: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    entidad: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    dpto: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    url: z.string({ required_error: 'Por favor ingrese un URL' }),
    urlbases: z.string({ required_error: 'Por favor ingrese un URL' }),
    texto: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    infotexto: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    entidades: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    number: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    file: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }),
    fecha: z.string({
        required_error: 'Debes ingresar una fecha '
    }),
    fechaclose: z.string({
        required_error: 'Debes ingresar una fecha '
    }),
    fechatime: z.string({
        required_error: 'Debes ingresar una fecha '
    }),
    fechajus: z.string({
        required_error: 'Debes ingresar una fecha '
    }),
    auditoria: z
        .string()
        .min(2, {
            message: 'Debe completar este campo'
        }).optional(),
    area: z.string()
        .min(5, { message: 'Debes completar con el área' }),
    correo: z.string({ required_error: 'Debes ingresar un correo electrónico' }),
    telefono: z.number().min(9, { message: 'Debes ingresar un número de contacto' }),

// ProyectForm
    'proyecto-nombre': z.string().min(2, {
         message: 'Debe completar este campo',
     }),
    'centro-gestor': z.string().min(2, {
        message: 'Debe completar este campo',

    }),
    'responsable': z.string().min(2, {
        message: 'Debe completar este campo',
    }),
    'proyecto-duracion': z.string().min(2, {
        message: 'Debe completar este campo',
    }),
    'proyecto-presupuesto': z.string().min(2, {
        message: 'Debe completar este campo',
    }),

    'factoria-presupuesto': z.string().min(2, {
        message: 'Debe completar este campo',
    }),

// ProfileForm
    nombre: z
        .string( {
            required_error: 'Debes completar con el nombre'
        }),
    departamento: z.string({
        required_error: 'Elije un centro gestor de factoria F5'
    }),

    area: z.string({
        required_error: 'Elije una área'
    }),

    telefono: z.string({
        required_error: 'Debes completar con teléfono de contacto'
    }),


});

export default accountFormSchema;
