import type { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface BaseInputProps {
  className?: string;
  errors: FieldErrors<any>;
  isDisabled?: boolean;
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  placeholder: string
}
