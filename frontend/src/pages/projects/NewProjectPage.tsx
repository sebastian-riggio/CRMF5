import { Link } from 'react-router-dom'
import GoBack from '../../components/GoBack'
import ProyectForm from '../../components/project/ProyectForm'

function NewProjectPage () {
  return (
    <>
      <div>
        <Link to='http://localhost:5173/allprojects'>
          <GoBack />
        </Link>
      </div>
      <ProyectForm />
    </>
  )
}

export default NewProjectPage
