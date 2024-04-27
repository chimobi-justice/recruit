import { RouterProvider } from 'react-router-dom'
import router from './Route/index.tsx'

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
