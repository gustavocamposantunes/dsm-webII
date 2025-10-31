/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister, FieldErrors, RegisterOptions } from "react-hook-form";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  helperText: string;
  className?: string;
  rows?: number;
  validation?: RegisterOptions;
}

export default function FormInput({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
  helperText,
  className = "mb-4",
  rows = 4,
  validation,
}: FormInputProps) {
  const error = errors[id];

  return (
    <div className={className}>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
          id={id}
          placeholder={placeholder}
          rows={rows}
          {...register(id, validation)}
        />
      ) : (
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
        />
      )}
      {error && (
        <p className="text-red-500 text-xs italic mt-1">
          {error.message as string}
        </p>
      )}
      {!error && (
        <p className="text-gray-500 text-xs mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
}
