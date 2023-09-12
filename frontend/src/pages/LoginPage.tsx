import Isologo from '@/components/Isologo'
import { LoginTab } from '@/components/LoginTab'

function LoginPage () {
  return (
    <div className='min-h-screen md:flex justify-center items-center bg-gray-100'>
      <div>
        <Isologo />
      </div>
      <div className='my-8 mr-8'>
        <LoginTab />
      </div>
    </div>
  )
}

export default LoginPage
