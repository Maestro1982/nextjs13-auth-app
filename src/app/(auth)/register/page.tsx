'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import { toast } from 'react-hot-toast';

const RegisterPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onRegister = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('/api/users/register', user);
      console.log('Registered', response.data);
      toast.success('Successfully registered');
      router.push('/login');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Image
          src='/assets/tailwind.jpg'
          alt='Nextjs Auth'
          width={50}
          height={50}
          className='mx-auto w-auto object-contain'
        />
        <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          {isLoading ? 'Processing...' : 'Create an account'}
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <label
          htmlFor='username'
          className='block text-md font-medium leading-6 text-gray-900'
        >
          username
        </label>
        <input
          type='text'
          id='username'
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className='block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />

        <label
          htmlFor='email'
          className='block text-md font-medium leading-6 text-gray-900 mt-1'
        >
          email
        </label>
        <input
          type='text'
          id='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className='block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />

        <label
          htmlFor='password'
          className='block text-md font-medium leading-6 text-gray-900 mt-1'
        >
          password
        </label>
        <input
          type='password'
          id='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className='block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />

        <button
          onClick={onRegister}
          className='flex mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          {buttonDisabled ? 'Can Not Register' : 'Register'}
        </button>
        <Link href='/login' className='underline'>
          Already an account?
        </Link>
      </div>
    </div>
  );
};
export default RegisterPage;
