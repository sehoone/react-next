import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';

export default function Step2({ delta }: { delta: number }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-gray-900'>
        Address
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Address where you can receive mail.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
          <label
            htmlFor='country'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Country
          </label>
          <div className='mt-2'>
            <select
              id='country'
              {...register('country')}
              autoComplete='country-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            {errors.country?.message && (
              <p className='mt-2 text-sm text-red-400'>
                {String(errors.country.message)}
              </p>
            )}
          </div>
        </div>

        <div className='col-span-full'>
          <label
            htmlFor='street'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Street address
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='street'
              {...register('street')}
              autoComplete='street-address'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
            />
            {errors.street?.message && (
              <p className='mt-2 text-sm text-red-400'>
                {String(errors.street.message)}
              </p>
            )}
          </div>
        </div>

        <div className='sm:col-span-2 sm:col-start-1'>
          <label
            htmlFor='city'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            City
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='city'
              {...register('city')}
              autoComplete='address-level2'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
            />
            {errors.city?.message && (
              <p className='mt-2 text-sm text-red-400'>
                {String(errors.city.message)}
              </p>
            )}
          </div>
        </div>

        <div className='sm:col-span-2'>
          <label
            htmlFor='state'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            State / Province
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='state'
              {...register('state')}
              autoComplete='address-level1'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
            />
            {errors.state?.message && (
              <p className='mt-2 text-sm text-red-400'>
                {String(errors.state.message)}
              </p>
            )}
          </div>
        </div>

        <div className='sm:col-span-2'>
          <label
            htmlFor='zip'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            ZIP / Postal code
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='zip'
              {...register('zip')}
              autoComplete='postal-code'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
            />
            {errors.zip?.message && (
              <p className='mt-2 text-sm text-red-400'>
                {String(errors.zip.message)}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}