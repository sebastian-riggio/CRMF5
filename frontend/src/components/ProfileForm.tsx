import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon, CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '../lib/utils'
import { Button } from '../components/ui/button'
import { Calendar } from '../components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '../components/ui/command'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../components/ui/form'
import { Input } from '../components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../components/ui/popover'
import { toast } from '../components/ui/use-toast'

const departamento = [
  { label: 'Factoría F5 - People and culture', value: 'p&c' },
  { label: 'Factoría F5 - Admin, contabilidad y finanzas', value: 'con' },
  { label: 'Factoría F5- Oficina soporte proyectos y calidad', value: 'cal' },
  { label: 'Factoría F5 -  Dirección general', value: 'gen' },
  { label: 'Otro', value: 'otro' }
] as const

const accountFormSchema = z.object({
  nombre: z
    .string()
    .min(2, {
      message: 'Debes completar con el nombre'
    }),
  departamento: z.string({
    required_error: 'Por favor elije un centro gestor de factoria F5'
  }),
  area: z.string()
    .min(5, { message: 'Debes completar con el área' }),
  fecha: z.date({
    required_error: 'Debes ingresar una fecha '
  }),
  correo: z.string({ required_error: 'Debes ingresar un correo electrónico' }),
  telefono: z.string().min(9, { message: 'Debes ingresar un número de contacto' })

})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function AccountForm () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues
  })

  function onSubmit (data: AccountFormValues) {
    console.log(data)
    toast({
      title: 'Crea un nuevo usurario para Factoria F5:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <div className='container mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='nombre'
            render={({ field }) => (
              <FormItem>
                <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                  <FormLabel>Nombre y Apellido</FormLabel>
                  <FormControl>
                    <Input placeholder='Nombre y Apellido' {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='departamento'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                  <FormLabel>Departamento o centro gestor</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          role='combobox'
                          className={cn(
                            'w-[200px] justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? departamento.find(
                              (departamento) => departamento.value === field.value
                            )?.label
                            : 'Selecciona el departamento de Factoria F5'}
                          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-[200px] p-0'>
                      <Command>
                        <CommandInput placeholder='Buscar departamento' />
                        <CommandEmpty>Departamento no encontrado</CommandEmpty>
                        <CommandGroup>
                          {departamento.map((departamento) => (
                            <CommandItem
                              value={departamento.label}
                              key={departamento.value}
                              onSelect={() => {
                                form.setValue('departamento', departamento.value)
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  departamento.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              {departamento.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='area'
            render={({ field }) => (
              <FormItem>
                <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                  <FormLabel>Área de trabajo en Factoria F5</FormLabel>
                  <FormControl>
                    <Input placeholder='área de trabajo' {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='fecha'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                  <FormLabel>Fecha inicio de actividad</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          className={cn(
                            'w-[240px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? (
                                format(field.value, 'PPP')
                              )
                            : (
                              <span>Elige la fecha </span>
                              )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                      // eslint-disable-next-line react/jsx-handler-names
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='correo'
            render={({ field }) => (
              <FormItem>
                <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder='correo electrónico' {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='telefono'
            render={({ field }) => (
              <FormItem>
                <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                  <FormLabel>Teléfono de contacto</FormLabel>
                  <FormControl>
                    <Input placeholder='telefono' {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type='submit'>Cancelar</Button>
          <Button type='submit'>Crear</Button>
        </form>
      </Form>
    </div>
  )
}
