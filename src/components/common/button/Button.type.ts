import { ReactNode } from "react";

export interface IButtonProps {
  color: ButtonColorsEnum;
  isOutlined?: boolean;
  icon?: ReactNode;
  text: string;
}

export enum ButtonColorsEnum {
  GREEN = "green",
  WHITE = "white",
}
