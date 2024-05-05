import { Link } from "react-router-dom"
import { Result } from "antd"
import { Button } from "../components"

const ErrorBoudary = () => {
  return (
    <Result
      status="500"
      title="Oops..."
      subTitle="Something went wrong. Please refresh or check your internet connection."
      extra={
        <Link to="/">
          <Button
            type="primary"
            htmlType="button"
          >
            Back Home
          </Button>
        </Link>
      }
    />)
}

export default ErrorBoudary;