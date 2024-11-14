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
  basePath: process.env.BASE_PATH || '',
  productionBrowserSourceMaps: process.env.BROUSER_SOURCE_MAPS, // 브라우저 소스맵 설정. 기본은 false. 빌드된 코드와 원본 소스 코드 간의 매핑 정보를 제공하는 파일
};

export default nextConfig;
