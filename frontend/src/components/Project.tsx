import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import AccountFormSchema from './accountFormSchema'
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

type AccountFormValues = z.infer<typeof AccountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

function Project () {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(AccountFormSchema),
    defaultValues
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
                <GeneralProject />
              </div>
            </form>
          </Form>
        </Card>
      </CardContent>
      <Card className='m-2 w-full px-2 mt-8 '>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='m-2 container mx-auto'>CONVOCATORIAS APLICADAS </AccordionTrigger>
            <AccordionContent>
              <CallAndProject />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </>
  )
}

export default Project
