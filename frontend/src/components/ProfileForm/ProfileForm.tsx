import * as z from 'zod'
import { Separator } from '@radix-ui/react-separator'
import { FormFields } from './FormFields'

export const ProfileFormSchema = z.object({
  nombre: z.string().min(3, { message: 'Faltan caracteres' }),
  correo: z.string().email().min(3, { message: 'Faltan caracteres' }),
  telefono: z.string().min(9, { message: 'Debes ingresar un número de contacto' }),
  departamento: z.string(),
  area: z.string()
    .min(3, { message: 'Especifica area' }),
  fecha: z.date()
})

export function ProfileForm () {
  return (
    <div className='container mx-auto my-9 border-1 border-solid border-input rounded-xl py-8'>
      <div className='flex flex-col space-y-1.5'>
        <h3 className='text-2xl font-semibold leading-none tracking-tight mb-4'>Nuevo Usuario</h3>
        Completar los datos del nuevo usuario de Factoria F5
      </div>

      <Separator />
      <div className=''>
        <FormFields />
      </div>
    </div>
  )
}
