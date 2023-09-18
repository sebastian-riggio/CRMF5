import { FormItem, FormLabel, FormControl, FormMessage } from '../form';
import { Input } from '../input';
import { Textarea } from '../textarea';
import { Switch } from '../switch'
import { CalendarIcon } from '@radix-ui/react-icons';


export interface FormSectionProps {
    title: string;
    label?: string;
    inputType?: string;
    isDisabled?: boolean;
    inputPlaceholder?: string;
    isTextarea?: boolean;
    isSwitch?: boolean;
    showCalendarIcon?: boolean;
    pdfUrl?: string;
}

function FormSectionData({ title, inputPlaceholder, isTextarea = false, isSwitch = false, showCalendarIcon = false, pdfUrl }: FormSectionProps) {
    return (
        <div className='flex flex-wrap mx-6'>
            <FormItem className='w-full'>
                <div className='my-3'>
                    <FormLabel className='mb-2'>{title}</FormLabel>
                    <FormControl>
                        {isTextarea ? (
                            <Textarea />
                        ) : isSwitch ? (
                            <Switch  />
                        ) : (
                            <div className='relative'>
                                <Input placeholder={inputPlaceholder} />
                                {showCalendarIcon && (
                                    <CalendarIcon className='absolute right-2 top-1/2 transform -translate-y-1/2' />
                                )}
                                {pdfUrl && (
                                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
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
    );
}

export default FormSectionData;
