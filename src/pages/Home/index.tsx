import { Row, Typography, Grid } from "antd"
import Categories from "./components/Category"
import { JobCard, Skeleton } from "../../components"
import { useJobs } from "../../hooks"

const { Title } = Typography;

const { useBreakpoint } = Grid;

const Home = () => {
  const { jobs, isLoading, isSuccess } = useJobs('jobs', 10);

  const { lg } = useBreakpoint();

  const titleFontSize = lg ? '36px' : '24px';

  return (
    <section>
      <Categories />

      <div className="w-11/12 mx-auto pb-10">
        <div className="my-10">
          <Title level={1} style={{ fontSize: titleFontSize, color: 'rgba(156, 156, 255, 1)' }}>Explore <span className="text-blue-800">jobs</span></Title>
        </div>

        {isLoading && <Skeleton />}

        <Row>
          {jobs && isSuccess &&
            jobs?.map((job: any) => (
              <JobCard job={job} key={job?.id} />
            ))
          }
        </Row>
      </div>
    </section>
  )
}

export default Home;