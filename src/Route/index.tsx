import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route 
} from 'react-router-dom'

import Layout from '../Layout'
import Job from '../pages/Jobs'
import JobDetails from '../pages/Jobs/singleJob'

const pageRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path='/jobs' element={<Job />} />
            <Route path='/jobs/:id/overview' element={<JobDetails />} />
        </Route>
    )
)

export default pageRoutes;