import { Service } from '@/service/service';
import type { api123_Request, api123_Response } from './types';

const serviceCode = 'RSRDE0105A06';
const serviceType = 'GU';

export const useRSRDE0105A06 = new Service<
  api123_Request,
  api123_Response
>({
  serviceCode,
  serviceType,
});