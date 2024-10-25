/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // strict mode 설정. 기본은 true
  async rewrites() {
    return [
      {
        source: '/dummy-server/:path*',
        destination: 'http://localhost:5000/dummy-server/:path*', // 프록시할 서버의 주소
      },
    ];
  },
  transpilePackages: ['jotai-devtools'],
  output: 'export', // 빌드된 파일을 /out 디렉토리에 넣기 위한 설정
};

export default nextConfig;
