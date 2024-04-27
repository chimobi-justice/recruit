import { Result } from "antd"

const NotFound = () => {
    return (
        <Result
            status="404"
            subTitle="Sorry, we can't find your search."
      />
    )
}

export default NotFound;