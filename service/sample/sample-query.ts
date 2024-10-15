import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { defHttp, defHttpOpt } from '@/utils/http/axios';
import { AxiosResponse } from 'axios';

enum Api {
  users = '/api/users',
}

export interface SampleUser {
  name: string;
  age: number;
}

// const httpUsers = async (): Promise<SampleUser[]> => {
//   const data = await defHttp.get<SampleUser[]>({
//     url: Api.users,

//   });
//   return data;
// }
const httpUsers = async (): Promise<SampleUser[]> => {
  const data = await defHttpOpt({
    requestOptions: {
      isReturnNativeResponse: true,
    }
  }).get<AxiosResponse<SampleUser[], any>>({
    url: Api.users,
  });
  return data.data;
}
export const useUsers = (): UseQueryResult<SampleUser[], Error> => {
  return useQuery<SampleUser[], Error>({
    queryKey: ['users'],
    queryFn: httpUsers,
    staleTime: 1000 * 60 * 1, // 1분 동안 캐시된 데이터를 사용
    select: (data: SampleUser[]): SampleUser[] => {
      // 데이터를 변환하는 로직을 여기에 작성합니다.
      // 예: 이름을 대문자로 변환
      return data.map(user => ({
        ...user,
        name: user.name.toUpperCase(),
      }));
    },
  });
};