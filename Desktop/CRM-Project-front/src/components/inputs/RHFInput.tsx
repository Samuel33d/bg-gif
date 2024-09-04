import { HTMLInputTypeAttribute } from 'react';
import { BaseInputProps } from '@/interfaces/inputs';
import { RHFInputErrors } from '@/components/inputs/RHFInputErrors';

interface Props extends BaseInputProps {
  type: HTMLInputTypeAttribute;
}

export const RHFInput = ({
  type,
  isDisabled,
  name,
  errors,
  register,
  placeholder,
}: Props) => {
  return (
    <div>
      <input
        type={type}
        disabled={isDisabled}
        {...register(name)}
        placeholder={placeholder}
      />

      {Boolean(errors[name]) && <RHFInputErrors name={name} errors={errors} />}
    </div>
  );
};
