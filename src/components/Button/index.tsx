import React from "react"
import { Button as AntButton } from "antd"
import { IButton } from "../../types";

const Button: React.FunctionComponent<IButton> = ({
    type,
    htmlType,
    children,
    href,
    target,
    size,
    shape,
    disabled,
    onClick
}) => {
    return (
        <AntButton 
            type={type}
            htmlType={htmlType}
            href={href}
            target={target}
            size={size}
            shape={shape}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </AntButton>
    )
}

export default Button;