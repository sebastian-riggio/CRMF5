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
import { Separator } from './ui/separator';
import { Form } from './ui/form';
import GeneralData from './ui/formCall/GeneralData';
import ApplicationStage from './ui/formCall/ApplicationStage';

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
        <Card className='m-2 container mx-auto'>
            <CardHeader>
                <CardTitle className='container mx-auto'>
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
                                        <AccordionTrigger className='m-2 container mx-auto'>DATOS GENERALES</AccordionTrigger>
                                        <AccordionContent>
                                            <div >
                                                <GeneralData />
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>

                            { /*   ETAPA DE SOLICITUD   */}
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className='m-2 container mx-auto'>ETAPA DE SOLICITUD</AccordionTrigger>
                                        <AccordionContent>
                                            <ApplicationStage/>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className='m-2 container mx-auto'>ETAPA DE NEGOCIACIÓN</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger className='m-2 container mx-auto'>ETAPA DE OTORGAMIENTO</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger className='m-2 container mx-auto'>ETAPA DE JUSTIFICACIÓN</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                            <Card className='m-2 w-full px-2 '>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger className='m-2 container mx-auto'>ETAPA DE CIERRE</AccordionTrigger>
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
