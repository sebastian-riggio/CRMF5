import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import accountFormSchema from './AccountFormSchema'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../components/ui/accordion'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from './ui/card'
import { Form } from './ui/form'
import GeneralData from './ui/formCall/GeneralData'
import ApplicationStage from './ui/formCall/ApplicationStage'
import NegotationStage from './ui/formCall/NegotiationStage'
import ConcessionStage from './ui/formCall/ ConcessionStage'
import JustificationStage from './ui/formCall/JustificationStage'
import ClosingStage from './ui/formCall/ClosingStage'

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

function Call () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues
  })

  function onSubmit (data: AccountFormValues) {
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
    <Card className='mt-5 pb-5 container mx-auto'>
      <CardHeader>
        <CardTitle>
          Título de prueba
          {/* Aca hay que traer el titulo de la convocatoria */}
        </CardTitle>
      </CardHeader>

      <div>
        <Form {...form}>
          <form className='space-y-8'>
            <CardContent className='p-0 flex flex-wrap '>

              {/*   DATOS GENERALES   */}
              {/* <Card className='m-2 w-full  mt-8'> */}
              <Accordion className='m-2 w-full  mt-8' type='single' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='px-3'>DATOS GENERALES</AccordionTrigger>
                  <AccordionContent>
                    <div>
                      <GeneralData />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion> 
              {/* </Card> */}

              {/*   ETAPA DE SOLICITUD   */}
              {/* <Card className='m-2 w-full'> */}
              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-2'>
                  <AccordionTrigger className='px-3'>ETAPA DE SOLICITUD</AccordionTrigger>
                  <AccordionContent>
                    <ApplicationStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/*   </Card> */}
              {/*  <Card className='m-2 w-full'> */}
              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-3'>
                  <AccordionTrigger className='px-3'>ETAPA DE NEGOCIACIÓN</AccordionTrigger>
                  <AccordionContent>
                    <NegotationStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* </Card> */}
              {/* <Card className='m-2 w-full'> */}
              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-4'>
                  <AccordionTrigger className='px-3'>ETAPA DE OTORGAMIENTO</AccordionTrigger>
                  <AccordionContent>
                    <ConcessionStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/*  </Card> */}
              {/* <Card className='m-2 w-full'> */}
              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-4'>
                  <AccordionTrigger className='px-3'>ETAPA DE JUSTIFICACIÓN</AccordionTrigger>
                  <AccordionContent>
                    <JustificationStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* </Card> */}
              {/* <Card className='m-2 w-full'> */}
              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-4'>
                  <AccordionTrigger className='px-3'>ETAPA DE CIERRE</AccordionTrigger>
                  <AccordionContent>
                    <ClosingStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* </Card> */}
            </CardContent>
          </form>
        </Form>
      </div>

    </Card>
  )
}

export default Call
