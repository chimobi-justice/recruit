import React from "react";
import type { MenuProps } from "antd";

type MenuItems = Required<MenuProps>['items'][number];

const getMenuItems = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItems[],
  type?: 'group',
): MenuItems => {
  return {
    label,
    key,
    icon,
    children,
    type
  } as MenuItems
};

export default getMenuItems;