import { ChangeEventHandler } from "react";

export interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  variant?: "default" | "glitch";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
