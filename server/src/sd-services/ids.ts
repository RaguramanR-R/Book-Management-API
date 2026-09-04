// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj from './book_audit'; //_splitter_
import * as sd_6dAXYY3GeyowGbw0 from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_3Z2mNLwWV2jx53ML(bh, parentSpanInst);
          //appendnew_next_sd_Rp3jA2OtWDYtHCud
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Rp3jA2OtWDYtHCud');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_y8QbzsJ9kotvnRbR(bh, parentSpanInst);
          //appendnew_next_sd_enRit62Oxumkhsax
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_enRit62Oxumkhsax');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_hg253vjXo4PL8pIO(bh, parentSpanInst);
          //appendnew_next_sd_iKNUkc7p2TcHzocP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iKNUkc7p2TcHzocP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_9RULJJAPcSjY3JTy(bh, parentSpanInst);
          //appendnew_next_sd_w57NFF6jxlgrTNJg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_w57NFF6jxlgrTNJg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_vvTtqyBP3kN66Pja(bh, parentSpanInst);
          //appendnew_next_sd_7riKRuprFGlFu9ku
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7riKRuprFGlFu9ku');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_dlh81L3rBCliU4d0(bh, parentSpanInst);
          //appendnew_next_sd_eIVciXJZ5iNAyRXk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eIVciXJZ5iNAyRXk');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_E5dXyH52xuZZKohp(bh, parentSpanInst);
          //appendnew_next_sd_P2nrl5dNY4JtLNoY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_P2nrl5dNY4JtLNoY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_hg253vjXo4PL8pIO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hg253vjXo4PL8pIO',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FFUbR1EpyK9n3529(bh, parentSpanInst);
      //appendnew_next_sd_hg253vjXo4PL8pIO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hg253vjXo4PL8pIO',
        spanInst,
        'sd_hg253vjXo4PL8pIO'
      );
    }
  }

  async sd_FFUbR1EpyK9n3529(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FFUbR1EpyK9n3529',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_znMT3qJ9IFq1PKLD(bh, parentSpanInst);
      } else {
        bh = await this.sd_YS51OnRNmtdHtSSI(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FFUbR1EpyK9n3529',
        spanInst,
        'sd_FFUbR1EpyK9n3529'
      );
    }
  }

  async sd_znMT3qJ9IFq1PKLD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_znMT3qJ9IFq1PKLD',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CQnpG7C4tMAED9ws(bh, parentSpanInst);
      //appendnew_next_sd_znMT3qJ9IFq1PKLD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_znMT3qJ9IFq1PKLD',
        spanInst,
        'sd_znMT3qJ9IFq1PKLD'
      );
    }
  }

  async sd_CQnpG7C4tMAED9ws(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CQnpG7C4tMAED9ws',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JW4G8rdXlTvpKtsG(bh, parentSpanInst);
      //appendnew_next_sd_CQnpG7C4tMAED9ws
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CQnpG7C4tMAED9ws',
        spanInst,
        'sd_CQnpG7C4tMAED9ws'
      );
    }
  }

  async sd_JW4G8rdXlTvpKtsG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JW4G8rdXlTvpKtsG',
      parentSpanInst
    );
    try {
      const sd_6dAXYY3GeyowGbw0Instance: sd_6dAXYY3GeyowGbw0.idsutil =
        sd_6dAXYY3GeyowGbw0.idsutil.getInstance();
      let outputVariables =
        await sd_6dAXYY3GeyowGbw0Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CtUdVo3NIsjN3YUt(bh, parentSpanInst);
      //appendnew_next_sd_JW4G8rdXlTvpKtsG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JW4G8rdXlTvpKtsG',
        spanInst,
        'sd_JW4G8rdXlTvpKtsG'
      );
    }
  }

  async sd_CtUdVo3NIsjN3YUt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CtUdVo3NIsjN3YUt',
      parentSpanInst
    );
    try {
      const sd_6dAXYY3GeyowGbw0Instance: sd_6dAXYY3GeyowGbw0.idsutil =
        sd_6dAXYY3GeyowGbw0.idsutil.getInstance();
      let outputVariables =
        await sd_6dAXYY3GeyowGbw0Instance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oRLHexMkeLoyu6pq(bh, parentSpanInst);
      //appendnew_next_sd_CtUdVo3NIsjN3YUt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CtUdVo3NIsjN3YUt',
        spanInst,
        'sd_CtUdVo3NIsjN3YUt'
      );
    }
  }

  async sd_oRLHexMkeLoyu6pq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oRLHexMkeLoyu6pq',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_T6bSMX8IEhmb1zQP(bh, parentSpanInst);
      //appendnew_next_sd_oRLHexMkeLoyu6pq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oRLHexMkeLoyu6pq',
        spanInst,
        'sd_oRLHexMkeLoyu6pq'
      );
    }
  }

  async sd_T6bSMX8IEhmb1zQP(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T6bSMX8IEhmb1zQP');
    }
  }

  async sd_YS51OnRNmtdHtSSI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YS51OnRNmtdHtSSI',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AYvIBYj7IBQ072J2(bh, parentSpanInst);
      //appendnew_next_sd_YS51OnRNmtdHtSSI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YS51OnRNmtdHtSSI',
        spanInst,
        'sd_YS51OnRNmtdHtSSI'
      );
    }
  }

  async sd_AYvIBYj7IBQ072J2(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AYvIBYj7IBQ072J2');
    }
  }

  async sd_3Z2mNLwWV2jx53ML(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3Z2mNLwWV2jx53ML',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_K6Ys1DjxEwnaiZq5(bh, parentSpanInst);
      //appendnew_next_sd_3Z2mNLwWV2jx53ML
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3Z2mNLwWV2jx53ML',
        spanInst,
        'sd_3Z2mNLwWV2jx53ML'
      );
    }
  }

  async sd_K6Ys1DjxEwnaiZq5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K6Ys1DjxEwnaiZq5',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K6Ys1DjxEwnaiZq5',
        spanInst,
        'sd_K6Ys1DjxEwnaiZq5'
      );
    }
  }

  async sd_9RULJJAPcSjY3JTy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9RULJJAPcSjY3JTy',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xUmLakfLXO4oDC6U(bh, parentSpanInst);
      //appendnew_next_sd_9RULJJAPcSjY3JTy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9RULJJAPcSjY3JTy',
        spanInst,
        'sd_9RULJJAPcSjY3JTy'
      );
    }
  }

  async sd_xUmLakfLXO4oDC6U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xUmLakfLXO4oDC6U',
      parentSpanInst
    );
    try {
      const sd_6dAXYY3GeyowGbw0Instance: sd_6dAXYY3GeyowGbw0.idsutil =
        sd_6dAXYY3GeyowGbw0.idsutil.getInstance();
      let outputVariables =
        await sd_6dAXYY3GeyowGbw0Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_f5zQuKdHGFzGEcsq(bh, parentSpanInst);
      //appendnew_next_sd_xUmLakfLXO4oDC6U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xUmLakfLXO4oDC6U',
        spanInst,
        'sd_xUmLakfLXO4oDC6U'
      );
    }
  }

  async sd_f5zQuKdHGFzGEcsq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f5zQuKdHGFzGEcsq',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      console.log('99999999bh.local.userDetails', bh.local.userDetails);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Hovl1gSCYia3jdzM(bh, parentSpanInst);
      //appendnew_next_sd_f5zQuKdHGFzGEcsq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f5zQuKdHGFzGEcsq',
        spanInst,
        'sd_f5zQuKdHGFzGEcsq'
      );
    }
  }

  async sd_Hovl1gSCYia3jdzM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Hovl1gSCYia3jdzM',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_y40evJH7atyiQcNn(bh, parentSpanInst);
      //appendnew_next_sd_Hovl1gSCYia3jdzM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hovl1gSCYia3jdzM',
        spanInst,
        'sd_Hovl1gSCYia3jdzM'
      );
    }
  }

  async sd_y40evJH7atyiQcNn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y40evJH7atyiQcNn',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance: SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit =
        SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance.insertaudit(
          spanInst,
          'LOGIN',
          undefined,
          bh.local.userDetails.userInfo.sub.accountId
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A1gX9rHg7WvmbFAC(bh, parentSpanInst);
      //appendnew_next_sd_y40evJH7atyiQcNn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y40evJH7atyiQcNn',
        spanInst,
        'sd_y40evJH7atyiQcNn'
      );
    }
  }

  async sd_A1gX9rHg7WvmbFAC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A1gX9rHg7WvmbFAC',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ebX6k6Ze0NEShnVK(bh, parentSpanInst);
      } else {
        bh = await this.sd_Dy6hQiIazvSYhizy(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A1gX9rHg7WvmbFAC',
        spanInst,
        'sd_A1gX9rHg7WvmbFAC'
      );
    }
  }

  async sd_ebX6k6Ze0NEShnVK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ebX6k6Ze0NEShnVK',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SqZHR9AAiNqQ17RN(bh, parentSpanInst);
      //appendnew_next_sd_ebX6k6Ze0NEShnVK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ebX6k6Ze0NEShnVK',
        spanInst,
        'sd_ebX6k6Ze0NEShnVK'
      );
    }
  }

  async sd_SqZHR9AAiNqQ17RN(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SqZHR9AAiNqQ17RN');
    }
  }

  async sd_Dy6hQiIazvSYhizy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Dy6hQiIazvSYhizy',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kUzSPHTkgzTY2Tdk(bh, parentSpanInst);
      //appendnew_next_sd_Dy6hQiIazvSYhizy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dy6hQiIazvSYhizy',
        spanInst,
        'sd_Dy6hQiIazvSYhizy'
      );
    }
  }

  async sd_kUzSPHTkgzTY2Tdk(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kUzSPHTkgzTY2Tdk');
    }
  }

  async sd_vvTtqyBP3kN66Pja(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vvTtqyBP3kN66Pja',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_2snDUEqoA7uT1O3z(bh, parentSpanInst);
      //appendnew_next_sd_vvTtqyBP3kN66Pja
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vvTtqyBP3kN66Pja',
        spanInst,
        'sd_vvTtqyBP3kN66Pja'
      );
    }
  }

  async sd_2snDUEqoA7uT1O3z(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2snDUEqoA7uT1O3z');
    }
  }

  async sd_qycP6cBPCbkc5B5L(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qycP6cBPCbkc5B5L',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qycP6cBPCbkc5B5L
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qycP6cBPCbkc5B5L',
        spanInst,
        'sd_qycP6cBPCbkc5B5L'
      );
    }
  }

  async sd_dlh81L3rBCliU4d0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dlh81L3rBCliU4d0',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6r5gNjrFyqb02QW7(bh, parentSpanInst);
      //appendnew_next_sd_dlh81L3rBCliU4d0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dlh81L3rBCliU4d0',
        spanInst,
        'sd_dlh81L3rBCliU4d0'
      );
    }
  }

  async sd_6r5gNjrFyqb02QW7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6r5gNjrFyqb02QW7',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FPyMhI1szoi8sdr1(bh, parentSpanInst);
      //appendnew_next_sd_6r5gNjrFyqb02QW7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6r5gNjrFyqb02QW7',
        spanInst,
        'sd_6r5gNjrFyqb02QW7'
      );
    }
  }

  async sd_FPyMhI1szoi8sdr1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FPyMhI1szoi8sdr1',
      parentSpanInst
    );
    try {
      var session = bh.local.sessionData || null;
      var userId = null;

      if (session && session.data) {
        // Try userInfo.sub first
        if (session.data.userInfo && session.data.userInfo.sub) {
          userId = session.data.userInfo.sub;
        }
        // Fallback to username
        else if (session.data.userInfo && session.data.userInfo.username) {
          userId = session.data.userInfo.username;
        }
        // Fallback to userDetails
        else if (session.data.userDetails && session.data.userDetails.sub) {
          userId = session.data.userDetails.sub;
        }
      }

      bh.local.userId = userId;
      bh.local.response = {
        message: 'Successfully Deleted',
      };
      console.log('userId found:', bh.local.userId);
      console.log('1111111111111111', bh.local.session);
      console.log(
        '22222222222222222222222',
        bh.local?.session?.data?.userInfo?.sub
      );
      console.log('full session:', JSON.stringify(bh.local.session));
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NyXqzCXcwG8PAxl8(bh, parentSpanInst);
      //appendnew_next_sd_FPyMhI1szoi8sdr1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FPyMhI1szoi8sdr1',
        spanInst,
        'sd_FPyMhI1szoi8sdr1'
      );
    }
  }

  async sd_NyXqzCXcwG8PAxl8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NyXqzCXcwG8PAxl8',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance: SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit =
        SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance.insertaudit(
          spanInst,
          'LOGOUT',
          undefined,
          bh.local.userId.accountId
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ys1JmZqBD5VKB2sq(bh, parentSpanInst);
      //appendnew_next_sd_NyXqzCXcwG8PAxl8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NyXqzCXcwG8PAxl8',
        spanInst,
        'sd_NyXqzCXcwG8PAxl8'
      );
    }
  }

  async sd_ys1JmZqBD5VKB2sq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ys1JmZqBD5VKB2sq',
      parentSpanInst
    );
    try {
      const sd_6dAXYY3GeyowGbw0Instance: sd_6dAXYY3GeyowGbw0.idsutil =
        sd_6dAXYY3GeyowGbw0.idsutil.getInstance();
      let outputVariables =
        await sd_6dAXYY3GeyowGbw0Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YDWuLGGhcL0eEW7d(bh, parentSpanInst);
      //appendnew_next_sd_ys1JmZqBD5VKB2sq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ys1JmZqBD5VKB2sq',
        spanInst,
        'sd_ys1JmZqBD5VKB2sq'
      );
    }
  }

  async sd_YDWuLGGhcL0eEW7d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YDWuLGGhcL0eEW7d',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NqLPslz6jcgDIBuI(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_H3BytOueBEVw9Bio(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YDWuLGGhcL0eEW7d',
        spanInst,
        'sd_YDWuLGGhcL0eEW7d'
      );
    }
  }

  async sd_NqLPslz6jcgDIBuI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NqLPslz6jcgDIBuI',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_NqLPslz6jcgDIBuI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NqLPslz6jcgDIBuI',
        spanInst,
        'sd_NqLPslz6jcgDIBuI'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_npRePYvkVukDvkRn(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_npRePYvkVukDvkRn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_npRePYvkVukDvkRn');
    }
  }

  async sd_H3BytOueBEVw9Bio(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H3BytOueBEVw9Bio',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_npRePYvkVukDvkRn(bh, parentSpanInst);
      //appendnew_next_sd_H3BytOueBEVw9Bio
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H3BytOueBEVw9Bio',
        spanInst,
        'sd_H3BytOueBEVw9Bio'
      );
    }
  }

  async sd_E5dXyH52xuZZKohp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E5dXyH52xuZZKohp',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_K0ZlnXl11C2Atsa6(bh, parentSpanInst);
      //appendnew_next_sd_E5dXyH52xuZZKohp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E5dXyH52xuZZKohp',
        spanInst,
        'sd_E5dXyH52xuZZKohp'
      );
    }
  }

  async sd_K0ZlnXl11C2Atsa6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K0ZlnXl11C2Atsa6',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_OqqecGjk3fSuwvJr(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rd03IjsTPwobE5RN(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K0ZlnXl11C2Atsa6',
        spanInst,
        'sd_K0ZlnXl11C2Atsa6'
      );
    }
  }

  async sd_OqqecGjk3fSuwvJr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OqqecGjk3fSuwvJr',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pP3ZP36JSs8GhGlP(bh, parentSpanInst);
      //appendnew_next_sd_OqqecGjk3fSuwvJr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OqqecGjk3fSuwvJr',
        spanInst,
        'sd_OqqecGjk3fSuwvJr'
      );
    }
  }

  async sd_pP3ZP36JSs8GhGlP(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pP3ZP36JSs8GhGlP');
    }
  }

  async sd_rd03IjsTPwobE5RN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rd03IjsTPwobE5RN',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RzehfHtBdpCxmA0g(bh, parentSpanInst);
      //appendnew_next_sd_rd03IjsTPwobE5RN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rd03IjsTPwobE5RN',
        spanInst,
        'sd_rd03IjsTPwobE5RN'
      );
    }
  }

  async sd_RzehfHtBdpCxmA0g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RzehfHtBdpCxmA0g',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xjqaSJSVkoui1qzf(bh, parentSpanInst);
      //appendnew_next_sd_RzehfHtBdpCxmA0g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RzehfHtBdpCxmA0g',
        spanInst,
        'sd_RzehfHtBdpCxmA0g'
      );
    }
  }

  async sd_xjqaSJSVkoui1qzf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xjqaSJSVkoui1qzf',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_SoT0ktdN9kKpRnoW(bh, parentSpanInst);
      } else {
        bh = await this.sd_atyLhtfCIYpGdHfs(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xjqaSJSVkoui1qzf',
        spanInst,
        'sd_xjqaSJSVkoui1qzf'
      );
    }
  }

  async sd_SoT0ktdN9kKpRnoW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SoT0ktdN9kKpRnoW',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NODLKQWgb6Sl0pan(bh, parentSpanInst);
      //appendnew_next_sd_SoT0ktdN9kKpRnoW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SoT0ktdN9kKpRnoW',
        spanInst,
        'sd_SoT0ktdN9kKpRnoW'
      );
    }
  }

  async sd_NODLKQWgb6Sl0pan(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NODLKQWgb6Sl0pan');
    }
  }

  async sd_atyLhtfCIYpGdHfs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_atyLhtfCIYpGdHfs',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Z36N4qBTnU0FQJmU(bh, parentSpanInst);
      //appendnew_next_sd_atyLhtfCIYpGdHfs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_atyLhtfCIYpGdHfs',
        spanInst,
        'sd_atyLhtfCIYpGdHfs'
      );
    }
  }

  async sd_Z36N4qBTnU0FQJmU(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z36N4qBTnU0FQJmU');
    }
  }

  async sd_y8QbzsJ9kotvnRbR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y8QbzsJ9kotvnRbR',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kLgzIwlCGWed95pE(bh, parentSpanInst);
      //appendnew_next_sd_y8QbzsJ9kotvnRbR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y8QbzsJ9kotvnRbR',
        spanInst,
        'sd_y8QbzsJ9kotvnRbR'
      );
    }
  }

  async sd_kLgzIwlCGWed95pE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kLgzIwlCGWed95pE',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bav4Q2A6POTPyYZS(bh, parentSpanInst);
      //appendnew_next_sd_kLgzIwlCGWed95pE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kLgzIwlCGWed95pE',
        spanInst,
        'sd_kLgzIwlCGWed95pE'
      );
    }
  }

  async sd_bav4Q2A6POTPyYZS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bav4Q2A6POTPyYZS',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mZFmvoolKvQSttM7(bh, parentSpanInst);
      //appendnew_next_sd_bav4Q2A6POTPyYZS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bav4Q2A6POTPyYZS',
        spanInst,
        'sd_bav4Q2A6POTPyYZS'
      );
    }
  }

  async sd_mZFmvoolKvQSttM7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mZFmvoolKvQSttM7',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XrSeuFW0KWYl9vHf(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_l7tOLZPhm9Yl50vk(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mZFmvoolKvQSttM7',
        spanInst,
        'sd_mZFmvoolKvQSttM7'
      );
    }
  }

  async sd_XrSeuFW0KWYl9vHf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XrSeuFW0KWYl9vHf',
      parentSpanInst
    );
    try {
      const sd_6dAXYY3GeyowGbw0Instance: sd_6dAXYY3GeyowGbw0.idsutil =
        sd_6dAXYY3GeyowGbw0.idsutil.getInstance();
      let outputVariables = await sd_6dAXYY3GeyowGbw0Instance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yVpu9rrmWJkYMSVc(bh, parentSpanInst);
      //appendnew_next_sd_XrSeuFW0KWYl9vHf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XrSeuFW0KWYl9vHf',
        spanInst,
        'sd_XrSeuFW0KWYl9vHf'
      );
    }
  }

  async sd_yVpu9rrmWJkYMSVc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yVpu9rrmWJkYMSVc',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_spCuS9c76ja1o7Pj(bh, parentSpanInst);
      } else {
        bh = await this.sd_5sEVWsJHDv4btbZO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yVpu9rrmWJkYMSVc',
        spanInst,
        'sd_yVpu9rrmWJkYMSVc'
      );
    }
  }

  async sd_spCuS9c76ja1o7Pj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_spCuS9c76ja1o7Pj',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Q4gf7bhRAhSoyfh1(bh, parentSpanInst);
      //appendnew_next_sd_spCuS9c76ja1o7Pj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_spCuS9c76ja1o7Pj',
        spanInst,
        'sd_spCuS9c76ja1o7Pj'
      );
    }
  }

  async sd_Q4gf7bhRAhSoyfh1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q4gf7bhRAhSoyfh1',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KK7aYDK23xDatWTq(bh, parentSpanInst);
      //appendnew_next_sd_Q4gf7bhRAhSoyfh1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q4gf7bhRAhSoyfh1',
        spanInst,
        'sd_Q4gf7bhRAhSoyfh1'
      );
    }
  }

  async sd_KK7aYDK23xDatWTq(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KK7aYDK23xDatWTq');
    }
  }

  async sd_5sEVWsJHDv4btbZO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5sEVWsJHDv4btbZO',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_8TtT3Yq2jKxXV3Wk(bh, parentSpanInst);
      } else {
        bh = await this.sd_7fNjfwsz5HnGAQsS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5sEVWsJHDv4btbZO',
        spanInst,
        'sd_5sEVWsJHDv4btbZO'
      );
    }
  }

  async sd_8TtT3Yq2jKxXV3Wk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8TtT3Yq2jKxXV3Wk',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DJiu1a0vcejm0jkV(bh, parentSpanInst);
      //appendnew_next_sd_8TtT3Yq2jKxXV3Wk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8TtT3Yq2jKxXV3Wk',
        spanInst,
        'sd_8TtT3Yq2jKxXV3Wk'
      );
    }
  }

  async sd_DJiu1a0vcejm0jkV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DJiu1a0vcejm0jkV',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7fNjfwsz5HnGAQsS(bh, parentSpanInst);
      //appendnew_next_sd_DJiu1a0vcejm0jkV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DJiu1a0vcejm0jkV',
        spanInst,
        'sd_DJiu1a0vcejm0jkV'
      );
    }
  }

  async sd_7fNjfwsz5HnGAQsS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7fNjfwsz5HnGAQsS',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7fNjfwsz5HnGAQsS',
        spanInst,
        'sd_7fNjfwsz5HnGAQsS'
      );
    }
  }

  async sd_l7tOLZPhm9Yl50vk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l7tOLZPhm9Yl50vk',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hNGAHmihlNpi7UaA(bh, parentSpanInst);
      } else {
        bh = await this.sd_dtcDh9Ys4pzLPhsA(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l7tOLZPhm9Yl50vk',
        spanInst,
        'sd_l7tOLZPhm9Yl50vk'
      );
    }
  }

  async sd_hNGAHmihlNpi7UaA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hNGAHmihlNpi7UaA',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KK7aYDK23xDatWTq(bh, parentSpanInst);
      //appendnew_next_sd_hNGAHmihlNpi7UaA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hNGAHmihlNpi7UaA',
        spanInst,
        'sd_hNGAHmihlNpi7UaA'
      );
    }
  }

  async sd_dtcDh9Ys4pzLPhsA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dtcDh9Ys4pzLPhsA',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KK7aYDK23xDatWTq(bh, parentSpanInst);
      //appendnew_next_sd_dtcDh9Ys4pzLPhsA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dtcDh9Ys4pzLPhsA',
        spanInst,
        'sd_dtcDh9Ys4pzLPhsA'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_DfW0msdfp7yviB1k(bh, parentSpanInst)) ||
      (await this.sd_kBf3lilYJ2Ypu2b1(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_DfW0msdfp7yviB1k(bh, parentSpanInst) {
    const nodes = [
      'sd_CtUdVo3NIsjN3YUt',
      'sd_w57NFF6jxlgrTNJg',
      'sd_xUmLakfLXO4oDC6U',
      'sd_f5zQuKdHGFzGEcsq',
      'sd_9RULJJAPcSjY3JTy',
      'sd_A1gX9rHg7WvmbFAC',
      'sd_ebX6k6Ze0NEShnVK',
      'sd_Dy6hQiIazvSYhizy',
      'sd_SqZHR9AAiNqQ17RN',
      'sd_kUzSPHTkgzTY2Tdk',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_qycP6cBPCbkc5B5L(bh, parentSpanInst);
      //appendnew_next_sd_DfW0msdfp7yviB1k
      return true;
    }
    return false;
  }
  async sd_kBf3lilYJ2Ypu2b1(bh, parentSpanInst) {
    const nodes = ['sd_XrSeuFW0KWYl9vHf'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Q4gf7bhRAhSoyfh1(bh, parentSpanInst);
      //appendnew_next_sd_kBf3lilYJ2Ypu2b1
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
