import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'

export function SearchInput () {
  const [searchText, setSearchText] = useState<string>('')

  const handleSearchClick = () => {
    // ACA HACER LA ACCION PARA ENVIAR UNA SOLICITUD DE BUSQUEDA O MOSTRAR RESULTADOS EN FUNCION DEL searchText
    console.log(`Realizando búsqueda para: ${searchText}`)
  }

  return (
    <div className='relative'>
      <Input
        type='search'
        placeholder='Search...'
        className='pr-8'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div
        className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
        onClick={handleSearchClick}
      >
        <Search className='w-5 h-5 text-gray-400' />
      </div>
    </div>
  )
}

export default SearchInput
