import { Link } from 'react-router-dom'
import Project from '../../components/project/Project'
import GoBack from '../../components/GoBack'

export default function ProjectViewPage () {
  return (
    <>
      <div>
        <Link to='http://localhost:5173/allprojects'>
          <GoBack />
        </Link>
      </div>
      <Project />
    </>
  )
}
