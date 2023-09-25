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

function Call () {
  return (
    <div className='container mx-auto'>
      <Card className='mt-5 pb-5'>
        <CardHeader>
          <CardTitle>
            Título de prueba
            {/* Aca hay que traer el titulo de la convocatoria */}
          </CardTitle>
        </CardHeader>

        <div>
          <Form>

            <CardContent className='p-0 flex flex-wrap '>
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

              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-2'>
                  <AccordionTrigger className='px-3'>ETAPA DE SOLICITUD</AccordionTrigger>
                  <AccordionContent>
                    <ApplicationStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-3'>
                  <AccordionTrigger className='px-3'>ETAPA DE NEGOCIACIÓN</AccordionTrigger>
                  <AccordionContent>
                    <NegotationStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-4'>
                  <AccordionTrigger className='px-3'>ETAPA DE OTORGAMIENTO</AccordionTrigger>
                  <AccordionContent>
                    <ConcessionStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-4'>
                  <AccordionTrigger className='px-3'>ETAPA DE JUSTIFICACIÓN</AccordionTrigger>
                  <AccordionContent>
                    <JustificationStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion className='m-2 w-full' type='single' collapsible>
                <AccordionItem value='item-4'>
                  <AccordionTrigger className='px-3'>ETAPA DE CIERRE</AccordionTrigger>
                  <AccordionContent>
                    <ClosingStage />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </CardContent>

          </Form>
        </div>

      </Card>
    </div>
  )
}

export default Call
