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
import { toast } from '../components/ui/use-toast';
import FormSectionData from '../components/ui/formCall/FormSectionData';
import { Separator } from './ui/separator';
import { Form } from './ui/form';

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

    return (
        <Card className='m-2 md:m-4 lg:mt-8 xl:mx-20'>
            <CardHeader>
                <CardTitle>
                    Título de prueba
                    {/* Aca hay que traer el titulo de la convocatoria */}
                </CardTitle>
            </CardHeader>

            <Separator />

            <div className='container mx-auto'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <CardContent className='flex flex-wrap '>

                            { /*   DATOS GENERALES   */}
                            <Card className='m-2 w-full px-2 mt-8 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>DATOS GENERALES</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap'>
                                                <div className='w-full md:w-full lg:w-1/2 xl:w-1/3 px-2'>
                                                    <FormSectionData title='Temática' inputPlaceholder='Temática' />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-2'>
                                                    <FormSectionData title='Entidad convocante' inputPlaceholder='Entidad convocante' />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title='Departamento o centro gestor' inputPlaceholder='Departamento o centro gestor' />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title='Enlace a publicación oficial' inputPlaceholder="https://www.ejemplo.com" />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title='Enlace a bases de convocatoria' inputPlaceholder="https://www.ejemplo.com" />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title="Líneas específicas de trabajo" isTextarea />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title='Entidades a las que se dirige' inputPlaceholder="Entidades a las que se dirige" />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title="Auditoría externa obligatoria" isSwitch />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData
                                                        title="Fecha de apertura"
                                                        inputPlaceholder="Selecciona una fecha"
                                                        showCalendarIcon
                                                    />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData
                                                        title="Fecha de cierre"
                                                        inputPlaceholder="Selecciona una fecha"
                                                        showCalendarIcon
                                                    />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData
                                                        title="Fecha limite de resolución"
                                                        inputPlaceholder="Selecciona una fecha"
                                                        showCalendarIcon
                                                    />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title='Período máximo de ejecución' inputPlaceholder="24 meses" />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title='Fecha límite de justificación' inputPlaceholder="24 meses" />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title='Presupuesto máximo solicitable' inputPlaceholder="20000 €" />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData title="Otra información" isTextarea />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData
                                                        title="Información de interés"
                                                        inputPlaceholder="Nombre del archivo PDF"
                                                        pdfUrl='URL_del_archivo_PDF'
                                                    />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData
                                                        title="Información de interés"
                                                        inputPlaceholder="Nombre del archivo PDF"
                                                        pdfUrl='URL_del_archivo_PDF'
                                                    />
                                                </div>
                                                <div className='w-full md:w-1/2 lg:w-1/3 px-2'>
                                                    <FormSectionData
                                                        title="Información de interés"
                                                        inputPlaceholder="Nombre del archivo PDF"
                                                        pdfUrl='URL_del_archivo_PDF'
                                                    />
                                                </div>
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
