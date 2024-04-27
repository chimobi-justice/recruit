import React from "react"
import { Modal as AntModal } from "antd"
import { IModal } from "../../types"

const Modal: React.FunctionComponent<IModal> = ({title, open, onOk, onCancel, message}) => {
    return (
        <AntModal
            title={title}
            open={open}
            onOk={onOk}
            onCancel={onCancel}
        >
            {message}
        </AntModal>
    )
}

export default Modal;