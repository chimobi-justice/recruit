import dayjs from "dayjs"
import relatimeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relatimeTime);

const formatDate = (date: any) => {
  return dayjs(date).fromNow();
}

export default formatDate;