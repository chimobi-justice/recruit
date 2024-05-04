import { Result } from "antd"

const NotFound = () => {
  return (
    <Result
      status="404"
      subTitle="Opps, try find your search."
    />
  )
}

export default NotFound;