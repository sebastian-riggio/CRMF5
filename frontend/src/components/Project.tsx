import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import accountFormSchema from './accountFormSchema'
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
import { toast } from '../components/ui/use-toast'
import { Separator } from './ui/separator'
import { Form } from './ui/form'
import GeneralProject from './ui/project/GeneralProject'
import CallAndProject from './ui/project/CallAndProject'

type AccountFormValues = z.infer<typeof accountFormSchema>;

function Project () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema)
  })

  function onSubmit (data: AccountFormValues) {
    toast({
      title: 'Visualización de un proyecto',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <>
      <CardContent className='flex flex-wrap '>
        <Card className='m-2 container mx-auto'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <CardHeader>
                <CardTitle className='container mx-auto'> Título de prueba
                  {/* Aca hay que traer el titulo del proyecto */}
                </CardTitle>
              </CardHeader>
              <Separator />
              <div>
                {/* Datos general de un proyecto */}
                <GeneralProject />
              </div>
            </form>
          </Form>
        </Card>
      </CardContent>
      <Card className='m-2 w-full px-2 mt-8 '>
        <Accordion className='m-2 w-full' type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='px-3'>CONVOCATORIAS APLICADAS </AccordionTrigger>
            <AccordionContent>
              {/* Convocatorias que están asociadas a un proyecto */}
              <CallAndProject />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </>
  )
}

export default Project
