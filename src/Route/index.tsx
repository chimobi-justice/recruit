import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Layout from '../Layout'
import Home from '../pages/Home'
import Search from '../pages/Search'
import AllJobs from '../pages/Jobs/allJobs'
import SingleJobDetails from '../pages/Jobs/singleJob'
import JobCategories from '../pages/Home/components/Category/jobs'

const pageRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/jobs' element={<AllJobs />} />
      <Route path='/jobs/:id/overview' element={<SingleJobDetails />} />
      <Route path='/jobs/category/:category' element={<JobCategories />} />
    </Route>
  )
)

export default pageRoutes;