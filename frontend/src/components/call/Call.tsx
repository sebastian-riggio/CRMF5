import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../ui/card'
import ApplicationStage from '../call/formCall/ApplicationStage'
import NegotationStage from '../call/formCall/NegotiationStage'
import ConcessionStage from '../call/formCall/ConcessionStage'
import JustificationStage from '../call/formCall/JustificationStage'
import ClosingStage from '../call/formCall/ClosingStage'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ConvocatoriaRegistro } from '@/interfaces/convocatoriaRegistro'
import { getOneConvocatoria } from '@/services/registroConvocatoria'
import { formatDate } from '@/lib/utils'

function Call () {
  const { id } = useParams()
  const [convocatoria, setConvocatoria] = useState<ConvocatoriaRegistro>()
  useEffect(() => {
    if (id) {
      getOneConvocatoria(id).then((response) => {
        setConvocatoria(response.data.convocatoria)
        console.log(response)
      })
    }
  }, [id])

  return (
    <div className='container mx-auto'>
      <Card className='mt-5 pb-5'>
        <CardHeader>
          <CardTitle>
            {convocatoria?.titulo}
          </CardTitle>
        </CardHeader>
        <div>
          {/* <Form> */}
          <CardContent className='p-0 flex flex-wrap '>
            <Accordion className='m-2 w-full  mt-8' type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='px-3'>DATOS GENERALES</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <h1 className='font-black'>Titulo:</h1>
                    <h2>{convocatoria?.titulo} </h2>
                    <h1 className='font-black'>Entidad-Convocante:</h1>
                    <h2>{convocatoria?.entidadConvocante}</h2>
                    <h1 className='font-black'>Departamento:</h1>
                    <h2>{convocatoria?.departamentoConvocante}</h2>
                    <h1 className='font-black'>Publicacíon-Oficial</h1>
                    <h2 className='text-blue-500 underline'>{convocatoria?.publicacionOficial}</h2>
                    <h1 className='font-black'>Convocatoria-Enlace</h1>
                    <h2 className='text-blue-500 underline'>{convocatoria?.convocatoriaEnlace}</h2>
                    <h1 className='font-black'>Temática</h1>
                    <h2>{convocatoria?.tematica}</h2>
                    <h1 className='font-black'>Lineas de Trabajo:</h1>
                    <h2>{convocatoria?.trabajoLineas}</h2>
                    <h1 className='font-black'>Entidades a las que se dirige:</h1>
                    <h2>{convocatoria?.dirigidoEntidades}</h2>
                    <h1 className='font-black'>Fecha-Inicio</h1>
                    <h2>{convocatoria?.fechaApertura ? formatDate(convocatoria?.fechaApertura) : 'N/A'}</h2>
                    <h1 className='font-black'>Fecha-Cierre</h1>
                    <h2>{convocatoria?.fechaCierre ? formatDate(convocatoria?.fechaCierre) : 'N/A'}</h2>
                    <h1 className='font-black'>Fecha-Resolución</h1>
                    <h2>{convocatoria?.fechaResolucion ? formatDate(convocatoria?.fechaResolucion) : 'N/A'}</h2>
                    <h1 className='font-black'>Fecha-Justificación</h1>
                    <h2>{convocatoria?.fechaJustificacion ? formatDate(convocatoria?.fechaJustificacion) : 'N/A'}</h2>
                    <h1 className='font-black'>Período de Ejecucíon</h1>
                    <h2>{convocatoria?.periodoEjecucion}</h2>
                    {/* <h1 className='font-black'>Auditoría</h1>
                    <h2>{convocatoria?.auditoria}</h2> */}
                    <h1 className='font-black'>Presupuesto</h1>
                    <h2>{convocatoria?.presupuesto}</h2>
                    {/* Llamar al endpoint de cargar archivos para traerlos */}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion className='m-2 w-full' type='single' collapsible>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='px-3 bg-solicitud'>ETAPA DE SOLICITUD</AccordionTrigger>
                <AccordionContent>
                  <ApplicationStage />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion className='m-2 w-full ' type='single' collapsible>
              <AccordionItem value='item-3'>
                <AccordionTrigger className='px-3 bg-negociacion'>ETAPA DE NEGOCIACIÓN</AccordionTrigger>
                <AccordionContent>
                  <NegotationStage />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion className='m-2 w-full' type='single' collapsible>
              <AccordionItem value='item-4'>
                <AccordionTrigger className='px-3 bg-otorgamiento'>ETAPA DE OTORGAMIENTO</AccordionTrigger>
                <AccordionContent>
                  <ConcessionStage />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion className='m-2 w-full' type='single' collapsible>
              <AccordionItem value='item-4'>
                <AccordionTrigger className='px-3 bg-justificacion'>ETAPA DE JUSTIFICACIÓN</AccordionTrigger>
                <AccordionContent>
                  <JustificationStage />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion className='m-2 w-full' type='single' collapsible>
              <AccordionItem value='item-4'>
                <AccordionTrigger className='px-3 bg-cierre'>ETAPA DE CIERRE</AccordionTrigger>
                <AccordionContent>
                  <ClosingStage />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </CardContent>
          {/*
          </Form> */}
        </div>

      </Card>
    </div>
  )
}

export default Call
