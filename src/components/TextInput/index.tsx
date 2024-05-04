import { FunctionComponent } from "react"
import { Input as AntInput } from "antd"
import { IInput } from "../../types"

const Input: FunctionComponent<IInput> = ({
  type,
  name,
  value,
  size,
  placeholder,
  prefix,
  className,
  onChange,
}) => {
  return (
    <AntInput
      type={type}
      name={name}
      value={value}
      size={size}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      prefix={prefix}
    />
  )
}

export default Input;