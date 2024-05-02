import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Layout from '../Layout'
import Home from '../pages/Home'
import Job from '../pages/Jobs'
import JobDetails from '../pages/Jobs/singleJob'
import Search from '../pages/Search'

const pageRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/jobs' element={<Job />} />
      <Route path='/jobs/:id/overview' element={<JobDetails />} />
    </Route>
  )
)

export default pageRoutes;