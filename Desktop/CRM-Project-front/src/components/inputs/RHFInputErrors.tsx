import { FC } from 'react';

import { FieldErrors } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface Props {
  name: string;
  errors: FieldErrors<any>;
}

export const RHFInputErrors: FC<Props> = ({ name, errors }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        return messages
          ? Object.entries(messages).map(([type, message]) => (
              <div className="relative" key={type}>
                <span className='absolute text-red-500 text-sm'>{message}</span>
              </div>
            ))[0]
          : null;
      }}
    />
  );
};
