import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import nextLogo from '/assets/nextjs-logo.jpeg'

export default function page() {
  return (
    <>
      <h1>The Blog</h1>
      {/**
       * Image 컴포넌트를 사용하여 이미지를 불러올 수 있다.
       * 자동 최적화: Image 컴포넌트는 이미지를 자동으로 최적화.
       * 레이지 로딩: 기본적으로 레이지 로딩을 지원하여 초기 로딩 시간을 줄임.
       * 반응형 이미지: 다양한 화면 크기에 맞춰 이미지를 자동으로 조정.
       * 레이아웃 시프트 방지: width와 height 속성을 지정하여 레이아웃 시프트를 방지.
       * 자동 포맷 변경: 브라우저가 지원하는 경우 WebP와 같은 최신 이미지 포맷으로 자동 변환.
       */}
      <Image src={nextLogo} alt="logo" priority className='w-32 h-32' width={128} height={128}></Image>
      <br></br>
      <Image src='/assets/nextjs-logo2.jpeg' alt="logo" priority className='w-32 h-32' width={128} height={128}></Image>
      <p>
        <Link href="/sample/dynamic-route/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/sample/dynamic-route/post-2">Post 2</Link>
      </p>
    </>
  )
}
