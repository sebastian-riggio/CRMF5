import { Link } from 'react-router-dom'
import MainNewCall from '../../components/call/MainNewCall'
import GoBack from '../../components/GoBack'

function NewCallsPage () {
  return (
    <>
      <div>
        <Link to='/allcalls'>
          <GoBack />
        </Link>
      </div>
      <MainNewCall />
    </>
  )
}

export default NewCallsPage
