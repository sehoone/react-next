export class Service<
  RequestBody,
  ResponseBody,
> {
  readonly baseQueryKeys?: (keyof RequestBody)[];
  readonly serviceCode: string;
  readonly serviceType: string;

  constructor(config: ServiceConfig<RequestBody>) {
    const { queryKeys, serviceCode, serviceType } = config;

    this.baseQueryKeys = queryKeys;
    this.serviceCode = serviceCode;
    this.serviceType = serviceType;
  }
  private createQueryKey(payload?: CommonRequestData<RequestBody>) {
    const { baseQueryKeys, serviceCode } = this;
    const defaults = [serviceCode];
    if (!baseQueryKeys) {
      return defaults;
    }
    const extractedKeys = baseQueryKeys
      .map((key) => payload?.dataBody?.[key])
      .filter((key) => key !== undefined) as (keyof RequestBody)[];
    return [...defaults, ...extractedKeys];
  }
  private createMutationFunction() {
    return async (body?: RequestBody) => {
      const endpoint = '';
      const requestData = this.formatPayload(body);

      const response = await apiclient.post<CommonResponseData<ResponseBody>>(
        endpoint,
        requestData,
      );
      return response.data;
    }
  }
  formatPayload(
    data?: RequestBody,
    ricInptRootInfo: RIC_INPT_ROOT_INFO = {},
    dataHeader: CommonRequestDataHeader = {
      channelGbn: 'DX',
      language: 'ko',
      subChannel: '51',
    }
  ): CommonRequestData<RequestBody> | null {
    const { serviceCode, serviceType } = this;

    // SSR render
    // if (lisBrowser()) {
    //   return null;
    // }

    return {
      dataBody: {
        ...data,
        ricInptRootInfo: {
          ...ricInptRootInfo,
          serviceCode,
          serviceType,
          webUri: window.location?.pathname,
          dataHeader: {
            ...dataHeader,
            trxcd: serviceCode,
          },
        } as CommonRequestData,
      },
    };
  }
  queryOptions(body?: RequestBody) {
    const requestData = this.formatPayload(body);

    const queryFn = this.createQueryFunction(requestData ?? undefined);
    const queryKey = this.createQueryKey(requestData ?? undefined);

    return { queryFn, queryKey };
  }

  mutationOptions() {
    const mutationFn = this.createMutationFunction();

    return { mutationFn };
  }
}