import { FormItem, FormLabel, FormControl, FormMessage } from '../../ui/form'
import { Input } from '../../ui/input'
import { Textarea } from '../../ui/textarea'
import { Switch } from '../../ui/switch'

export interface FormSectionProps {
    title: string;
    label?: string;
    inputType?: string;
    isDisabled?: boolean;
    inputPlaceholder?: string;
    isTextarea?: boolean;
    isSwitch?: boolean;
    pdfUrl?: string;
}

function FormSectionData ({ title, inputPlaceholder, isTextarea = false, isSwitch = false, pdfUrl }: FormSectionProps) {
  return (
    <div className='flex flex-wrap mx-6'>
      <FormItem className='w-full'>
        <div className='my-3'>
          <FormLabel className='mb-2'>{title}</FormLabel>
          <FormControl>
            {isTextarea
              ? (
                <Textarea />
                )
              : isSwitch
                ? (
                  <Switch />
                  )
                : (
                  <div className='relative'>
                    <Input placeholder={inputPlaceholder} />
                    {pdfUrl && (
                      <a href={pdfUrl} target='_blank' rel='noopener noreferrer'>
                        Ver o Descargar PDF
                      </a>
                    )}
                  </div>
                  )}
          </FormControl>
          <FormMessage />
        </div>
      </FormItem>
    </div>
  )
}

export default FormSectionData
