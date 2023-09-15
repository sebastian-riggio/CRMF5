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
    telefono: z.number().min(9, { message: 'Debes ingresar un número de contacto' })

});

export default accountFormSchema;
