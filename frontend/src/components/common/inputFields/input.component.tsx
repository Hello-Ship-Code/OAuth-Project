import { FC } from "react"
import clsx from 'clsx'

import { InputProps } from "./input.types"

export const InputComponent: FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  className,
  onChange,
  size,
  variant,
  checked
}) => {
  if (type === 'checkbox') {
    return (
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          className={clsx('form-checkbox text-primary-600 border-neutral-300 rounded-md ', className)}
          onChange={onChange}
        />
        <span className="ml-2 text-neutral-600">{placeholder}</span>
      </label>
    );
  }

  // Default input behavior (text, password, etc.)
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      className={clsx('baseInputClass', size, variant, className)}
      onChange={onChange}
    />
  );
};