// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class book_audit {
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
    this.serviceName = 'book_audit';
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
      instance = new book_audit(
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
    //appendnew_flow_book_audit_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: book_audit');
    //appendnew_flow_book_audit_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: book_audit');
    //appendnew_flow_book_audit_HttpIn
  }
  //   service flows_book_audit

  async insertaudit(
    parentSpanInst,
    operation = '',
    resourceId = 0,
    userId = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'insertaudit',
      parentSpanInst
    );
    let bh: any = {
      input: {
        operation,
        resourceId,
        userId,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JsFskjm5QaRVwb44(bh, parentSpanInst);
      //appendnew_next_insertaudit
      return (
        // formatting output variables
        {
          input: {
            operation: bh.input.operation,
            resourceId: bh.input.resourceId,
            userId: bh.input.userId,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7sM96Rtqm7ri8byu',
        spanInst,
        'insertaudit'
      );
    }
  }
  //appendnew_flow_book_audit_start

  async sd_JsFskjm5QaRVwb44(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JsFskjm5QaRVwb44',
      parentSpanInst
    );
    try {
      var operation = bh.input.operation || '';
      var resourceId = bh.input.resourceId || null;

      var userId = bh.input.userId || null;

      bh.local.auditQuery =
        'INSERT INTO audit (operation, resourceId, userId, timestamp) VALUES (' +
        "'" +
        operation +
        "', " +
        (resourceId ? "'" + resourceId + "'" : 'NULL') +
        ', ' +
        (userId ? "'" + userId + "'" : 'NULL') +
        ', ' +
        'NOW()' +
        ')';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9aBRo0OsfZmq9HhW(bh, parentSpanInst);
      //appendnew_next_sd_JsFskjm5QaRVwb44
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JsFskjm5QaRVwb44',
        spanInst,
        'sd_JsFskjm5QaRVwb44'
      );
    }
  }

  async sd_9aBRo0OsfZmq9HhW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9aBRo0OsfZmq9HhW',
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
      let params = [];
      params = params ? params : [];
      bh.local.auditResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.auditQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_9aBRo0OsfZmq9HhW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9aBRo0OsfZmq9HhW',
        spanInst,
        'sd_9aBRo0OsfZmq9HhW'
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_book_audit_Catch
}
