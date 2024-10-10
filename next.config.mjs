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
};

export default nextConfig;
