import { LoginForm } from '@/app/auth/login/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="w-full h-screen grid place-items-center bg-gray-100">
      <div className='bg-white flex flex-col justify-between pt-10  pb-0 rounded-lg border shadow-md'>
      <h1 className='text-center '>Login</h1>
      <LoginForm />
      <div className='border-t grid grid-cols-[auto,1fr] mt-5'>
        <Link 
        href={""}
        className=' p-3 border-r w-full text-center text-sm hover:underline text-[#007bff] '>Forgot Email or Password</Link>
        <Link 
        href={""}
        className=' p-3  w-full text-center text-sm hover:underline text-[#007bff] '>Create account</Link>
      </div>
      </div>
    </div>
  );
}
