import { useContext, useEffect } from "react"
import { Row, Typography } from "antd"
import Categories from "./components/Category"
import { JobCard, Skeleton } from "../../components"
import { JobContext } from "../../context/jobContext"

const { Title } = Typography;

const Home = () => {
  const { jobs, isLoading, isError, setLimit } = useContext(JobContext);

  useEffect(() => {
    setLimit(10)
  }, [setLimit])

  return (
    <section>
      <Categories />

      <div className="w-11/12 mx-auto pb-10">
        <div className="my-10">
          <Title level={1} style={{ color: 'rgba(156, 156, 255, 1)' }}>Explore <span className="text-blue-800">jobs</span></Title>
        </div>

        {isLoading && <Skeleton />}

        {isError && console.log('Opps something went wrong')}

        <Row>
          {
            jobs?.map((job) => (
              <JobCard job={job} key={job?.id}/>
            ))
          }
        </Row>
      </div>
    </section>
  )
}

export default Home;