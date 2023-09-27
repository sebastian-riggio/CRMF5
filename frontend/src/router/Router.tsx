import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import FinancierPage from '../pages/financiers/FinancierPage'
import AllCallsPage from '../pages/calls/AllCalls/AllCallsPage'
import NewCallPage from '../pages/calls/NewCallPage'
import AllFinanciersPage from '../pages/financiers/AllFinanciersPage'
import NewFinancierPage from '../pages/financiers/NewFinancierPage'
import AllProjectsPage from '../pages/projects/AllProjects/AllProjectsPage'
import NewProjectPage from '../pages/projects/NewProjectPage'
import RegisterUserPage from '../pages/user/RegisterUserPage'
import NotFoundPage from '../pages/NotFoundPage'
import CallPage from '../pages/calls/CallPage'
import ProjectViewPage from '../pages/projects/ProjectViewPage'

const CrmRouter = (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/home' element={<HomePage />} />
    <Route path='/newproject' element={<NewProjectPage />} />
    <Route path='/allprojects' element={<AllProjectsPage />} />
    <Route path='/project/:id' element={<ProjectViewPage />} />
    <Route path='/allcalls' element={<AllCallsPage />} />
    <Route path='/newcall' element={<NewCallPage />} />
    <Route path='/call' element={<CallPage />} />
    <Route path='/newfinancier' element={<NewFinancierPage />} />
    <Route path='/allfinanciers' element={<AllFinanciersPage />} />
    <Route path='/financier' element={<FinancierPage />} />
    <Route path='/registeruser' element={<RegisterUserPage />} />
    <Route path='/notfound' element={<NotFoundPage />} />
  </Routes>
)

export default CrmRouter
