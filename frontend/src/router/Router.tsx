import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import FinancierPage from '../pages/financiers/FinancierPage'
import AllCallsPage from '../pages/calls/AllCallsPage'
import NewCallPage from '../pages/calls/NewCallPage'
import AllFinanciersPage from '../pages/financiers/AllFinanciersPage'
import NewFinancierPage from '../pages/financiers/NewFinancierPage'
import AllProjectsPage from '../pages/projects/AllProjectsPage'
import NewProjectPage from '../pages/projects/NewProjectPage'

const CrmRouter = (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/newproject' element={<NewProjectPage />} />
    <Route path='/allprojects' element={<AllProjectsPage />} />
    <Route path='/allcalls' element={<AllCallsPage />} />
    <Route path='/newcall' element={<NewCallPage />} />
    <Route path='/newfinancier' element={<NewFinancierPage />} />
    <Route path='/allfinanciers' element={<AllFinanciersPage />} />
    <Route path='/financier' element={<FinancierPage />} />
  </Routes>
)

export default CrmRouter
