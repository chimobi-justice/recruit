import { FunctionComponent } from "react"
import { Avatar as AntAvatar } from "antd"
import { IAvatar } from "../../types"

const Avatar: FunctionComponent<IAvatar> = ({
  size,
  shape,
  alt,
  icon,
  src
}) => {
  return (
    <AntAvatar
      size={size}
      shape={shape}
      alt={alt}
      icon={icon}
      src={src}
    />
  )
}

export default Avatar; 