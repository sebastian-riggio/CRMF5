import { Link } from 'react-router-dom'
import Call from '../../components/call/Call'
import GoBack from '../../components/GoBack'

function CallPage () {
  return (
    <>
      <div>
        <Link to='http://localhost:5173/allcalls'>
          <GoBack />
        </Link>
      </div>
      <Call />
    </>
  )
}

export default CallPage
