import { LoginTab } from '../components/LoginTab'

function LoginPage () {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='border-solid border-2 border-sky flex m-40 rounded-lg'>
        <div className='m-20 text-left'>
          <img
            src='src/assets/isologo-f5.png'
            width={700}
            alt='isologo-f5'
          />
          <h1 className='mt-4 text-4311B9 text-md font-semibold'>GESTIÓN DE CONVOCATORIAS Y SUBVENCIONES DE SOMOS F5
          </h1>
        </div>
        <div>
          <LoginTab />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
