import React from "react"
import { Input as AntInput } from "antd"
import { IInput } from "../../types"

const Input: React.FunctionComponent<IInput> = ({
  type,
  name,
  value,
  size,
  placeholder,
  prefix,
  className,
  onChange,
  iconRender,
  style
}) => {
  if (type === "password") {
    return (
      <AntInput.Password
        type={type}
        name={name}
        value={value}
        size={size}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        prefix={prefix}
        iconRender={iconRender}
        style={style}
      />
    );
  }

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
      style={style}
    />
  )
}

export default Input;