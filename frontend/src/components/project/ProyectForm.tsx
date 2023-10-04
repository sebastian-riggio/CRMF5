import { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardFooter
} from '../ui/card'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

import { cn } from '../../lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '../ui/command'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '../ui/button'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { toast } from '../ui/use-toast'
import { Separator } from '../ui/separator'
import { useForm } from 'react-hook-form'
import { AxiosResponse } from 'axios'
import { createProject } from '../../services/proyectos'
import proyectPost from '../../interfaces/proyectPost'
import DatePicker from '../ui/DatePicker'

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

type AccountFormValues = z.infer<typeof proyectPost>;

function ProyectForm () {
  useEffect(() => {
    toast({
      title: '¡Esta por crear un nuevo proyecto!',
      description: 'Por favor asegurse de que todos los campos estén completos.'
    })
  }, [])
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(proyectPost)
  })

  async function onSubmit (data: AccountFormValues) {
    try {
      const response: AxiosResponse = await createProject(data)
      console.log(response)
    } catch (error) {
      console.error('Error al enviar la solicitud:', error)
    }

    toast({
      title: 'Proyecto registrado con éxito:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }
  useEffect(() => {}, [])
  return (
    <div className='container mx-auto mt-5'>
      <h1 className='text-4xl font-semibold mb-5'>Nuevo Proyecto</h1>
      <Card>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <CardContent>
                <FormField
                  control={form.control}
                  name='proyectoNombre'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Nombre del Proyecto</FormLabel>
                        <FormControl>
                          <Input placeholder='Nombre del proyecto' {...field} data-testid='project-input' />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Separator className='my-5' />
                <FormField
                  control={form.control}
                  name='centroGestor'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Centro gestor</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant='outline'
                                role='combobox'
                                className={cn(
                                  'w-[350px] justify-center',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                {field.value
                                  ? departamento.find(
                                    (departamento) =>
                                      departamento.value === field.value
                                  )?.label
                                  : 'Selecciona el departamento de Factoria F5'}
                                <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className='w-[200px] p-0'>
                            <Command>
                              <CommandInput placeholder='Buscar departamento' />
                              <CommandEmpty>
                                Departamento no encontrado
                              </CommandEmpty>
                              <CommandGroup>
                                {departamento.map((departamento) => (
                                  <CommandItem
                                    value={departamento.label}
                                    key={departamento.value}
                                    onSelect={() => {
                                      form.setValue(
                                        'centroGestor',
                                        departamento.value
                                      )
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
                  name='responsable'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Responsable de F5</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Persona responsable Factoria F5'
                            {...field} data-testid='responsable-input'
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Separator className='my-5' />
                <FormField
                  control={form.control}
                  name='proyectoDuracion'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Meses duración</FormLabel>
                        <FormControl>
                          <Input type='number' placeholder='Meses Duración' {...field} data-testid='month-input' />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='proyectoPresupuesto'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Presupuesto del proyecto</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='€'
                            {...field} data-testid='project-budget-input'
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='factoriaPresupuesto'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Presupuesto de Factoria F5</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='€'
                            {...field} data-testid='factoria-budget-input'
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Separator className='my-5' />
                <FormField
                  control={form.control}
                  name='fechaInicio'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Fecha de inicio </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <DatePicker
                                title=''
                                {...field} data-testid='date-input'
                              />
                            </FormControl>
                          </PopoverTrigger>
                        </Popover>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='fechaCierre'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex flex-col space-y-2 mt-5'>
                        <FormLabel className='text-sm text-gray-600'>Fecha de finalización </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <DatePicker
                                title=''
                                {...field} data-testid='finish-input'
                              />
                            </FormControl>
                          </PopoverTrigger>
                        </Popover>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className='flex justify-center space-x-6'>
                <Button type='submit' className='w-32 hover:bg-FF4700-dark text-white font-bold py-3 rounded'>Cancelar</Button>
                <Button type='submit' className='w-32 hover:bg-FF4700-dark text-white font-bold py-3 rounded'>Crear</Button>
              </CardFooter>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  )
}
export default ProyectForm
