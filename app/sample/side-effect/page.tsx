"use client"; // "use client"; 지시어를 사용하면 해당 파일이나 컴포넌트가 클라이언트 측에서만 실행되도록 보장. 이를 통해 서버 사이드 렌더링과 클라이언트 사이드 렌더링을 명확하게 구분하고, 클라이언트 전용 코드를 안전하게 작성
import React from 'react'
import EffectComponent from '@/components/sample/effect-component'

export default function page() {
  return (
    <>
      <EffectComponent />
    </>
  )
}
