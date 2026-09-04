export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'twGSiKoU2h1MfzyFdR68H',
    client_secret:
      'wS6FRbPIQo8fhZZHgh7KOVz_hgMJhwh0WhvWdR_zjuojNQLfYoowKJcnjoFR4jCFzwcbehwAjkw6AkWt7UTPAQ',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
