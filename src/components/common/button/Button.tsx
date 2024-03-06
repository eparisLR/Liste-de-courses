import { IButtonProps } from "./Button.type";

export default function Button({
  color,
  isOutlined = false,
  icon,
  text,
}: IButtonProps) {
  return (
    <button
      className={`bg-${color} p-2 text-sm rounded-lg`}
      type="button"
      data-cy="button"
    >
      {text}
      {icon}
    </button>
  );
}
