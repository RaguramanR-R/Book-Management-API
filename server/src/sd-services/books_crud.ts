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
import * as SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj from './book_audit'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class books_crud {
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
    this.serviceName = 'books_crud';
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
      instance = new books_crud(
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
    //appendnew_flow_books_crud_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: books_crud');
    //appendnew_flow_books_crud_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: books_crud');

    this.app['get'](
      `${this.serviceBasePath}/books`,
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
          bh = await this.booklistScript(bh, parentSpanInst);
          //appendnew_next_sd_OX3oDtoZtlOU8STd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OX3oDtoZtlOU8STd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/books/:id`,
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
          bh = await this.existcheck1(bh, parentSpanInst);
          //appendnew_next_sd_8OQBHm5ok5rDDvEU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8OQBHm5ok5rDDvEU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/bookadd`,
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
          bh = await this.sd_GYXDuOmy1DRno2YN(bh, parentSpanInst);
          //appendnew_next_sd_TclfO0To5qTXOR6x
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TclfO0To5qTXOR6x');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/books/:id`,
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
          bh = await this.sd_nu57vWhutpqcdOK0(bh, parentSpanInst);
          //appendnew_next_sd_30UF7qMNKe1pxPHK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_30UF7qMNKe1pxPHK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/book/exists`,
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
          bh = await this.sd_RQy2pjvZcjUFlGtK(bh, parentSpanInst);
          //appendnew_next_sd_WJUp781Z4ft13qaR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WJUp781Z4ft13qaR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/audits`,
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
          bh = await this.sd_3edkhv3NYms645Ue(bh, parentSpanInst);
          //appendnew_next_sd_HbRTDCsRuLPS9TM4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HbRTDCsRuLPS9TM4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/report/pdf`,
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
          bh = await this.sd_e5qjcbEkX6y7kLeP(bh, parentSpanInst);
          //appendnew_next_sd_f63u0Q5Cc9pYR2ex
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_f63u0Q5Cc9pYR2ex');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/books/:id`,
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
          bh = await this.sd_iyKnH05MZzGwabhw(bh, parentSpanInst);
          //appendnew_next_sd_C22NNDsCTZQ41esg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_C22NNDsCTZQ41esg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/book/:isbn`,
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
          bh = await this.reqIsbn(bh, parentSpanInst);
          //appendnew_next_sd_lQowgq8iipGjOXPC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lQowgq8iipGjOXPC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_books_crud_HttpIn
  }
  //   service flows_books_crud

  //appendnew_flow_books_crud_start

  async booklistScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'booklistScript',
      parentSpanInst
    );
    try {
      var limit = bh.input.query.limit ? Number(bh.input.query.limit) : 10;
      var offset = bh.input.query.offset ? Number(bh.input.query.offset) : 0;

      bh.local.limit = limit;
      bh.local.offset = offset;

      // First query — for count SQL node
      bh.local.countQuery = 'SELECT COUNT(*) as total FROM book';

      // Second query — for select SQL node
      bh.local.selectQuery =
        'SELECT * FROM book LIMIT ' + limit + ' OFFSET ' + offset;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.booklistSql1(bh, parentSpanInst);
      //appendnew_next_booklistScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AJ19SPaIPTSN1bEY',
        spanInst,
        'booklistScript'
      );
    }
  }

  async booklistSql1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'booklistSql1',
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
      bh.local.countResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.countQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.booklistSql2(bh, parentSpanInst);
      //appendnew_next_booklistSql1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OtkXNNpkEbIsKvQf',
        spanInst,
        'booklistSql1'
      );
    }
  }

  async booklistSql2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'booklistSql2',
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
      bh.local.books = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.selectQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.booklistScript2(bh, parentSpanInst);
      //appendnew_next_booklistSql2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZzZiRBlvoCs9g19Y',
        spanInst,
        'booklistSql2'
      );
    }
  }

  async booklistScript2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'booklistScript2',
      parentSpanInst
    );
    try {
      bh.local.responseBody = {
        total: bh.local.countResult[0].total,
        items: bh.local.books,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.bookListHttpOut(bh, parentSpanInst);
      //appendnew_next_booklistScript2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GV1dMS6lQlZVGzSt',
        spanInst,
        'booklistScript2'
      );
    }
  }

  async bookListHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aVpzmGPULVqadZ6h');
    }
  }

  async existcheck1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'existcheck1',
      parentSpanInst
    );
    try {
      bh.local.checkQuery =
        'SELECT COUNT(*) AS count FROM book WHERE id=' +
        Number(bh.input.params.id);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.existSql(bh, parentSpanInst);
      //appendnew_next_existcheck1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bp0JOMX1erZToap1',
        spanInst,
        'existcheck1'
      );
    }
  }

  async existSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('existSql', parentSpanInst);
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
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.checkQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteScript(bh, parentSpanInst);
      //appendnew_next_existSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qZVTw0MoC0VfEmkd',
        spanInst,
        'existSql'
      );
    }
  }

  async deleteScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deleteScript',
      parentSpanInst
    );
    try {
      const count = bh.local.result[0].count;

      if (count === 0) {
        bh.local.statusCode = 404;
        let msg = 'Book not found';
        bh.local.responseBody = { error: msg };
        throw new Error(msg);
      } else {
        bh.local.deleteQuery =
          'DELETE FROM book' + ' WHERE id=' + Number(bh.input.params.id);
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.deleteSql(bh, parentSpanInst);
      //appendnew_next_deleteScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W3VGlgOrnq22HYGa',
        spanInst,
        'deleteScript'
      );
    }
  }

  async deleteSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('deleteSql', parentSpanInst);
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
      bh.local.Result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.deleteQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.deletesession(bh, parentSpanInst);
      //appendnew_next_deleteSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R3MNMr1aKAY2v3PG',
        spanInst,
        'deleteSql'
      );
    }
  }

  async deletesession(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deletesession',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.deletescript2(bh, parentSpanInst);
      //appendnew_next_deletesession
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WnuSBkAPIyTeGWc1',
        spanInst,
        'deletesession'
      );
    }
  }

  async deletescript2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'deletescript2',
      parentSpanInst
    );
    try {
      bh.local.userId = bh.local.session?.data?.userInfo?.sub || null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RytKNnF6E2zOl949(bh, parentSpanInst);
      //appendnew_next_deletescript2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lHE15TOYN4NoE1LT',
        spanInst,
        'deletescript2'
      );
    }
  }

  async sd_RytKNnF6E2zOl949(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RytKNnF6E2zOl949',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance: SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit =
        SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance.insertaudit(
          spanInst,
          'DELETE_BOOK',
          bh.input.params.id,
          bh.local.userId.accountId
        );

      this.tracerService.sendData(spanInst, bh);
      await this.deletehttpout(bh, parentSpanInst);
      //appendnew_next_sd_RytKNnF6E2zOl949
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RytKNnF6E2zOl949',
        spanInst,
        'sd_RytKNnF6E2zOl949'
      );
    }
  }

  async deletehttpout(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qsj6fSrNM5gRBEp9');
    }
  }

  async sd_GYXDuOmy1DRno2YN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GYXDuOmy1DRno2YN',
      parentSpanInst
    );
    try {
      var isbn = bh.input.body.isbn;

      bh.local.isValidIsbn = true;
      bh.local.isbn = isbn.toString().trim();
      bh.local.checkDuplicateQuery =
        "SELECT id FROM book WHERE isbn = '" + isbn + "' LIMIT 1";
      bh.local.olUrl =
        'https://openlibrary.org/api/books?bibkeys=ISBN:' +
        bh.local.isbn +
        '&jscmd=data&format=json';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_REFZNYV0G67LFHe7(bh, parentSpanInst);
      //appendnew_next_sd_GYXDuOmy1DRno2YN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GYXDuOmy1DRno2YN',
        spanInst,
        'sd_GYXDuOmy1DRno2YN'
      );
    }
  }

  async sd_REFZNYV0G67LFHe7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_REFZNYV0G67LFHe7',
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
      bh.local.duplicate = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.checkDuplicateQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.isDuplicate(bh, parentSpanInst);
      //appendnew_next_sd_REFZNYV0G67LFHe7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_REFZNYV0G67LFHe7',
        spanInst,
        'sd_REFZNYV0G67LFHe7'
      );
    }
  }

  async isDuplicate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'isDuplicate',
      parentSpanInst
    );
    try {
      var exists = bh.local.duplicate && bh.local.duplicate.length > 0;

      if (exists) {
        bh.local.isDuplicate = true;
        bh.local.statusCode = 409;
        let msg = 'Book with ISBN ' + bh.input.body.isbn + ' already exists';
        bh.local.responseBody = { error: msg };
        throw new Error(msg);
      } else {
        bh.local.isDuplicate = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addApi(bh, parentSpanInst);
      //appendnew_next_isDuplicate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X1mgPvwdmpJ3Xrqv',
        spanInst,
        'isDuplicate'
      );
    }
  }

  async addApi(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.olUrl,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.olResponse = responseMsg;
      bh = await this.invalidadd(bh, parentSpanInst);
      //appendnew_next_addApi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DjeI26JOouQ3f2s5');
    }
  }

  async invalidadd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'invalidadd',
      parentSpanInst
    );
    try {
      var isbn = bh.input.body.isbn;
      var key = 'ISBN:' + isbn;

      // The actual book data is inside .payload, not the root response
      var olResponse = bh.local.olResponse;
      var bookPayload =
        olResponse && olResponse.payload ? olResponse.payload : null;

      // Check if ISBN exists in Open Library
      if (!bookPayload || !bookPayload[key]) {
        bh.local.isValidIsbn = false;
        bh.local.insertQuery = '';
        bh.local.statusCode = 404;
        throw new Error('Invalid ISBN. Book not found in Open Library.');
      } else {
        bh.local.isValidIsbn = true;
        var bookInfo = bookPayload[key];
        var title = bh.input.body.title || bookInfo.title || '';

        var author =
          bh.input.body.author ||
          (bookInfo.authors && bookInfo.authors.length > 0
            ? bookInfo.authors[0].name
            : '');

        var publishedYear =
          bh.input.body.publishedYear ||
          (bookInfo.publish_date ? bookInfo.publish_date.slice(-4) : null);

        bh.local.bookData = {
          isbn: isbn,
          title: title,
          author: author,
          publishedYear: Number(publishedYear),
        };

        bh.local.insertQuery =
          'INSERT INTO book (isbn, title, author, publishedYear) VALUES (' +
          "'" +
          isbn +
          "', " +
          "'" +
          title +
          "', " +
          "'" +
          author +
          "', " +
          Number(publishedYear) +
          ')';
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sKfNrD2EESMbzDwU(bh, parentSpanInst);
      //appendnew_next_invalidadd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S3Pnzy4ndb1TLNgR',
        spanInst,
        'invalidadd'
      );
    }
  }

  async sd_sKfNrD2EESMbzDwU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sKfNrD2EESMbzDwU',
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
      bh.local.Result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.insertQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.session(bh, parentSpanInst);
      //appendnew_next_sd_sKfNrD2EESMbzDwU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sKfNrD2EESMbzDwU',
        spanInst,
        'sd_sKfNrD2EESMbzDwU'
      );
    }
  }

  async session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('session', parentSpanInst);
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PJjTaaTtExfJCodF(bh, parentSpanInst);
      //appendnew_next_session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QnQUzSDFkRukrOcA',
        spanInst,
        'session'
      );
    }
  }

  async sd_PJjTaaTtExfJCodF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PJjTaaTtExfJCodF',
      parentSpanInst
    );
    try {
      bh.local.userId = bh.local.session?.data?.userInfo?.sub || null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Z7O8AFTWboeuLuSp(bh, parentSpanInst);
      //appendnew_next_sd_PJjTaaTtExfJCodF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PJjTaaTtExfJCodF',
        spanInst,
        'sd_PJjTaaTtExfJCodF'
      );
    }
  }

  async sd_Z7O8AFTWboeuLuSp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z7O8AFTWboeuLuSp',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance: SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit =
        SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance.insertaudit(
          spanInst,
          'CREATE_BOOK',
          bh.local.Result.insertId,
          bh.local.userId.accountId
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UXcfS8zqZcCrDacP(bh, parentSpanInst);
      //appendnew_next_sd_Z7O8AFTWboeuLuSp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z7O8AFTWboeuLuSp',
        spanInst,
        'sd_Z7O8AFTWboeuLuSp'
      );
    }
  }

  async sd_UXcfS8zqZcCrDacP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UXcfS8zqZcCrDacP',
      parentSpanInst
    );
    try {
      bh.local.responseBody = {
        message: 'Book added successfully',
        book: bh.local.bookData,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UVaDanBhJiinfimN(bh, parentSpanInst);
      //appendnew_next_sd_UXcfS8zqZcCrDacP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UXcfS8zqZcCrDacP',
        spanInst,
        'sd_UXcfS8zqZcCrDacP'
      );
    }
  }

  async sd_UVaDanBhJiinfimN(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UVaDanBhJiinfimN');
    }
  }

  async sd_nu57vWhutpqcdOK0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nu57vWhutpqcdOK0',
      parentSpanInst
    );
    try {
      var isbn = bh.input.body.isbn;

      bh.local.isbn = isbn.toString().trim();
      bh.local.checkDuplicateQuery =
        "SELECT id FROM book WHERE isbn = '" +
        isbn +
        "' AND id != " +
        Number(bh.input.params.id) +
        ' LIMIT 1';
      bh.local.olUrl =
        'https://openlibrary.org/api/books?bibkeys=ISBN:' +
        bh.local.isbn +
        '&jscmd=data&format=json';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lP6iTxqnu9ZyUviX(bh, parentSpanInst);
      //appendnew_next_sd_nu57vWhutpqcdOK0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nu57vWhutpqcdOK0',
        spanInst,
        'sd_nu57vWhutpqcdOK0'
      );
    }
  }

  async sd_lP6iTxqnu9ZyUviX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lP6iTxqnu9ZyUviX',
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
      bh.local.duplicate = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.checkDuplicateQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.alreadyExistsIsbn(bh, parentSpanInst);
      //appendnew_next_sd_lP6iTxqnu9ZyUviX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lP6iTxqnu9ZyUviX',
        spanInst,
        'sd_lP6iTxqnu9ZyUviX'
      );
    }
  }

  async alreadyExistsIsbn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'alreadyExistsIsbn',
      parentSpanInst
    );
    try {
      // Script after Child Process node
      var exists = bh.local.duplicate && bh.local.duplicate.length > 0;

      if (exists) {
        bh.local.isDuplicate = true;
        bh.local.statusCode = 404;
        let msg = 'Book with ISBN ' + bh.input.body.isbn + ' already exists';
        bh.local.responseBody = { error: msg };
        throw new Error(msg);
      } else {
        bh.local.isDuplicate = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateHttp(bh, parentSpanInst);
      //appendnew_next_alreadyExistsIsbn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ejxmb0SHNZw0Txd2',
        spanInst,
        'alreadyExistsIsbn'
      );
    }
  }

  async updateHttp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.olUrl,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.olResponse = responseMsg;
      bh = await this.editInvalidIsbn(bh, parentSpanInst);
      //appendnew_next_updateHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aDMonHC6H59lQk8U');
    }
  }

  async editInvalidIsbn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'editInvalidIsbn',
      parentSpanInst
    );
    try {
      var isbn = bh.input.body.isbn;
      var key = 'ISBN:' + isbn;

      var olResponse = bh.local.olResponse;
      var bookPayload =
        olResponse && olResponse.payload ? olResponse.payload : null;

      if (!bookPayload || !bookPayload[key]) {
        bh.local.isValidIsbn = false;
        bh.local.updateQuery = '';
        bh.local.statusCode = 404;
        let msg = 'Invalid ISBN. Book not found in Open Library.';
        bh.local.responseBody = { error: msg };
        throw new Error(msg);
      } else {
        bh.local.isValidIsbn = true;

        var bookInfo = bookPayload[key];

        var title = bh.input.body.title || bookInfo.title || '';

        var author =
          bh.input.body.author ||
          (bookInfo.authors && bookInfo.authors.length > 0
            ? bookInfo.authors[0].name
            : '');

        var publishedYear =
          bh.input.body.publishedYear ||
          (bookInfo.publish_date ? bookInfo.publish_date.slice(-4) : null);

        bh.local.bookData = {
          isbn: isbn,
          title: title,
          author: author,
          publishedYear: Number(publishedYear),
        };

        bh.local.updateQuery =
          'UPDATE book SET ' +
          "isbn = '" +
          isbn +
          "', " +
          "title = '" +
          title +
          "', " +
          "author = '" +
          author +
          "', " +
          'publishedYear = ' +
          Number(publishedYear) +
          ' WHERE id = ' +
          Number(bh.input.params.id);
      } // ✅ else block closes here

      // Logs outside — always runs
      console.log('id:', bh.input.params.id);
      console.log('isValidIsbn:', bh.local.isValidIsbn);
      console.log('updateQuery:', bh.local.updateQuery);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8zRg6uR7PTi1pXLG(bh, parentSpanInst);
      //appendnew_next_editInvalidIsbn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OLiGvek4mv2ieZti',
        spanInst,
        'editInvalidIsbn'
      );
    }
  }

  async sd_8zRg6uR7PTi1pXLG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8zRg6uR7PTi1pXLG',
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
      bh.local.Result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.updateQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.session1(bh, parentSpanInst);
      //appendnew_next_sd_8zRg6uR7PTi1pXLG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8zRg6uR7PTi1pXLG',
        spanInst,
        'sd_8zRg6uR7PTi1pXLG'
      );
    }
  }

  async session1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('session1', parentSpanInst);
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DFQecA2WNQIh0Y7G(bh, parentSpanInst);
      //appendnew_next_session1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dNZfRvbDD6Rczl2w',
        spanInst,
        'session1'
      );
    }
  }

  async sd_DFQecA2WNQIh0Y7G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DFQecA2WNQIh0Y7G',
      parentSpanInst
    );
    try {
      bh.local.userId = bh.local.session?.data?.userInfo?.sub || null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pri5nwSVzSu7jq76(bh, parentSpanInst);
      //appendnew_next_sd_DFQecA2WNQIh0Y7G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DFQecA2WNQIh0Y7G',
        spanInst,
        'sd_DFQecA2WNQIh0Y7G'
      );
    }
  }

  async sd_pri5nwSVzSu7jq76(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pri5nwSVzSu7jq76',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance: SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit =
        SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance.insertaudit(
          spanInst,
          'UPDATE_BOOK',
          bh.input.params.id,
          bh.local.userId.accountId
        );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0KDbde9eUtyVQwpM(bh, parentSpanInst);
      //appendnew_next_sd_pri5nwSVzSu7jq76
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pri5nwSVzSu7jq76',
        spanInst,
        'sd_pri5nwSVzSu7jq76'
      );
    }
  }

  async sd_0KDbde9eUtyVQwpM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0KDbde9eUtyVQwpM',
      parentSpanInst
    );
    try {
      bh.local.responseBody = {
        message: 'Book Updated successfully',
        book: bh.local.bookData,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6ogDpstxKhV5wTXG(bh, parentSpanInst);
      //appendnew_next_sd_0KDbde9eUtyVQwpM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0KDbde9eUtyVQwpM',
        spanInst,
        'sd_0KDbde9eUtyVQwpM'
      );
    }
  }

  async sd_6ogDpstxKhV5wTXG(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6ogDpstxKhV5wTXG');
    }
  }

  async sd_RQy2pjvZcjUFlGtK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RQy2pjvZcjUFlGtK',
      parentSpanInst
    );
    try {
      var isbn =
        bh.input.body.isbn || (bh.local.childInput && bh.local.childInput.isbn);

      bh.local.isbn = isbn;
      bh.local.checkQuery =
        "SELECT id FROM book WHERE isbn = '" + isbn + "' LIMIT 1";
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oOyC7SOxKaqS7tWq(bh, parentSpanInst);
      //appendnew_next_sd_RQy2pjvZcjUFlGtK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RQy2pjvZcjUFlGtK',
        spanInst,
        'sd_RQy2pjvZcjUFlGtK'
      );
    }
  }

  async sd_oOyC7SOxKaqS7tWq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oOyC7SOxKaqS7tWq',
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
      bh.local.checkResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.checkQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_R28Yi8cg9jZsWsn8(bh, parentSpanInst);
      //appendnew_next_sd_oOyC7SOxKaqS7tWq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oOyC7SOxKaqS7tWq',
        spanInst,
        'sd_oOyC7SOxKaqS7tWq'
      );
    }
  }

  async sd_R28Yi8cg9jZsWsn8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R28Yi8cg9jZsWsn8',
      parentSpanInst
    );
    try {
      var found = bh.local.checkResult && bh.local.checkResult.length > 0;

      bh.local.responseBody = { exists: found };
      bh.local.statusCode = found ? 200 : 404;
      bh.local.childOutput = { exists: found };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xnNtuk4PiIsulFfb(bh, parentSpanInst);
      //appendnew_next_sd_R28Yi8cg9jZsWsn8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R28Yi8cg9jZsWsn8',
        spanInst,
        'sd_R28Yi8cg9jZsWsn8'
      );
    }
  }

  async sd_xnNtuk4PiIsulFfb(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xnNtuk4PiIsulFfb');
    }
  }

  async sd_3edkhv3NYms645Ue(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3edkhv3NYms645Ue',
      parentSpanInst
    );
    try {
      var startTime = bh.input.query.startTime || null;
      var endTime = bh.input.query.endTime || null;
      var operation = bh.input.query.operation || null;

      var where = [];

      if (startTime) {
        where.push("timestamp >= '" + startTime + "'");
      }
      if (endTime) {
        where.push("timestamp <= '" + endTime + "'");
      }
      if (operation) {
        where.push("operation LIKE '%" + operation + "%'");
      }

      var whereClause = where.length > 0 ? ' WHERE ' + where.join(' AND ') : '';

      bh.local.auditQuery =
        'SELECT * FROM audit' + whereClause + ' ORDER BY timestamp DESC';

      console.log('auditQuery:', bh.local.auditQuery);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_C90a5EFljCxc0V1t(bh, parentSpanInst);
      //appendnew_next_sd_3edkhv3NYms645Ue
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3edkhv3NYms645Ue',
        spanInst,
        'sd_3edkhv3NYms645Ue'
      );
    }
  }

  async sd_C90a5EFljCxc0V1t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C90a5EFljCxc0V1t',
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
      bh = await this.sd_EWTdhwPm4ewtD68w(bh, parentSpanInst);
      //appendnew_next_sd_C90a5EFljCxc0V1t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C90a5EFljCxc0V1t',
        spanInst,
        'sd_C90a5EFljCxc0V1t'
      );
    }
  }

  async sd_EWTdhwPm4ewtD68w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EWTdhwPm4ewtD68w',
      parentSpanInst
    );
    try {
      bh.local.responseBody = (bh.local.auditResult || []).map((item) => ({
        ...item,
        resourceId: item.resourceId == null ? 'N/A' : item.resourceId,
      }));
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RG4jeXjShS2o7JY0(bh, parentSpanInst);
      //appendnew_next_sd_EWTdhwPm4ewtD68w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EWTdhwPm4ewtD68w',
        spanInst,
        'sd_EWTdhwPm4ewtD68w'
      );
    }
  }

  async sd_RG4jeXjShS2o7JY0(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RG4jeXjShS2o7JY0');
    }
  }

  async sd_e5qjcbEkX6y7kLeP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e5qjcbEkX6y7kLeP',
      parentSpanInst
    );
    try {
      var startTime = bh.input.query.startTime || null;
      var endTime = bh.input.query.endTime || null;
      var operation = bh.input.query.operation || null;

      var where = [];

      if (startTime) {
        var start = startTime.replace('T', ' ');
        where.push("timestamp >= '" + start + "'");
      }
      if (endTime) {
        var end = endTime.replace('T', ' ');
        where.push("timestamp <= '" + end + "'");
      }
      if (operation) {
        where.push("operation = '" + operation + "'");
      }

      var whereClause = where.length > 0 ? ' WHERE ' + where.join(' AND ') : '';

      bh.local.auditQuery =
        'SELECT * FROM audit' + whereClause + ' ORDER BY timestamp ASC';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2Aqv0epKm6jBKNUu(bh, parentSpanInst);
      //appendnew_next_sd_e5qjcbEkX6y7kLeP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e5qjcbEkX6y7kLeP',
        spanInst,
        'sd_e5qjcbEkX6y7kLeP'
      );
    }
  }

  async sd_2Aqv0epKm6jBKNUu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2Aqv0epKm6jBKNUu',
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
      bh = await this.sd_XCrcf9AMn0BJK4mj(bh, parentSpanInst);
      //appendnew_next_sd_2Aqv0epKm6jBKNUu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2Aqv0epKm6jBKNUu',
        spanInst,
        'sd_2Aqv0epKm6jBKNUu'
      );
    }
  }

  async sd_XCrcf9AMn0BJK4mj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XCrcf9AMn0BJK4mj',
      parentSpanInst
    );
    try {
      var audits = bh.local.auditResult || [];
      var puppeteer = require('puppeteer');
      var path = require('path');

      function formatTimestamp(ts) {
        if (!ts) return 'N/A';
        var d = new Date(ts);
        var yyyy = d.getFullYear();
        var mm = String(d.getMonth() + 1).padStart(2, '0');
        var dd = String(d.getDate()).padStart(2, '0');
        var hh = String(d.getHours()).padStart(2, '0');
        var min = String(d.getMinutes()).padStart(2, '0');
        var ss = String(d.getSeconds()).padStart(2, '0');
        return (
          yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + min + ':' + ss + 'Z'
        );
      }

      function generateHTML(audits) {
        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Audit Report</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f4f4f4; }
        tr:nth-child(even) { background-color: #f9f9f9; }
      </style>
    </head>
    <body>
      <h1>Audit Report</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Timestamp</th>
            <th>Operation</th>
            <th>Resource ID</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          ${audits
            .map(function (audit) {
              return `
              <tr>
                <td>${audit.id}</td>
                <td>${formatTimestamp(audit.timestamp)}</td>
                <td>${audit.operation}</td>
                <td>${
                  audit.resourceId !== null && audit.resourceId !== undefined
                    ? audit.resourceId
                    : 'N/A'
                }</td>
                <td>${audit.userId || 'N/A'}</td>
              </tr>
            `;
            })
            .join('')}
        </tbody>
      </table>
    </body>
    </html>
    `;
      }

      var pdfPath = path.join(__dirname, 'audit-report.pdf');

      var browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      var page = await browser.newPage();
      await page.setContent(generateHTML(audits));
      await page.pdf({
        format: 'A4',
        printBackground: true,
        path: pdfPath,
      });
      await browser.close();

      bh.local.pdfPath = pdfPath;
      console.log('PDF generated at:', pdfPath);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.session12(bh, parentSpanInst);
      //appendnew_next_sd_XCrcf9AMn0BJK4mj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XCrcf9AMn0BJK4mj',
        spanInst,
        'sd_XCrcf9AMn0BJK4mj'
      );
    }
  }

  async session12(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('session12', parentSpanInst);
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_j4Or3T0DHivhQeb3(bh, parentSpanInst);
      //appendnew_next_session12
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i9tFnh31A8PPBmht',
        spanInst,
        'session12'
      );
    }
  }

  async sd_j4Or3T0DHivhQeb3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j4Or3T0DHivhQeb3',
      parentSpanInst
    );
    try {
      bh.local.userId = bh.local.session?.data?.userInfo?.sub || null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kxwIb0YwtFwqK4Ug(bh, parentSpanInst);
      //appendnew_next_sd_j4Or3T0DHivhQeb3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j4Or3T0DHivhQeb3',
        spanInst,
        'sd_j4Or3T0DHivhQeb3'
      );
    }
  }

  async sd_kxwIb0YwtFwqK4Ug(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kxwIb0YwtFwqK4Ug',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance: SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit =
        SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTj.book_audit.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_sBZMy9S2Rsi8LLTjInstance.insertaudit(
          spanInst,
          'GENERATE_PDF',
          undefined,
          bh.local.userId.accountId
        );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_uzFNHMmjV5M9xRSx(bh, parentSpanInst);
      //appendnew_next_sd_kxwIb0YwtFwqK4Ug
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kxwIb0YwtFwqK4Ug',
        spanInst,
        'sd_kxwIb0YwtFwqK4Ug'
      );
    }
  }

  async sd_uzFNHMmjV5M9xRSx(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="audit-report.pdf"',
      });

      bh.web.res.status(200).download(bh.local.pdfPath);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uzFNHMmjV5M9xRSx');
    }
  }

  async sd_iyKnH05MZzGwabhw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iyKnH05MZzGwabhw',
      parentSpanInst
    );
    try {
      var id = bh.input.params.id;
      console.log('111111111111111111111id:', id);

      bh.local.ViewQuery = 'SELECT * FROM book WHERE id = ' + id;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sK28KpN7Hfssl4YD(bh, parentSpanInst);
      //appendnew_next_sd_iyKnH05MZzGwabhw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iyKnH05MZzGwabhw',
        spanInst,
        'sd_iyKnH05MZzGwabhw'
      );
    }
  }

  async sd_sK28KpN7Hfssl4YD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sK28KpN7Hfssl4YD',
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
      bh.local.ViewResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.ViewQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.notExistGet(bh, parentSpanInst);
      //appendnew_next_sd_sK28KpN7Hfssl4YD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sK28KpN7Hfssl4YD',
        spanInst,
        'sd_sK28KpN7Hfssl4YD'
      );
    }
  }

  async notExistGet(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'notExistGet',
      parentSpanInst
    );
    try {
      var notexists = bh.local.ViewResult.length == 0;

      if (notexists) {
        bh.local.statusCode = 404;
        let msg = 'Book Not Found';
        bh.local.responseBody = { error: msg };
        throw new Error(msg);
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_o9kFMIEG6dSqk2mr(bh, parentSpanInst);
      //appendnew_next_notExistGet
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AKKC2ePn0psjZg5D',
        spanInst,
        'notExistGet'
      );
    }
  }

  async sd_o9kFMIEG6dSqk2mr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.ViewResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o9kFMIEG6dSqk2mr');
    }
  }

  async reqIsbn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('reqIsbn', parentSpanInst);
    try {
      var isbn = bh.input.params.isbn;

      bh.local.url =
        'https://openlibrary.org/isbn/' + isbn.toString().trim() + '.json';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.openlibraryget(bh, parentSpanInst);
      //appendnew_next_reqIsbn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oa2cLYnU3kkpkzIa',
        spanInst,
        'reqIsbn'
      );
    }
  }

  async openlibraryget(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.searchResponse = responseMsg;
      bh = await this.invalidIsbn(bh, parentSpanInst);
      //appendnew_next_openlibraryget
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P8v0inGOlk2Yv8r7');
    }
  }

  async invalidIsbn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'invalidIsbn',
      parentSpanInst
    );
    try {
      console.log('bh.local.searchResponse', bh.local.searchResponse);

      let response = bh.local.searchResponse;
      let data = response.payload;

      bh.local.result = [
        {
          title: data.title || 'N/A',
          publish_date: data.publish_date || 'N/A',
          publisher: data.publishers?.[0] || 'N/A',
        },
      ];

      this.tracerService.sendData(spanInst, bh);
      await this.sd_GpfIiANdLAzcavHM(bh, parentSpanInst);
      //appendnew_next_invalidIsbn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6H5rw0SX6Xo3CN7o',
        spanInst,
        'invalidIsbn'
      );
    }
  }

  async sd_GpfIiANdLAzcavHM(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GpfIiANdLAzcavHM');
    }
  }

  async sd_elEaVUN0sH5kiNdn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_elEaVUN0sH5kiNdn',
      parentSpanInst
    );
    try {
      console.log('Catch triggered - bh.error:', bh.error);

      let upstreamStatus =
        (bh.error && bh.error.response && bh.error.response.statusCode) || null;

      let statusCode;
      let errorMessage;

      if (upstreamStatus === 404) {
        statusCode = 404;
        errorMessage = 'Invalid ISBN. Book not found in Open Library.';
      } else if (upstreamStatus) {
        // Any other non-2xx from Open Library (e.g. 500, 503) - treat as connection failure
        statusCode = 500;
        errorMessage = 'Failed to connect to Open Library API';
      } else {
        // No response at all - network/timeout/DNS failure, no upstreamStatus available
        statusCode = 500;
        errorMessage = 'Failed to connect to Open Library API';
      }

      bh.local.statusCode = statusCode;
      bh.local.responseBody = {
        error: errorMessage,
      };

      console.log('bh.local.statusCode', bh.local.statusCode);
      console.log('bh.local.responseBody', bh.local.responseBody);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cD4Qhoi3pypWGPZ5(bh, parentSpanInst);
      //appendnew_next_sd_elEaVUN0sH5kiNdn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_elEaVUN0sH5kiNdn',
        spanInst,
        'sd_elEaVUN0sH5kiNdn'
      );
    }
  }

  async sd_cD4Qhoi3pypWGPZ5(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cD4Qhoi3pypWGPZ5');
    }
  }

  async sd_k4clU1lgIBobN9mF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k4clU1lgIBobN9mF',
      parentSpanInst
    );
    try {
      /* bh.local.statusCode = bh.local.statusCode || 500;
bh.local.responseBody = {
    error: (bh.error && bh.error.message) ? bh.error.message : "Unexpected error occurred"
}; */

      let upstreamStatus =
        (bh.error && bh.error.response && bh.error.response.statusCode) || null;

      let statusCode;
      let errorMessage;

      if (upstreamStatus === 404) {
        statusCode = 404;
        errorMessage = 'Invalid ISBN. Book not found in Open Library.';
      } else if (upstreamStatus) {
        // Any other non-2xx from Open Library (e.g. 500, 503) - treat as connection failure
        statusCode = 500;
        errorMessage = 'Failed to connect to Open Library API';
      } else {
        // No response at all - network/timeout/DNS failure, no upstreamStatus available
        statusCode = 500;
        errorMessage = 'Failed to connect to Open Library API';
      }

      bh.local.statusCode = statusCode;
      bh.local.responseBody = {
        error: errorMessage,
      };

      console.log('bh.local.statusCode', bh.local.statusCode);
      console.log('bh.local.responseBody', bh.local.responseBody);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8fPJFeMqHhb7Th7f(bh, parentSpanInst);
      //appendnew_next_sd_k4clU1lgIBobN9mF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k4clU1lgIBobN9mF',
        spanInst,
        'sd_k4clU1lgIBobN9mF'
      );
    }
  }

  async sd_8fPJFeMqHhb7Th7f(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8fPJFeMqHhb7Th7f');
    }
  }

  async sd_m6PvjLi3WqCgQTeE(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m6PvjLi3WqCgQTeE');
    }
  }

  async sd_mZ9hsExTVnqvigPA(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mZ9hsExTVnqvigPA');
    }
  }

  async sd_SPVta4pANIiKPGuG(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SPVta4pANIiKPGuG');
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
      (await this.sd_OIVmZI43yVWyH62V(bh, parentSpanInst)) ||
      (await this.sd_paK5sPLjDZyGGp4G(bh, parentSpanInst)) ||
      (await this.sd_tfTKf4rYqArhvGHO(bh, parentSpanInst)) ||
      (await this.sd_88zPVUZngf0ZVrhd(bh, parentSpanInst)) ||
      (await this.sd_oUfbLz9FwaYEN82x(bh, parentSpanInst))
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
  async sd_OIVmZI43yVWyH62V(bh, parentSpanInst) {
    const nodes = ['sd_P8v0inGOlk2Yv8r7'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_elEaVUN0sH5kiNdn(bh, parentSpanInst);
      //appendnew_next_sd_OIVmZI43yVWyH62V
      return true;
    }
    return false;
  }
  async sd_paK5sPLjDZyGGp4G(bh, parentSpanInst) {
    const nodes = ['sd_DjeI26JOouQ3f2s5', 'sd_aDMonHC6H59lQk8U'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_k4clU1lgIBobN9mF(bh, parentSpanInst);
      //appendnew_next_sd_paK5sPLjDZyGGp4G
      return true;
    }
    return false;
  }
  async sd_tfTKf4rYqArhvGHO(bh, parentSpanInst) {
    const nodes = ['sd_W3VGlgOrnq22HYGa'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_m6PvjLi3WqCgQTeE(bh, parentSpanInst);
      //appendnew_next_sd_tfTKf4rYqArhvGHO
      return true;
    }
    return false;
  }
  async sd_88zPVUZngf0ZVrhd(bh, parentSpanInst) {
    const nodes = [
      'sd_OLiGvek4mv2ieZti',
      'sd_X1mgPvwdmpJ3Xrqv',
      'sd_Ejxmb0SHNZw0Txd2',
    ];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_mZ9hsExTVnqvigPA(bh, parentSpanInst);
      //appendnew_next_sd_88zPVUZngf0ZVrhd
      return true;
    }
    return false;
  }
  async sd_oUfbLz9FwaYEN82x(bh, parentSpanInst) {
    const nodes = ['sd_AKKC2ePn0psjZg5D'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_SPVta4pANIiKPGuG(bh, parentSpanInst);
      //appendnew_next_sd_oUfbLz9FwaYEN82x
      return true;
    }
    return false;
  }
  //appendnew_flow_books_crud_Catch
}
