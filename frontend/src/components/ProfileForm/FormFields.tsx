import { cn } from '@/lib/utils'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { format } from 'date-fns'
import { CheckIcon, CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from '../ui/form'
import { Input } from '../ui/input'
import { ProfileFormSchema } from './ProfileForm'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '../ui/use-toast'
import { Calendar } from '../ui/calendar'
import { useForm } from 'react-hook-form'

const departamento = [
  { label: 'Factoría F5 - People and culture', value: 'Factoría F5 - People and culture' },
  { label: 'Factoría F5 - Admin,contabilidad y finanzas', value: 'Factoría F5 - Admin,contabilidad y finanza' },
  { label: 'Factoría F5 - Oficina soporte proyectos y calidad', value: 'Factoría F5 - Oficina soporte proyectos y calida' },
  { label: 'Factoría F5 - Comunicación', value: 'Factoría F5 - Comunicación' },
  { label: 'Factoría F5 - Dirección general', value: 'Factoría F5-Dirección general' },
  { label: 'Factoria F5 - Madrid', value: 'Factoria F5 - Madrid' },
  { label: 'Factoria F5 - Asturias', value: 'Factoria F5 - Asturias' },
  { label: 'Factoria F5 - Barcelona', value: 'Factoria F5 - Barcelona' },
  { label: 'Otro', value: 'Otro' }
] as const

export function FormFields () {
  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      nombre: 'User finto'
    }
  })

  async function onSubmit (data: z.infer<typeof ProfileFormSchema>) {
    console.log(data)
    try {
      const output = {
        ...data,
        password: 'secret'
      }
      // const response: AxiosResponse = await createUser(output)
      toast({
        title: 'Crea un nuevo usurario para Factoria F5:',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(output, null, 2)}</code>
          </pre>
        )
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: (
          <div>
            <p>{error}</p>
          </div>
        )
      })
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='mt-3 max-w-2xl flex flex-col gap-2 mx-auto'>
          <FormField
            control={form.control}
            name='nombre'
            render={({ field }) => (
              <FormItem>
                <div className='my-2 flex flex-col justifiy flex-wrap md:flex-nowrap'>
                  <FormLabel className='pb-4'>Nombre y Apellido</FormLabel>
                  <FormControl>
                    <Input placeholder='Nombre y Apellido' {...field} className=''/>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='departamento'
            render={({ field }) => {
              return (
                <FormItem className='flex flex-col'>
                  <div className='my-2 flex flex-col justifiy flex-wrap md:flex-nowrap gap-4'>
                    <FormLabel>Departamento o centro gestor</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant='outline'
                            role='combobox'
                            className={cn(
                              'justify-between',
                              !field.value && 'text-muted-foreground py-6'
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
                      <PopoverContent className='p-0'>
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
                                  )} />
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
              )
            }}
          />

          <FormField
            control={form.control}
            name='area'
            render={({ field }) => (
              <FormItem>
                <div className='my-2 flex flex-col justifiy flex-wrap md:flex-nowrap gap-4'>
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
              <FormItem className=''>
                <div className='my-2 flex flex-col justifiy flex-wrap md:flex-nowrap gap-4'>
                  <FormLabel>Fecha inicio de actividad</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          className={cn(
                            ' pl-3 text-left font-normal',
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
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')}
                        initialFocus
                        className='bg-gray-100'
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
                <div className='my-2 flex flex-col justifiy flex-wrap md:flex-nowrap gap-4'>
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
                <div className='my-2 flex flex-col justifiy flex-wrap md:flex-nowrap gap-4'>
                  <FormLabel>Teléfono de contacto</FormLabel>
                  <FormControl>
                    <Input placeholder='telefono' {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className='mt-4'>
            <Button className='mr-4' variant='outline' type='submit'>Cancelar</Button>
            <Button className='bg-[var(--success)] text-foreground' type='submit'>Crear</Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
