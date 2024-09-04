'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import { authenticate } from '@/actions';
import { RHFInput } from '@/components/inputs/RHFInput';

interface IForm {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),
});

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>({
    criteriaMode: 'all',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      await authenticate({
        email: data.email,
        password: data.password,
      });
    } catch (e: any) {
      alert(e.message.split('Error')[0].trim());
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 px-10">
      <label htmlFor="email"></label>
      <RHFInput
        className="bg-gray-200 rounded-md py-2 px-5 outline-blue-300 focus:bg-blue-100 text-black transition-all flex flex-col"
        type="email"
        errors={errors}
        name="email"
        register={register}
        placeholder='Email'
      />
      <RHFInput
        className="bg-gray-200 rounded-md py-2 px-5  outline-blue-300 focus:bg-blue-100 text-black transition-all flex flex-col"
        type="password"
        errors={errors}
        name="password"
        register={register}
        placeholder='Password'
      />
      <button type="submit" className="border-2 rounded-md py-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-colors w-[60%] self-center mt-4">
        Sign In
      </button>
      
    </form>
  );
};
