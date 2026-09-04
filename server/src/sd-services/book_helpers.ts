// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class book_helpers {
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
    this.serviceName = 'book_helpers';
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
      instance = new book_helpers(
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
    //appendnew_flow_book_helpers_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: book_helpers');
    //appendnew_flow_book_helpers_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: book_helpers');

    this.app['get'](
      `${this.serviceBasePath}/book/exists`,
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
          bh = await this.sd_badaSkDIckS6rwFZ(bh, parentSpanInst);
          //appendnew_next_sd_sJ2UBLOry63wRflf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sJ2UBLOry63wRflf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_book_helpers_HttpIn
  }
  //   service flows_book_helpers

  //appendnew_flow_book_helpers_start

  async sd_badaSkDIckS6rwFZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_badaSkDIckS6rwFZ',
      parentSpanInst
    );
    try {
      // Can be called from Child Process or directly as API
      var isbn =
        bh.input.body.isbn || // for Child Process call
        (bh.local.childInput && bh.local.childInput.isbn); // fallback

      bh.local.isbn = isbn;
      bh.local.checkQuery =
        "SELECT id FROM book WHERE isbn = '" + isbn + "' LIMIT 1";
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7QftDqm3H63S2YbH(bh, parentSpanInst);
      //appendnew_next_sd_badaSkDIckS6rwFZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_badaSkDIckS6rwFZ',
        spanInst,
        'sd_badaSkDIckS6rwFZ'
      );
    }
  }

  async sd_7QftDqm3H63S2YbH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7QftDqm3H63S2YbH',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_YtNA2Urg6h79jqDJ'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.checkResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.checkQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BL3iV4gg9x21Y0dS(bh, parentSpanInst);
      //appendnew_next_sd_7QftDqm3H63S2YbH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7QftDqm3H63S2YbH',
        spanInst,
        'sd_7QftDqm3H63S2YbH'
      );
    }
  }

  async sd_BL3iV4gg9x21Y0dS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BL3iV4gg9x21Y0dS',
      parentSpanInst
    );
    try {
      var found = bh.local.checkResult && bh.local.checkResult.length > 0;

      // For direct API call response
      bh.local.responseBody = { exists: found };
      bh.local.statusCode = found ? 200 : 404;

      // For Child Process caller
      bh.local.childOutput = { exists: found };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_p6mfnjhTx3cFD6LG(bh, parentSpanInst);
      //appendnew_next_sd_BL3iV4gg9x21Y0dS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BL3iV4gg9x21Y0dS',
        spanInst,
        'sd_BL3iV4gg9x21Y0dS'
      );
    }
  }

  async sd_p6mfnjhTx3cFD6LG(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p6mfnjhTx3cFD6LG');
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_book_helpers_Catch
}
