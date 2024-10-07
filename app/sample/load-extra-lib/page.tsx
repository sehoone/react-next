"use client";
import Script from 'next/script';
import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // 스크립트가 로드된 후에 함수를 호출. 음 굳이 필요한가 싶음
    // const handleScriptLoad = () => {
    //   if (typeof window.callExtraLib === 'function') {
    //     window.callExtraLib();
    //   } else {
    //     console.error('callExtraLib is not defined');
    //   }
    // };

  }, []);

  const handleCallExtraLibFunction = () => {
    if (typeof window.callExtraLib === 'function') {
      /*
      브라우저 환경에서 <script> 태그를 통해 로드된 스크립트는 기본적으로 전역 스코프에 정의됨. 
      이는 브라우저의 기본 동작으로, 전역 스코프에 정의된 함수와 변수는 window 객체의 속성으로 접근할 수 있게 됨
      */
      window.callExtraLib(); // 외부 라이브러리에 정의된 함수 호출
    } else {
      console.error('callExtraLib is not defined');
    }
  }
  return (
    <div>
      {/* 파일 경로로 외부라이브러리 호출. public 경로가 디폴트 경로임 */}
      {/* beforeInteractive: 페이지가 인터랙티브 상태가 되기 전에 로드 */}
      {/* {<Script src="/libs/importantLib.js" strategy="beforeInteractive" />} */}

      {/* afterInteractive: 페이지가 인터랙티브 상태가 된 후에 로드 */}
      <Script src="/libs/extraLib.js" strategy="afterInteractive" />

      {/* lazyOnload: 페이지 로드가 완료된 후에 로드 */}
      {/* <Script src="/libs/optionalLib.js" strategy="lazyOnload" /> */}

      <h1>외부 라이브러리 파일 로드 및 함수 호출 처리</h1>
      <button onClick={handleCallExtraLibFunction} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Call Extra Lib function</button>
    </div>
  );
}