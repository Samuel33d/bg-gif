'use server';

import { signIn } from '@/auth';
import { LoginCredentials } from '@/interfaces';

export async function authenticate(data: LoginCredentials) {
  try {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  } catch (e: any) {
    if (e.message.includes('Read')) {
      throw new Error(e.message.split('Read')[0].trim());
    }

    throw new Error('An error occurred');
  }
}
