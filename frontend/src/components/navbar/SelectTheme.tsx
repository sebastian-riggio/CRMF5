import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue} from '../ui/select'

export function SelectTheme () {
  return (
    <Select>
      <SelectTrigger className='w-auto border-none p-0'>
        <SelectValue>         <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='0.8333333333333334' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-sun-moon'><path d='M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4' /><path d='M12 2v2' /><path d='M12 20v2' /><path d='m4.9 4.9 1.4 1.4' /><path d='m17.7 17.7 1.4 1.4' /><path d='M2 12h2' /><path d='M20 12h2' /><path d='m6.3 17.7-1.4 1.4' /><path d='m19.1 4.9-1.4 1.4' /></svg>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
