import React from "react";

export interface IJob {
    id: number;
    category: string;
    job_type: string;
    title: string;
    url: string;
    candidate_required_location: string;
    company_name?: string;
    company_logo?: string;
    description?: string | HTMLElement;
    publication_date?: string
    salary?: any
    tags?: string[];
}

export interface IData {
jobs: IJob[];
}

export interface IAvatar {
    size: "small" | "large" | "default" | number;
    shape: "circle" | "square";
    alt?: string;
    icon?: React.ReactElement;
    src?: string;
}

export interface IButton {
    type: "primary" | "default";
    htmlType: "button" | "submit";
    children: React.ReactNode;
    href?: string;
    target?: string;
    size?: "small" | "large";
    shape?: "default" | "round";
    disabled?: boolean;
    onClick?: (e: any) => void;
}

export interface IInput {
    type: string;
    name: string;
    value?: string | number;
    size: "small" | "middle" | "large";
    placeholder: string;
    prefix?: React.ReactElement;
    className?: string;
    onChange?: (e: any) => void;
    iconRender?: any;
    style?: React.CSSProperties;
  }

  
export interface IModal {
    title: string;
    message: string;
    open: boolean; 
    onOk: (e: any) => void;
    onCancel: (e: any) => void;
}
