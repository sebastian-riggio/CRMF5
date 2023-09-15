import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import accountFormSchema from './accountFormSchema';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { Textarea } from './ui/textarea';
import { toast } from '../components/ui/use-toast';

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    // name: "Your name",
    // dob: new Date("2023-01-23"),
}

function Call() {
    const form = useForm<AccountFormValues>({
        resolver: zodResolver(accountFormSchema),
        defaultValues
    })

    function onSubmit(data: AccountFormValues) {
        toast({
            title: 'Crea un nuevo usurario para Factoria F5:',
            description: (
                <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
                </pre>
            )
        })
    }
    // SOLO PARA TEST
    // Genera un valor aleatorio para la temática 
    const contenidoAleatorio = generarContenidoAleatorio();

    function generarContenidoAleatorio() {
        const contenidos = ['Contenido 1', 'Contenido 2', 'Contenido 3', 'Contenido 4', 'Contenido 5']; 
        const indiceAleatorio = Math.floor(Math.random() * contenidos.length);
        return contenidos[indiceAleatorio];
    }

    return (
        <Card className='m-2 md:m-4 lg:m-8 xl:m-15'>
            <CardHeader>
                <CardTitle>
                    Título de prueba
                    {/* Aqui hay que traer el titulo de la convocatoria */}
                </CardTitle>
            </CardHeader>
            <Separator />
            <div className='container mx-auto'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <CardContent className='flex flex-wrap -mx-10'>
                            <Card className='m-2 w-full px-2 '>
{ /*   DATOS GENERALES   */}                                
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>DATOS GENERALES</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap'>

                                                <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    
                                                        <div className='my-2'>
                                                            <FormLabel className='mb-2'>Temática</FormLabel>
                                                            <FormControl>
                                                                <Input disabled value={contenidoAleatorio} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </div>
                                                    </FormItem>

                                                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                        <div className='my-2'>
                                                            <FormLabel className='mb-2'>Entidad convocante</FormLabel>
                                                            <FormControl>
                                                                <Input disabled value={contenidoAleatorio} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </div>
                                                    </FormItem>
                                            
                                            
                                                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                        <div className='my-2'>
                                                            <FormLabel className='mb-2'>Departamento o centro gestor</FormLabel>
                                                            <FormControl>
                                                            <Input disabled value={contenidoAleatorio} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </div>
                                                    </FormItem>
                                            
                                                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                        <div className='my-2'>
                                                            <FormLabel className='mb-2'>Enlace a publicación oficial</FormLabel>
                                                            <FormControl>
                                                            <Input disabled value={contenidoAleatorio} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </div>
                                                    </FormItem>
                                           
                                                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                        <div className='my-2'>
                                                            <FormLabel className='mb-2'>Enlace a bases de convocatoria</FormLabel>
                                                            <FormControl>
                                                            <Input disabled value={contenidoAleatorio} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </div>
                                                    </FormItem>
                                           
                                                    <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2'>Líneas específicas de trabajo</FormLabel>
                                                    <FormControl>
                                                        <Textarea disabled value={contenidoAleatorio} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                          
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2'>Entidades a la que se dirige</FormLabel>
                                                    <FormControl>
                                                        <Input disabled value={contenidoAleatorio} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                                </FormItem>
                                          
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2 flex'>
                                                    <div>
                                                        <FormLabel className='mb-2'>Auditoría externa obligatoria</FormLabel>
                                                    </div>
                                                    <div>
                                                        <FormControl>
                                                            <Switch disabled />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                     
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2 md:mb-0'>Fecha de apertura</FormLabel>
                                                    <FormControl>
                                                        <div className='relative'>
                                                            <Input
                                                                className='md:pr-8' disabled value={contenidoAleatorio}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                                </FormItem>
                                       
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2 md:mb-0'>Fecha de cierre</FormLabel>
                                                    <FormControl>
                                                        <div className='relative'>
                                                            <Input
                                                                className='md:pr-8' disabled value={contenidoAleatorio}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                                </FormItem>
                                        
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2 md:mb-0'>Fecha limite de resolución</FormLabel>
                                                    <FormControl>
                                                        <div className='relative'>
                                                            <Input
                                                                className='md:pr-8' disabled value={contenidoAleatorio}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                            
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2'>Período máximo de ejecución</FormLabel>
                                                    <FormControl>
                                                        <Input disabled value={contenidoAleatorio} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                            
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2 md:mb-0'>Fecha limite de justificación</FormLabel>
                                                    <FormControl>
                                                        <div className='relative'>
                                                            <Input
                                                                className='md:pr-8' disabled value={contenidoAleatorio}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                            
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2'>Presupuesto máximo solicitable</FormLabel>
                                                    <FormControl>
                                                        <Input disabled value={contenidoAleatorio} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                            
                                            <FormItem className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                <div className='my-2'>
                                                    <FormLabel className='mb-2'>Información de interés</FormLabel>
                                                    <FormControl>
                                                        <Textarea disabled value={contenidoAleatorio} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                           
                                            <FormItem className='w-1/2 px-4 mb-4'>
                                                <FormLabel className='mb-2'>Información de interés</FormLabel>
                                                <FormControl>
                                                    <Input disabled value={contenidoAleatorio} />
                                                    {/* {showPDF && (
                                                    <div>
                                                        <button onClick={descargarPDF}>Descargar PDF</button>
                                                    </div>
                                                )} */}
                                                </FormControl>
                                                </FormItem>
                                            
                                            <FormItem className='w-1/2 px-4 mb-4'>
                                                <FormLabel className='mb-2'>Información de interés</FormLabel>
                                                <FormControl>
                                                    <Input disabled value={contenidoAleatorio} />
                                                    {/* {showPDF && (
                                                    <div>
                                                        <button onClick={descargarPDF}>Descargar PDF</button>
                                                    </div>
                                                )} */}
                                                </FormControl>
                                                </FormItem>
                                            
                                            <FormItem className='w-1/2 px-4 mb-4'>
                                                <FormLabel className='mb-2'>Información de interés</FormLabel>
                                                <FormControl>
                                                    <Input disabled value={contenidoAleatorio} />
                                                    {/* {showPDF && (
                                                    <div>
                                                        <button onClick={descargarPDF}>Descargar PDF</button>
                                                    </div>
                                                )} */}
                                                </FormControl>
                                                </FormItem>
                                      
                                            <FormItem className='w-1/2 px-4 mb-4'>
                                                <FormLabel className='mb-2'>Información de interés</FormLabel>
                                                <FormControl>
                                                    <Input disabled value={contenidoAleatorio} />
                                                    {/* {showPDF && (
                                                    <div>
                                                        <button onClick={descargarPDF}>Descargar PDF</button>
                                                    </div>
                                                )} */}
                                                </FormControl>
                                                </FormItem>
                                            </div>

                                    </AccordionContent>
                                </AccordionItem>
                                </Accordion>
                            </Card>

{ /*   ETAPA DE SOLICITUD   */} 
                            <Card className='m-2 w-full px-2 '>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>ETAPA DE SOLICITUD</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            </Card>
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>ETAPA DE NEGOCIACIÓN</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>ETAPA DE OTORGAMIENTO</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>ETAPA DE JUSTIFICACIÓN</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>ETAPA DE CIERRE</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>          
                        </CardContent>
                    </form>
                </Form>
            </div>
        </Card>
    )
}

export default Call
