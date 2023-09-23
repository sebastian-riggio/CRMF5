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
import { UseFormReturn, useForm } from 'react-hook-form'
import { z } from 'zod'
import { CardFooter } from '../ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '../ui/use-toast'
import { Calendar } from '../ui/calendar'

const departamento = [
  { label: 'Factoría F5 - People and culture', value: 'p&c' },
  { label: 'Factoría F5 - Admin, contabilidad y finanzas', value: 'con' },
  { label: 'Factoría F5- Oficina soporte proyectos y calidad', value: 'cal' },
  { label: 'Factoría F5 -  Dirección general', value: 'gen' },
  { label: 'Otro', value: 'otro' }
] as const


export function FormFields () {
  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      nombre: 'User finto'
    }
  })

  function onSubmit (data: z.infer<typeof ProfileFormSchema>) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='mt-8'>
          <FormField
            control={form.control}
            name='nombre'
            render={({ field }) => (
              <FormItem>
                <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
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
                  <div className='my-2 flex justifiy flex-wrap md:flex-nowrap'>
                    <FormLabel>Departamento o centro gestor</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant='outline'
                            role='combobox'
                            className={cn(
                              'justify-between',
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
              <FormItem className=''>
                <div className='my-2 flex flex-col justifiy flex-wrap md:flex-nowrap'>
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
                        // eslint-disable-next-line react/jsx-handler-names
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
          <CardFooter>
            <Button type='submit'>Cancelar</Button>
            <Button type='submit'>Crear</Button>
          </CardFooter>
        </div>
      </form>
    </Form>
  )
}