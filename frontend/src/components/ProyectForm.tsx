import { useEffect } from 'react';
import { Textarea } from './ui/textarea';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '../lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../components/ui/command';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from './ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Separator } from './ui/separator';
import { useForm } from 'react-hook-form';
import { AxiosResponse } from 'axios';
import { createProject} from '../services/proyectos';
import { toast } from './ui/use-toast';
import { ToastAction } from '@radix-ui/react-toast';


const departamento = [
  { label: 'Factoría F5 - People and culture', value: 'Factoría F5-People and culture' },
  { label: 'Factoría F5 - Admin, contabilidad y finanzas', value: 'Factoría F5-Admin, contabilidad y finanza' },
  { label: 'Factoría F5- Oficina soporte proyectos y calidad', value: 'Factoría F5-Oficina soporte proyectos y calida' },
  { label: 'Factoría F5 -  Dirección general', value: 'Factoría F5-Dirección general' },
  { label: 'Otro', value: 'Otro' },
] as const;

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

function ProyectForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  async function onSubmit(data: AccountFormValues) {
    try {
      const response: AxiosResponse = await createProject(data);
      console.log(response)
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }

    toast({
      title: 'Crea un nuevo usurario para Factoria F5:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  useEffect(() => {}, []);
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>Nuevo Proyecto</CardTitle>
          Vamos a dar comienzo a un nuevo proyecto. ¡Por favor asegurate de que
          todos los campos estén completos!
      
      </CardHeader>

      <Separator />
      <div className="container mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent>
              <FormField
                control={form.control}
                name="proyecto-nombre"
                render={({ field }) => (
                  <FormItem className="md:flex-wrap">
                    <div className="my-2 flex flex-wrap">
                      <FormLabel>Nombre del Proyecto</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre del proyecto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="centro-gestor"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <div className="my-2 flex justifiy flex-wrap md:flex-nowrap">
                      <FormLabel>Centro gestor</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                'w-[200px] justify-between',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value
                                ? departamento.find(
                                    (departamento) =>
                                      departamento.value === field.value
                                  )?.label
                                : 'Selecciona el departamento de Factoria F5'}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Buscar departamento" />
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
                                      'centro-gestor',
                                      departamento.value
                                    );
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
                name="responsable"
                render={({ field }) => (
                  <FormItem className="md:flex-wrap">
                    <div className="my-2 flex flex-wrap">
                      <FormLabel>Responsable F5</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Persona responsable Factoria F5"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="proyecto-duracion"
                render={({ field }) => (
                  <FormItem className="md:flex-wrap">
                    <div className="my-2 flex flex-wrap">
                      <FormLabel>Meses Duración</FormLabel>
                      <FormControl>
                        <Input placeholder="Meses Duración" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="proyecto-presupuesto"
                render={({ field }) => (
                  <FormItem className="md:flex-wrap">
                    <div className="my-2 flex flex-wrap">
                      <FormLabel>Presupuesto proyecto</FormLabel>
                      <FormControl>
                        <Input placeholder="Presupuesto Proyecto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="factoria-presupuesto"
                render={({ field }) => (
                  <FormItem className="md:flex-wrap">
                    <div className="my-2 flex flex-wrap">
                      <FormLabel>Presupuesto Factoria F5</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Presupuesto Factoria F5"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Cancelar</Button>
              <Button type="submit">Crear Proyecto</Button>
            </CardFooter>
          </form>
        </Form>
      </div>
    </Card>
  );
}
export default ProyectForm;
