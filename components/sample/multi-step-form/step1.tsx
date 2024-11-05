// "use client";
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';

export default function Step1({ delta }: { delta: number }) {
  const { register, setValue, formState: { errors } } = useFormContext();

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const englishOnlyValue = value.replace(/[^a-zA-Z\s]/g, ''); // 영문과 공백만 남기고 제거
    setValue('lastName', englishOnlyValue); // react-hook-form의 setValue를 사용하여 값 설정
  };

  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-gray-900'>
        Personal Information
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Provide your personal details.
      </p>
      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
          <label
            htmlFor='firstName'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            First name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='firstName'
              {...register('firstName')}
              autoComplete='given-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
            />
            {errors.firstName?.message && (
              <p className='mt-2 text-sm text-red-400'>
                {String(errors.firstName.message)}
              </p>
            )}
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='lastName'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Last name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='lastName'
              {...register('lastName')}
              autoComplete='family-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
              onChange={handleLastNameChange}
            />
            {errors.lastName?.message && (
              <p className='mt-2 text-sm text-red-400'>
                {String(errors.lastName.message)}
              </p>
            )}
          </div>
        </div>

        <div className='sm:col-span-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email address
          </label>
          <div className='mt-2'>
            <input
              id='email'
              type='email'
              {...register('email')}
              autoComplete='email'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
            />
            {errors.email?.message && (
              <p className='mt-2 text-sm text-red-400'>
                {String(errors.email.message)}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}