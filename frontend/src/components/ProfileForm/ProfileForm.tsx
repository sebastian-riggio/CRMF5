import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../ui/button'

import { toast } from '../ui/use-toast'
import AccountFormSchema from '../accountFormSchema';
import { CardFooter } from '../ui/card'
import { Separator } from '@radix-ui/react-separator'
import { FormFields } from './FormFields'

type AccountFormValues = z.infer<typeof AccountFormSchema>

export const ProfileFormSchema = z.object({
  nombre: z.string().min(3, { message: 'Faltan caracteres' }),
  correo: z.string().email().min(3, { message: 'Faltan caracteres' }),
  telefono: z.string().min(9, { message: 'Debes ingresar un número de contacto' }),
  departamento: z.string(),
  area: z.string()
    .min(3, { message: 'Especifica area' }),
  fecha: z.date()
})

export function AccountForm () {

  return (
    <div className='container mx-auto my-0 border-1 border-solid border-input rounded-xl'>
      <div className='flex flex-col space-y-1.5 py-6'>
        <h3 className='text-2xl font-semibold leading-none tracking-tight mb-4'>Nuevo Usuario</h3>
        Completar los datos del nuevo usuario del Factoria F5
      </div>

      <Separator />
      <div className=''>
        <FormFields />
      </div>
    </div>
  )
}
