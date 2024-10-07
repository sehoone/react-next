import React from 'react'

interface Params {
  slug: string;
}

// next js에서 [slug] 를 사용하여 동적 라우팅을 할 수 있다
export default function Page({ params }: { params: Params }) {
  return (
    <div>
      <h1>Page Slug: {params.slug}</h1>
    </div>
  );
}
