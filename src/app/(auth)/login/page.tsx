'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {};

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
          Login to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
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
          onClick={onLogin}
          className='flex mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Login
        </button>
        <Link href='/register' className='underline'>
          You don't have an account?
        </Link>
      </div>
    </div>
  );
};
export default LoginPage;
