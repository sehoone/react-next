'use client';

import { FormProvider } from 'react-hook-form';
import { useMultiStepForm } from './useMultiStepForm';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

/**
 * form 컴포넌트를 기준으로 스텝을 나누고, form에 대한 데이터는 useForm 훅을 사용하여 관리하고, FormProvider를 사용하여 하위 컴포넌트에 전달.
 * 단계 정의: steps 배열을 사용하여 각 단계에서 수집할 필드를 정의.
 * 상태 관리: useState를 사용하여 현재 단계(currentStep)와 이전 단계(previousStep)를 관리.
 * 폼 상태 관리: useForm 훅을 사용하여 폼 상태를 관리하고, FormProvider를 사용하여 폼 상태를 하위 컴포넌트에 전달.
 * 단계 전환 함수: next와 prev 함수를 정의하여 사용자가 다음 단계와 이전 단계로 이동할 수 있도록 처리.
 * 폼 제출 함수: processForm 함수를 정의하여 모든 단계를 완료한 후 폼 데이터를 제출.
 */
export default function Form() {
  const {
    currentStep,
    delta,
    next,
    prev,
    steps,
    methods // useForm에서 반환된 전체 객체
  } = useMultiStepForm();

  return (
    <section className='absolute inset-0 flex flex-col justify-between p-24'>
      {/* steps 헤더 영역*/}
      <nav aria-label='Progress'>
        <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => (
            <li key={step.name} className='md:flex-1'>
              {currentStep > index ? (
                <div className='group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-sky-600 transition-colors '>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className='flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                  aria-current='step'
                >
                  <span className='text-sm font-medium text-sky-600'>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              ) : (
                <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-gray-500 transition-colors'>
                    {step.id}
                  </span>
                  <span className='text-sm font-medium'>{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form 폼영역 */}
      <FormProvider {...methods}>
        <form className='mt-12 py-12' onSubmit={methods.handleSubmit(() => { })}>
          {currentStep === 0 && <Step1 delta={delta} />}
          {currentStep === 1 && <Step2 delta={delta} />}
          {currentStep === 2 && <Step3 />}
        </form>
      </FormProvider>

      {/* Navigation 하단 푸터. 단계 이동처리*/}
      <div className='mt-8 pt-5'>
        <div className='flex justify-between'>
          <button
            type='button'
            onClick={prev}
            disabled={currentStep === 0}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>
          <button
            type='button'
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}