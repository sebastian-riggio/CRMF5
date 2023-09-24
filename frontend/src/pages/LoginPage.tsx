import Isologo from '../components/Isologo'
import { LoginTab } from '../components/LoginTab'

function LoginPage () {
  return (
    <div>
      <div className='min-h-screen md:flex justify-center items-center bg-gray-100'>
        <div className='md:mr-5'>
          <Isologo />
        </div>
        <div className='md:ml-5'>
          <LoginTab />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
