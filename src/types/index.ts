import { ReactElement, ReactNode } from "react";

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

export interface JobCardInfinteProps {
  jobs: IJob[];
  isSuccess: boolean;
  hasNextPage: boolean; 
  isFetchingNextPage: boolean; 
  fetchNextPage: () => void;
}

export interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
}

export interface IAvatar {
  size: "small" | "large" | "default" | number;
  shape: "circle" | "square";
  alt?: string;
  icon?: ReactElement;
  src?: string;
}

export interface IButton {
  type: "primary" | "default";
  htmlType: "button" | "submit";
  children: ReactNode;
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
  prefix?: ReactElement;
  className?: string;
  onChange?: (e: any) => void;
}

export interface IModal {
  title: string;
  children?: ReactNode
  open: boolean;
  onOk: (e: any) => void;
  onCancel: (e: any) => void;
}
